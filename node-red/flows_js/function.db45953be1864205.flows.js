const Node = {
  "id": "db45953be1864205",
  "type": "function",
  "z": "1e5470dae1365ec6",
  "name": "Parse if JSON",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 460,
  "y": 80,
  "wires": [
    [
      "74706634e295896e"
    ]
  ],
  "_order": 167
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var isJSON = false;
  
  function parseJSON(data)
  {
      try
      {
          var testIfJson = JSON.parse(data);
          
          if (typeof testIfJson == "object")
          {
              isJSON = true;
              return testIfJson;
          }
          else
          {
              data;
          }
      }
      catch
      {
          return data;
      }
  }
  
  msg.isJSON = isJSON;
  msg.payload = parseJSON(msg.payload);
  
  return msg;
}

module.exports = Node;