use lambda_runtime::{run, service_fn, tracing, Error, LambdaEvent};
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
struct Request {
    quote: String,
}

#[derive(Serialize)]
struct Response {
    req_id: String,
    msg: String,
}

async fn function_handler(event: LambdaEvent<Request>) -> Result<Response, Error> {
    // Extract some useful info from the request
    let quote = event.payload.quote;

    let msg = format!("{}....", quote);

    // Return `Response` (it will be serialized to JSON automatically by the runtime)
    Ok(Response {
        req_id: event.context.request_id,
        msg,
    })
}

#[tokio::main]
async fn main() -> Result<(), Error> {
    tracing::init_default_subscriber();
    run(service_fn(|event| function_handler(event))).await
}

#[cfg(test)]
mod tests {
    use super::*;
    use lambda_runtime::Context;

    #[tokio::test]
    async fn test_function_handler_english() {
        let request = Request {
            quote: "Hello, world".to_string(),
        };
        let context = Context::default();
        let event = LambdaEvent::new(request, context);

        let result = function_handler(event).await.unwrap();

        assert_eq!(result.msg, "Hello, world.");
    }
}
