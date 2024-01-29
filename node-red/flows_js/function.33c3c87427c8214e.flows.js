const Node = {
  "id": "33c3c87427c8214e",
  "type": "function",
  "z": "d5880abe3145a384",
  "g": "4854ea2eaa259ca4",
  "name": "set msg.columns",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 150,
  "y": 1340,
  "wires": [
    [
      "ab52478c66e276ce"
    ]
  ],
  "_order": 456
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.columns=msg.columns.toString();
  return msg;
}

module.exports = Node;