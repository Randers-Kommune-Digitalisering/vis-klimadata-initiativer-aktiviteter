const Node = {
  "id": "1b4b06f054a726ba",
  "type": "debug",
  "z": "aad50484a0b40b44",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0\t? { $flowContext(\"metadata_tablename\"): \"table exists\" }\t:\t{ $flowContext(\"metadata_tablename\"): \"table created\" }\t/*:{\"warningstatus\" : payload.warningCount}*/",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 880,
  "y": 360,
  "wires": [],
  "_order": 478
}

module.exports = Node;