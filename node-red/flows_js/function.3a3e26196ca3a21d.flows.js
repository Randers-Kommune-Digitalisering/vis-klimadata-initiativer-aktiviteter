const Node = {
  "id": "3a3e26196ca3a21d",
  "type": "function",
  "z": "5ee0ae05e3ad5b5a",
  "name": "Set Status",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 530,
  "y": 300,
  "wires": [
    []
  ],
  "_order": 142
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  node.status({ fill: msg.status.fill, shape: msg.status.shape, text: msg.status.text });
  return msg;
}

module.exports = Node;