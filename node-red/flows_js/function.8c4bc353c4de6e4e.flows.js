const Node = {
  "id": "8c4bc353c4de6e4e",
  "type": "function",
  "z": "db9cae581f57fc84",
  "g": "8978c7606345d52b",
  "name": "Sæt datatyper for \\n kolonner dynamisk",
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
  "x": 730,
  "y": 1840,
  "wires": [
    [
      "0d69249b77e570a0"
    ]
  ],
  "_order": 368
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
  for (var key in flow.get("dataskabelon")) {
      if (flow.get("dataskabelon").hasOwnProperty(key)) {
          msg.payload.sqlDataType[key] = suggestSqlDataType(flow.get("dataskabelon")[key]);
          msg.payload.flatlist.push({ "name": key, "type": msg.payload.sqlDataType[key] });
      }
  }
  
  //flow.set("dataskabelon", msg.payload.sqlDataType);
  flow.set("flatlist", msg.payload.flatlist);
  
  return msg;
}

module.exports = Node;