const Node = {
  "id": "43379a8b2078619b",
  "type": "function",
  "z": "db9cae581f57fc84",
  "g": "92d5ed7235f71cf0",
  "name": "Parse to float",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 750,
  "y": 820,
  "wires": [
    [
      "22413d13c16b68d5",
      "8ecbeaa7475d8118"
    ]
  ],
  "_order": 254
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  // Number(s) to parse
  var data = msg.data;
  
  // For each variable in msg.dataskabelon
  for (const [key, value] of Object.entries(msg.dataskabelon))
  {
      // Check if variable type is float
      if(value == "FLOAT")
      {
          // For each data object
          data.forEach(item =>
          {
              // Parse
              const str = String(item[key]);
              var value = str.replace(",", ".");
  
              var floatvalue = parseFloat(value);
              item[key] = floatvalue;
          });
      }
  }
  return msg;
}

module.exports = Node;