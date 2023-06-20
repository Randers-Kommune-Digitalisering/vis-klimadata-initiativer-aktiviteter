const Node = {
  "id": "ced4dc1fee3ea64d",
  "type": "function",
  "z": "db9cae581f57fc84",
  "g": "c5d3f734f70288bb",
  "name": "Shift datasets",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 880,
  "y": 300,
  "wires": [
    [
      "1d22b7be9040728a"
    ]
  ],
  "_order": 368
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  // Shift dataset[0]
  var datasets = flow.get("datasets");
  datasets.shift();
  
  // Set new datasets flow var
  flow.set("datasets", datasets);
  
  return msg;
}

module.exports = Node;