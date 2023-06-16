const Node = {
  "id": "0fbdd76142c49350",
  "type": "function",
  "z": "7f3219f0beb025c3",
  "name": "function 1",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 320,
  "y": 1140,
  "wires": [
    [
      "6cef18fad00d03a7"
    ]
  ],
  "_order": 179
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg = msg.payload;
  return msg;
}

module.exports = Node;