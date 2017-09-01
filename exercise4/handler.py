import json

def hello(event, context):
  body = {
    "message": "Go Serverless v1.0! Your function executed successfully!",
  }

  response = {
    "statusCode": 200,
    "body": json.dumps(body)
  }

  return response

def mitest(event, context):
  body = {
    "message": "Esta es mi prueba de una respuesta sin paramatros de entrada",
#    "input": event
  }
  response = {
    "statusCode": 200,
    "body": json.dumps(body)
  }
  return response
