const Node = {
  "id": "fec630c9eb653d74",
  "type": "function",
  "z": "6a3178445dadff32",
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
      "a4418f97dc09e759"
    ]
  ],
  "_order": 294
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