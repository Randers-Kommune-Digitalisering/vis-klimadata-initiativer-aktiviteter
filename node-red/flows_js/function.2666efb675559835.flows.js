const Node = {
  "id": "2666efb675559835",
  "type": "function",
  "z": "81d16821752304c3",
  "name": "Add timezone to timestamp",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 800,
  "y": 940,
  "wires": [
    [
      "d6d19781365cc830"
    ]
  ],
  "_order": 443
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