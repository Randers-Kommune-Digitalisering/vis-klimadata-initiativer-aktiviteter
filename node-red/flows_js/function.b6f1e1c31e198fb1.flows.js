const Node = {
  "id": "b6f1e1c31e198fb1",
  "type": "function",
  "z": "6a3178445dadff32",
  "name": "Set Status",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 610,
  "y": 280,
  "wires": [
    []
  ],
  "_order": 273
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  node.status({ fill: msg.status.fill, shape: msg.status.shape, text: msg.status.text });
  return msg;
}

module.exports = Node;