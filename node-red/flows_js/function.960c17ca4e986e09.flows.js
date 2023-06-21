const Node = {
  "id": "960c17ca4e986e09",
  "type": "function",
  "z": "7f3219f0beb025c3",
  "g": "cfbcffc3f4a1cd56",
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
  "x": 470,
  "y": 1260,
  "wires": [
    [
      "0322bf29e384d625"
    ]
  ],
  "_order": 169
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
  
  // Initialize msg.flatlist as an empty array
  msg.flatlist = [];
  
  // Append additional columns to msg.sqlDataType as null
  for (let i = 0; i < msg.columnnames.length; i++)
  {
      const element = msg.columnnames[i];
      msg.sqlDataType[element] = null;
  }
  
  // Iterate through msg.sqlDataType and suggest SQL datatype for each missing value using data[0]
  for (var key in msg.sqlDataType)
  {
      if (msg.sqlDataType[key] == null)
          msg.sqlDataType[key] = suggestSqlDataType((msg.data[0])[key]);
  
      msg.flatlist.push({ "name": key, "type": msg.sqlDataType[key] });
  }
  
  return msg;
}

module.exports = Node;