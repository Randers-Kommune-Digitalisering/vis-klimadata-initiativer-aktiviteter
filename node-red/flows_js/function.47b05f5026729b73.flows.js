const Node = {
  "id": "47b05f5026729b73",
  "type": "function",
  "z": "aad50484a0b40b44",
  "name": "Rens svar",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 300,
  "y": 120,
  "wires": [
    [
      "fcf306e4303e1c3d"
    ]
  ],
  "_order": 515
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  let payload = msg.payload;
  
  msg = {};
  msg.payload = payload;
  
  return msg;
}

module.exports = Node;