const Node = {
  "id": "ec185aadade979f4",
  "type": "function",
  "z": "db9cae581f57fc84",
  "g": "92d5ed7235f71cf0",
  "name": "JSON fix",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 440,
  "y": 2680,
  "wires": [
    [
      "fc03246ef667b432"
    ]
  ],
  "_order": 464
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.data = JSON.parse(JSON.stringify(msg.data));
  return msg;
}

module.exports = Node;