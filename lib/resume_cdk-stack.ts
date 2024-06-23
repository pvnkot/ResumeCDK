import {Stack, StackProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { FOO } from '#src/constants';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ResumeCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    console.log({FOO});
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'ResumeCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
