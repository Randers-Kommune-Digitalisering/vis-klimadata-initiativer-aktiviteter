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
  "y": 1360,
  "wires": [
    [
      "ab52478c66e276ce",
      "cdee643426cd1c41"
    ]
  ],
  "_order": 462
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    msg.columns=msg.columns.toString();
    msg.filename = encodeURI("ØK".concat(msg.tablename.replace("_", "-"), ".csv"));
    return msg;
  
}

module.exports = Node;