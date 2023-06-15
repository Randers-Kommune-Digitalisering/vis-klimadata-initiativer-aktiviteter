const Node = {
  "id": "fdc8a7de961f0bb0",
  "type": "function",
  "z": "067b777cae534d43",
  "name": "Sæt datatyper for kolonner",
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
  "x": 580,
  "y": 780,
  "wires": [
    []
  ],
  "_order": 140
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, dayjs) {
  // Function to suggest SQL datatype based on string content
  function suggestSqlDataType(value)
  {
      // Try to parse value as integer or as float (regEx)
      if (Number.isInteger(Number(value)) ||
         (/^([0-9]+)(,|\.){1}([0-9]+)$/.test(value)))
          return "FLOAT";
  
      // Check if value is ISO date using RegEx
      if (/^([0-9]{4})(-|\/|.)(1[0-2]|0[1-9])(-|\/|.)(3[01]|[12][0-9]|0[1-9])$|^(3[01]|[12][0-9]|0[1-9])(-|\/|.)(1[0-2]|0[1-9])(-|\/|.)([0-9]{4})$/.test(value))
          return "DATE";
  
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
  
  msg.dataskabelon = msg.payload.sqlDataType;
  
  return msg;
}

module.exports = Node;