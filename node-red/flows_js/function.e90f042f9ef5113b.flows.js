const Node = {
  "id": "e90f042f9ef5113b",
  "type": "function",
  "z": "db9cae581f57fc84",
  "g": "295478fff9540c6a",
  "name": "function 3",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1240,
  "y": 360,
  "wires": [
    [
      "b89f582204c58dfe"
    ]
  ],
  "_order": 359
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg = msg.payload;
  return msg;
}

module.exports = Node;