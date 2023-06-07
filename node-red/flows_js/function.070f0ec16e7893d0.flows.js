const Node = {
  "id": "070f0ec16e7893d0",
  "type": "function",
  "z": "452aaf8dc5cd8d45",
  "g": "80e6cc7cb0d92329",
  "name": "suggestSqlDataType",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "dayjs",
      "module": "dayjs"
    }
  ],
  "x": 720,
  "y": 420,
  "wires": [
    [
      "c0a1ad499d5c94df"
    ]
  ],
  "_order": 409
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, dayjs) {
  // Function to suggest SQL datatype based on string content
  function suggestSqlDataType(value) {
      // Try to parse value as integer
      if (Number.isInteger(Number(value))) {
          return "INTEGER";
      }
  
      // Check if value is a date string in the format supplied in msg.validDates
      var validDateFormats = msg.validDateFormats;
      validDateFormats = !Array.isArray(validDateFormats) ? [validDateFormats] : validDateFormats;
      var isValid = false;
  
      for (var i = 0; i < validDateFormats.length; i++) {
          var isCurrentFormatValid = dayjs(value, validDateFormats[i], true).isValid();
          //console.log(value + " is format (i=" + i + ") " + validDateFormats[i] + "? " + isCurrentFormatValid);
  
          if (isCurrentFormatValid) {
              isValid = true;
              break;
          }
      }
      if (isValid)
          return "DATE";
  
      // Try to parse value as floating-point number
      if (!isNaN(parseFloat(value))) {
          return "FLOAT";
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