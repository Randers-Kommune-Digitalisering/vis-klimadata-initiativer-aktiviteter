const Node = {
  "id": "1cbaf9dd5f00f15d",
  "type": "function",
  "z": "6b360b454d19172a",
  "g": "bb671390488c23f1",
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
  "_order": 287
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  node.status({ fill: msg.status.fill, shape: msg.status.shape, text: msg.status.text });
  return msg;
}

module.exports = Node;