const Node = {
  "id": "40eb0a4b6f011462",
  "type": "function",
  "z": "f15ef1d8b0c08ad3",
  "name": "Set Status",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1170,
  "y": 560,
  "wires": [
    []
  ],
  "_order": 246
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  node.status({ fill: msg.status.fill, shape: msg.status.shape, text: msg.status.text });
  return msg;
}

module.exports = Node;