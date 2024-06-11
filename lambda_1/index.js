exports.handler = async (event) => {
  // Your Lambda function logic goes here
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello World Lambda from repo!"),
  };
  return response;
};
