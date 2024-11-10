#!/usr/bin/env node
import { App } from "aws-cdk-lib";
import { BackendStack } from "./backend_stack";

const app = new App();
new BackendStack(app, 'ResumeBackendStack', {
    env : {
      account: process.env.AWS_ACCOUNT_ID, 
      region: process.env.AWS_REGION,
  }
});

app.synth();