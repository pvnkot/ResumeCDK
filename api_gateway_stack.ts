import { ApiStack } from "api_stack";
import { App, Stack, StackProps } from "aws-cdk-lib";
import { IResource, LambdaIntegration, MockIntegration, PassthroughBehavior, RestApi } from "aws-cdk-lib/aws-apigateway";

interface ApiGatewayStackProps extends StackProps {

}

export class ApiGatewayStack extends Stack {
  public apiGateway: RestApi;

  constructor(app: App, id: string, props?: ApiGatewayStackProps) {
    super(app, id, props);

    const apiStack = new ApiStack(app, "ApiStack");

    const getResumeSectionApi = apiStack.getResumeSectionApi;

    this.apiGateway = new RestApi(this, "resume-api", {
      restApiName: 'ResumeService',
    })

    const resumeSection = this.apiGateway.root.addResource('{resume-section-id}');
    resumeSection.addMethod("GET", new LambdaIntegration(getResumeSectionApi));
    this.addCorsOptions(resumeSection);
  }

  private addCorsOptions = (apiResource: IResource) => {
    apiResource.addMethod('OPTIONS', new MockIntegration({
      integrationResponses: [{
        statusCode: '200',
        responseParameters: {
          'method.response.header.Access-Control-Allow-Headers': "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent'",
          'method.response.header.Access-Control-Allow-Origin': "'*'",
          'method.response.header.Access-Control-Allow-Credentials': "'false'",
          'method.response.header.Access-Control-Allow-Methods': "'OPTIONS,GET,POST'",
        },
      }],
      // In case you want to use binary media types, comment out the following line
      passthroughBehavior: PassthroughBehavior.NEVER,
      requestTemplates: {
        "application/json": "{\"statusCode\": 200}"
      },
    }), {
      methodResponses: [{
        statusCode: '200',
        responseParameters: {
          'method.response.header.Access-Control-Allow-Headers': true,
          'method.response.header.Access-Control-Allow-Methods': true,
          'method.response.header.Access-Control-Allow-Credentials': true,
          'method.response.header.Access-Control-Allow-Origin': true,
        },
      }]
    })
  };
}