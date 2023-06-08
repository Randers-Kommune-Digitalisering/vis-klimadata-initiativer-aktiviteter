const Node = {
  "id": "97f90c6164b14d53",
  "type": "function",
  "z": "14a0d5d3f4f8bbaa",
  "g": "7903155cb43d8194",
  "name": "suggestSqlDataType",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 420,
  "y": 480,
  "wires": [
    [
      "b3fede442247b8f7"
    ]
  ],
  "_order": 472
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  // Function to suggest SQL datatype based on string content
  function suggestSqlDataType(value) {
      // Try to parse value as integer
      if (Number.isInteger(Number(value))) {
          return "INTEGER";
      }
  
      // Try to parse value as floating-point number
      if (!isNaN(parseFloat(value))) {
          return "FLOAT";
      }
  
      // Check if value is a date string in the format "YYYY-MM-DD"
      if (/^\d{4}-\d{2}-\d{2\}$/.test(value)) {
          return "DATE";
      }
  
      // Check if value is a date-time string in the format "YYYY-MM-DDTHH:mm:ss"
      if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(value)) {
          return "DATETIME";
      }
  
      // Default to VARCHAR with a length of 255 characters
      return "VARCHAR(255)";
  }
  
  // Initialize msg.sqlDataType as an empty object
  msg.payload.sqlDataType = {};
  
  // Initialize msg.flatlist as an empty array
  msg.payload.flatlist = [];
  
  // Iterate through the input JSON object and suggest SQL datatype for each value
  for (var key in msg.dataskabelon) {
      if (msg.dataskabelon.hasOwnProperty(key)) {
          msg.payload.sqlDataType[key] = suggestSqlDataType(msg.dataskabelon[key]);
          msg.payload.flatlist.push({ "name": key, "type": msg.payload.sqlDataType[key] });
      }
  }
  
  return msg;
  
}

module.exports = Node;