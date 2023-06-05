const Node = {
  "id": "487ad510ea1fe3e0",
  "type": "change",
  "z": "80076417ef9f662a",
  "name": "Get timestamp",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$millis()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 860,
  "y": 80,
  "wires": [
    [
      "912cd2c68d0d95f1"
    ]
  ],
  "_order": 192
}

module.exports = Node;