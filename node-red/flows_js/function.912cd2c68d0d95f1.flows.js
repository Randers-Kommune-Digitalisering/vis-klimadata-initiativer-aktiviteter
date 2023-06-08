const Node = {
  "id": "912cd2c68d0d95f1",
  "type": "function",
  "z": "80076417ef9f662a",
  "name": "Add timezone to timestamp",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 900,
  "y": 120,
  "wires": [
    [
      "79d8b2a874c4987a"
    ]
  ],
  "_order": 252
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  // Define options for the date format
  const options = {
      timeZone: msg.config.timezone // Set the timezone from the message configuration
  };
  
  // Get the timestamp from the message payload
  const timestamp = msg.payload;
  
  // Create a new Date object using the timestamp,
  // and format it as a time string using the specified options
  // The 'en-GB' locale is used to match the cron syntax with colons between numbers
  var date = new Date(timestamp).toLocaleTimeString('en-GB', options);
  
  // Update the message payload with the formatted date
  msg.payload = date;
  
  // Return the updated message
  return msg;
}

module.exports = Node;