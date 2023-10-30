const Node = {
  "id": "a498ed73b46df0ee",
  "type": "function",
  "z": "540d125162a3e331",
  "name": "Status",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 730,
  "y": 380,
  "wires": [
    [
      "b030c1a6f8a213b9"
    ]
  ],
  "_order": 215
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var count = flow.get("count");
  
  var status = {};
  status.fill     = "yellow";
  status.shape    = "ring";
  status.text     = "Tæller dataset ... " + msg.timeRemaining + "s";
  
  node.status({ fill: status.fill, shape: status.shape, text: status.text });
  
  return msg;
}

module.exports = Node;