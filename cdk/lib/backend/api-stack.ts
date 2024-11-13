import 'module-alias/register';
import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { RustFunction } from 'cargo-lambda-cdk';

export class ApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const architecture = lambda.Architecture.ARM_64;
    const layerVersion = architecture === lambda.Architecture.ARM_64 ? '68' : '60';

    // Create Lambda function using cargo-lambda-cdk
    const getResumeSectionByIdFunction = new RustFunction(this, 'GetResumeSectionById', {
      functionName: 'get-resume-section-by-id',
      manifestPath: '..', // Points to the parent directory where Cargo.toml is located
      architecture,
      memorySize: 128,
      timeout: Duration.seconds(30),
    });
  }
}
