const Node = {
  "id": "dc701a7f97c1381a",
  "type": "debug",
  "z": "aad50484a0b40b44",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0 ?\t{\t    data.tablename: \"data insert error\"\t}\t:\t{\t    data.tablename: \"new data inserted\",\t    \"rows\": payload.affectedRows\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1280,
  "y": 1360,
  "wires": [],
  "_order": 494
}

module.exports = Node;