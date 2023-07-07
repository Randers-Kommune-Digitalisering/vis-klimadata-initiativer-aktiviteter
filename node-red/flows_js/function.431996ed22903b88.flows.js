const Node = {
  "id": "431996ed22903b88",
  "type": "function",
  "z": "db9cae581f57fc84",
  "g": "50ce8cdc07614c53",
  "name": "Status",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 790,
  "y": 700,
  "wires": [
    []
  ],
  "_order": 368
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