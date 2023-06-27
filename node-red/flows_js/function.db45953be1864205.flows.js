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
    []
  ],
  "_order": 162
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  function parseJSON(data)
  {
      try {
          var testIfJson = JSON.parse(data);
          
          if (typeof testIfJson == "object")
          {
              return testIfJson;
          } else {
              data;
          }
      }
      catch {
          return data;
      }
  }
  
  msg.payload = parseJSON(msg.payload);
  
  return msg;
}

module.exports = Node;