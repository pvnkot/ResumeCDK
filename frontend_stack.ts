
import { App, Stack, StackProps } from "aws-cdk-lib";


// const PIPELINE_ID = "ResumeFrontend";

export class FrontendStack extends Stack {
  constructor(app: App, id: string, props: StackProps) {
    super(app, id, props);

    // const lambdaFunction = new Function(this, 'rust-hello', {
    //   description:
    //     'Deploying a Rust function on Lambda using the custom runtime',
    //   code: Code.fromAsset(
    //     'resources/target/aarch64-unknown-linux-musl/release/lambda'
    //   ),
    //   runtime: Runtime.PROVIDED_AL2,
    //   architecture: [Architecture.ARM_64],
    //   handler: 'not.required',
    //   environment: {
    //     RUST_BACKTRACE: '1',
    //   },
    //   logRetention: RetentionDays.ONE_WEEK,
    // })
    
  }


}