const Node = {
  "id": "e90f042f9ef5113b",
  "type": "function",
  "z": "db9cae581f57fc84",
  "name": "function 3",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 870,
  "y": 400,
  "wires": [
    [
      "a3651d79f0bb336c"
    ]
  ],
  "_order": 359
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg = msg.payload;
  return msg;
}

module.exports = Node;