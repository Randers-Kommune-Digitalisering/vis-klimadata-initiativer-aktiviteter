const Node = {
  "id": "46723c2ac685825a",
  "type": "function",
  "z": "067b777cae534d43",
  "g": "997f4664c676fae7",
  "name": "Set Status",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1370,
  "y": 80,
  "wires": [
    []
  ],
  "_order": 235
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    node.status({ fill: msg.status.fill, shape: msg.status.shape, text: msg.status.text });
    return msg;
  
}

module.exports = Node;