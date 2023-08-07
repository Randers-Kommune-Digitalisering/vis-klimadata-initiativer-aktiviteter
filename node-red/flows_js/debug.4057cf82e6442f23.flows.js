const Node = {
  "id": "4057cf82e6442f23",
  "type": "debug",
  "z": "7f3219f0beb025c3",
  "g": "68a49c0bcc64ea66",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "$count(payload) = 0 ?\t    { $flowContext(\"tablename\"): \"table created\" }\t:\t    { $flowContext(\"tablename\"): \"table exists\" }",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1240,
  "y": 440,
  "wires": [],
  "_order": 241
}

module.exports = Node;