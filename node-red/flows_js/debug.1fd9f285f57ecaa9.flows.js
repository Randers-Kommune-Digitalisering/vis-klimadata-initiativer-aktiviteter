const Node = {
  "id": "1fd9f285f57ecaa9",
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
  "x": 820,
  "y": 420,
  "wires": [],
  "_order": 341
}

module.exports = Node;