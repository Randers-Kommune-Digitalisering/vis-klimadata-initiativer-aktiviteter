const Node = {
  "id": "d9021ff9a7ff42bf",
  "type": "function",
  "z": "db9cae581f57fc84",
  "g": "c5d3f734f70288bb",
  "name": "Status",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1210,
  "y": 280,
  "wires": [
    []
  ],
  "_order": 371
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var datasetsRemaining = (flow.get("datasets")).length -1;
  
  var status = {};
  status.fill     = datasetsRemaining > 0 ? "yellow" : "green";
  status.shape    = datasetsRemaining > 0 ? "ring" : "dot";
  status.text     = datasetsRemaining > 0 ? "Datasæt i kø: " + datasetsRemaining : "Done";
  
  node.status({ fill: status.fill, shape: status.shape, text: status.text });
  
  return msg;
}

module.exports = Node;