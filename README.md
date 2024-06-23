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
- ECS based web-server written in Rust
- Application load balancer that routes requests to the web server
- DNS config for website
- S3 bucket that contains static web assets

DNS -> Amazon Route53 -> Origin (S3 bucket that contains web assets) -> calls ECS server written in Rust

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
