const Node = {
  "id": "69284dc1e2e54577",
  "type": "debug",
  "z": "9cd2fc26979e7dd1",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0\t? { $flowContext(\"tablename\"): \"table exists\" }\t:\t{ $flowContext(\"tablename\"): \"table created\" }\t/*:{\"warningstatus\" : payload.warningCount}*/",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1460,
  "y": 120,
  "wires": [],
  "_order": 308
}

module.exports = Node;