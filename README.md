# ResumeCDK

This project contains the CDK resources that will be used to build my personal website

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## What sections will the resume page contain?
- Technical Skills
  - Languages
  - Frameworks
  - Machine Learning frameworks
  - Cloud technologies
  - Source control
  - Operating systems and tools
- Industry experience
  - Company
  - Title
  - Tenure
  - Location
  - Projects
- Education
  - University
  - Degree
  - Duration
  - Location
  - CGPA/GPA
- Academic Projects

## What CDK resources will this package contain?
- Lambda-based APIs written in Rust
- API Gateway with Rest APIs to implement API management features like request validation, per client API throttling
- Dynamo DB to store contents of the resume
- S3 bucket that contains static web assets


### Flow:
DNS -> Amazon Route53 -> Origin (S3 bucket that contains web assets) -> calls API Gateway -> Lambda-based APIs written in Rust

UI -> API Gateway -> Lambdas to get various sections of resume data

### Pipelines
The AWS account will have 2 CodePipelineV2 entities:
1. Contains the website code, stored in a S3  bucket
2. Contains API Gateway and the Lambda APIs

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `cdk deploy`  deploy this stack to your default AWS account/region
* `cdk diff`    compare deployed stack with current state
* `cdk synth`   emits the synthesized CloudFormation template
