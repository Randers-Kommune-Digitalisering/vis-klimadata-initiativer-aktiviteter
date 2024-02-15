const Node = {
  "id": "8e3b1e26b7438d95",
  "type": "function",
  "z": "d5880abe3145a384",
  "g": "16cba9e5783d458b",
  "name": "Loop over datasets",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 660,
  "y": 440,
  "wires": [
    [
      "872d8972b306d79c"
    ]
  ],
  "_order": 411
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    msg.query=Object.values(msg.datasets)[msg.counter];
    msg.tablename=Object.keys(msg.datasets)[msg.counter];
    msg.length=Object.values(msg.datasets).length;
    return msg;
  
}

module.exports = Node;