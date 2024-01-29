const Node = {
  "id": "58ed4fadd3d56588",
  "type": "function",
  "z": "752a5429c81af8a5",
  "name": "Loop function",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 690,
  "y": 340,
  "wires": [
    [
      "b0dd2f3a028471e5"
    ]
  ],
  "_order": 735
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.query=Object.values(msg.datasets)[msg.counter];
  msg.table=Object.keys(msg.datasets)[msg.counter];
  msg.length=Object.values(msg.datasets).length;
  return msg;
}

module.exports = Node;