use lambda_runtime::{service_fn, LambdaEvent, Error};
use log::LevelFilter;
use serde_json::{json, Value};
use simple_logger::SimpleLogger;

#[tokio::main]
async fn main() -> Result<(), Error> {
  SimpleLogger::new()
    .with_level(LevelFilter::Info)
    .init()
    .unwrap();

  let func = service_fn(handler);
  lambda_runtime::run(func).await?;
  Ok(())
}

async fn handler(event: LambdaEvent<Value>) -> Result<Value, Error> {
  let payload = event.payload;
  let message = payload["message"].as_str().unwrap_or("world");
  let first_name = payload["firstName"].as_str().unwrap_or("Anonymous");

  let response = format!("Hello, {}! Your name is {}", message, first_name);
  log::info!("{}", response);

  Ok(json!({ "response": response }))
}
