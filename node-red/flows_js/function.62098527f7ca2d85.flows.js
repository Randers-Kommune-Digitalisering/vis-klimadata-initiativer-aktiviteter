const Node = {
  "id": "62098527f7ca2d85",
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
  "y": 480,
  "wires": [
    [
      "d802b2f6349780fa"
    ]
  ],
  "_order": 231
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