const Node = {
  "id": "de3f5d8f24b2cd6a",
  "type": "function",
  "z": "db9cae581f57fc84",
  "g": "50ce8cdc07614c53",
  "name": "Shift datasets",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 380,
  "y": 720,
  "wires": [
    [
      "ad34af8b3575f3e5",
      "b440a2d7dc79e5d4"
    ]
  ],
  "_order": 367
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