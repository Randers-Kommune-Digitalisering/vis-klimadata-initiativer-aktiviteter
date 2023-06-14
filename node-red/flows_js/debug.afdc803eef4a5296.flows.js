const Node = {
  "id": "afdc803eef4a5296",
  "type": "debug",
  "z": "db9cae581f57fc84",
  "g": "05fc82ad62ba62fa",
  "name": "Nye rækker i fil?",
  "active": true,
  "tosidebar": true,
  "console": false,
  "tostatus": false,
  "complete": "(data ~> $count()) >\t$lookup(payload[0], payload[0] ~> $keys()[0])",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1080,
  "y": 560,
  "wires": [],
  "_order": 346
}

module.exports = Node;