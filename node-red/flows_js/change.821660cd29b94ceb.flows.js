const Node = {
  "id": "821660cd29b94ceb",
  "type": "change",
  "z": "81d16821752304c3",
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
  "x": 760,
  "y": 860,
  "wires": [
    [
      "2666efb675559835"
    ]
  ],
  "_order": 442
}

module.exports = Node;