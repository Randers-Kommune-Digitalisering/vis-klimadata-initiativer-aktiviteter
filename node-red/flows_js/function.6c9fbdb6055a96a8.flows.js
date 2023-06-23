const Node = {
  "id": "6c9fbdb6055a96a8",
  "type": "function",
  "z": "5ee0ae05e3ad5b5a",
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
      "3213d6b6dcbc1775"
    ]
  ],
  "_order": 110
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