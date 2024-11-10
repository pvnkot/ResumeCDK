import { App, Stack, StackProps } from "aws-cdk-lib";
import {Function, Runtime, Code, Architecture } from "aws-cdk-lib/aws-lambda";
import { RetentionDays } from "aws-cdk-lib/aws-logs";

interface ApiStackProps extends StackProps {

}

export class ApiStack extends Stack {
  public getResumeSectionApi: Function;

  constructor(app: App, id: string, props?: ApiStackProps) {
    super(app, id, props);

    this.getResumeSectionApi = new Function(this, 'get-resume-section', {
      description:
        'Gets resume section object given a section ID',
      code: Code.fromAsset(
        'resources/target/aarch64-unknown-linux-musl/release/lambda'
      ),
      runtime: Runtime.PROVIDED_AL2,
      architecture: Architecture.ARM_64,
      handler: 'not.required',
      environment: {
        RUST_BACKTRACE: '1',
      },
      logRetention: RetentionDays.ONE_WEEK,
    });
  }
}