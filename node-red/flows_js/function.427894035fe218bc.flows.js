const Node = {
  "id": "427894035fe218bc",
  "type": "function",
  "z": "540d125162a3e331",
  "name": "Status",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1330,
  "y": 140,
  "wires": [
    []
  ],
  "_order": 202
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var count = flow.get("count");
  
  var status = {};
  status.fill     = count > 0 ? "green" : "red";
  status.shape    = count > 0 ? "dot" : "ring";
  status.text     = count > 0 ? "Antal datasæt: " + count : "Ingen datasæt!";
  
  node.status({ fill: status.fill, shape: status.shape, text: status.text });
  
  return msg;
}

module.exports = Node;