const Node = {
  "id": "8e3b1e26b7438d95",
  "type": "function",
  "z": "d5880abe3145a384",
  "name": "Loop function",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 690,
  "y": 360,
  "wires": [
    [
      "872d8972b306d79c"
    ]
  ],
  "_order": 685
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.query=Object.values(msg.datasets)[msg.counter];
  msg.tablename=Object.keys(msg.datasets)[msg.counter];
  msg.length=Object.values(msg.datasets).length;
  return msg;
}

module.exports = Node;