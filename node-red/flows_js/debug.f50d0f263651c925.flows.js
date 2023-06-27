const Node = {
  "id": "f50d0f263651c925",
  "type": "debug",
  "z": "db9cae581f57fc84",
  "g": "05fc82ad62ba62fa",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "$count(payload) > 0 ? \t    { $flowContext(\"tablename\"): \"table exists\" }\t:\t    { $flowContext(\"tablename\"): \"table created\" }",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 740,
  "y": 1640,
  "wires": [],
  "_order": 384
}

module.exports = Node;