const Node = {
  "id": "9024a83bd70af17a",
  "type": "debug",
  "z": "aad50484a0b40b44",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0\t? { \"os2iot_\" & data.id: \"table exists\" }\t:\t{ \"os2iot_\" & data.id: \"table created\" }\t/*:{\"warningstatus\" : payload.warningCount}*/",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1260,
  "y": 1020,
  "wires": [],
  "_order": 483
}

module.exports = Node;