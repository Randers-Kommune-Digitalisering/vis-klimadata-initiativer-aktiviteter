const Node = {
  "id": "7d6eae28fa281668",
  "type": "debug",
  "z": "b211627962aab2cb",
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
  "_order": 463
}

module.exports = Node;