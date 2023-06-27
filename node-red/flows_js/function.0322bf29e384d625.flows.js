const Node = {
  "id": "0322bf29e384d625",
  "type": "function",
  "z": "7f3219f0beb025c3",
  "g": "cfbcffc3f4a1cd56",
  "name": "Parse to float",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 690,
  "y": 1420,
  "wires": [
    [
      "d8d3271581586bb1"
    ]
  ],
  "_order": 193
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  // Number(s) to parse
  var data = msg.data;
  
  // For each variable in data[0]
  for (const [key, value] of Object.entries(data[0]))
  {
      // Check if variable type is float
      if(value == "FLOAT")
      {
          // For each data object
          data.forEach(item =>
          {
              // Parse
              const str = String(item[key]);
              var floatvalue = str.replace(",", ".");
  
              floatvalue = parseFloat(floatvalue);
              item[key] = floatvalue;
          });
      }
  }
  return msg;
}

module.exports = Node;