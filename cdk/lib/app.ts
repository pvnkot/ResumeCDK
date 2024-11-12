#!/usr/bin/env node
import 'source-map-support/register';
import {App} from 'aws-cdk-lib';
import { ApiStack } from './backend/api-stack';

const app = new App();
new ApiStack(app, 'ResumeServiceStack', {
  env: { account: process.env.AWS_ACCOUNT_ID, region: process.env.AWS_REGION },
});