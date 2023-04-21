const Node = {
  "id": "d9445c0bdd2aa1b8",
  "type": "function",
  "z": "5d9f87f4934f2873",
  "name": "Simultated HTTP server responses",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 760,
  "y": 60,
  "wires": [
    [
      "d08add757d64d942"
    ]
  ],
  "_order": 214
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  // Set the default success rate
  const successRate = 0.05;
  
  // Array of desired error codes
  const errorCodes = [400, 401, 403, 404, 500, 501, 503];
  
  // Generate a random number between 0 and 1
  const random = Math.random();
  
  // If the random number is less than the success rate, simulate a successful response
  if (random < successRate) {
      msg.statusCode = 200;
      msg.message = 'OK';
  } else {
      // If the random number is greater than or equal to the success rate, simulate an error response
      // Select a random errorCode from the errorCodes array
      const errorCode = errorCodes[Math.floor(Math.random() * errorCodes.length)];
  
      // Log the errorCode to the console for verification
      console.log(`Simulated errorCode: ${errorCode}`);
  
      // Map the errorCode to the corresponding HTTP status code and status message
      msg.statusCode = errorCode;
      switch (errorCode) {
          case 400:
              msg.error = 'Bad Request';
              break;
          case 401:
              msg.error = 'Unauthorized';
              break;
          case 403:
              msg.error = 'Forbidden';
              break;
          case 404:
              msg.error = 'Not Found';
              break;
          case 500:
              msg.error = 'Internal Server Error';
              break;
          case 501:
              msg.error = 'Not Implemented';
              break;
          case 503:
              msg.error = 'Service Unavailable';
              break;
          default:
              msg.statusCode = 500;
              msg.error = 'Internal Server Error';
      }
  
      // Raise an error using the node.error function
      node.error(`Simulated error: ${msg.statusCode} ${msg.error}`, msg);
  }
  
  // Return the modified msg object
  return msg;
  
}

module.exports = Node;