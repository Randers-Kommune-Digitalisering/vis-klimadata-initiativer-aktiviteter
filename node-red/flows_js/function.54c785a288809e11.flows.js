const Node = {
  "id": "54c785a288809e11",
  "type": "function",
  "z": "f15ef1d8b0c08ad3",
  "g": "acc1c82d640f13f3",
  "name": "Set Status",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1370,
  "y": 60,
  "wires": [
    []
  ],
  "_order": 167
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  node.status({ fill: msg.status.fill, shape: msg.status.shape, text: msg.status.text });
  return msg;
}

module.exports = Node;