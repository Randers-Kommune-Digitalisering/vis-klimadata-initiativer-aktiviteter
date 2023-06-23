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
  "x": 900,
  "y": 280,
  "wires": [
    [
      "e729b7eab61f6ede"
    ]
  ],
  "_order": 348
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