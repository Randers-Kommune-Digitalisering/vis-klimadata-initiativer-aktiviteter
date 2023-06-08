const Node = {
  "id": "5240643f4d6e1617",
  "type": "change",
  "z": "6a3178445dadff32",
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
      "fec630c9eb653d74"
    ]
  ],
  "_order": 290
}

module.exports = Node;