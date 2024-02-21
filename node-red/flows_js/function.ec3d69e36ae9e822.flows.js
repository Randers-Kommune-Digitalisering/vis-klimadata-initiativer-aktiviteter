const Node = {
  "id": "ec3d69e36ae9e822",
  "type": "function",
  "z": "39591030e2e9860e",
  "g": "80fb5b1757ce0cd1",
  "name": "Identificer og sætter datatyper \\n for kolonner dynamisk",
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
  "x": 770,
  "y": 680,
  "wires": [
    [
      "7d2ea6f6e20bb31c"
    ]
  ],
  "_order": 683
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