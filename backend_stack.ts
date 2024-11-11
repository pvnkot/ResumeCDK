import { ApiGatewayStack } from "./api_gateway_stack";
import { App, Stack, StackProps } from "aws-cdk-lib";
import { RestApi } from "aws-cdk-lib/aws-apigateway";

export class BackendStack extends Stack {
  public apiGatewayWithIntegration: RestApi;
  

  constructor(app: App, id: string, props: StackProps) {
    super(app, id, props);
    const apiGatewayStack = new ApiGatewayStack(app, "ApiGatewayStack");
    this.apiGatewayWithIntegration = apiGatewayStack.apiGateway;
  }
}