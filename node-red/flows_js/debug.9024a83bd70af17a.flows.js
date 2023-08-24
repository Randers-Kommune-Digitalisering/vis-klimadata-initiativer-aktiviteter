const Node = {
  "id": "9024a83bd70af17a",
  "type": "debug",
  "z": "aad50484a0b40b44",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0\t? { data.tablename: \"table exists\" }\t:\t{ data.tablename: \"table created\" }",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1280,
  "y": 1040,
  "wires": [],
  "_order": 481
}

module.exports = Node;