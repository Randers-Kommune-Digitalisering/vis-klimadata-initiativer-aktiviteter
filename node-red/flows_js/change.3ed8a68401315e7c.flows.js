const Node = {
  "id": "3ed8a68401315e7c",
  "type": "change",
  "z": "067b777cae534d43",
  "g": "8a31b6b1e5d45bbe",
  "name": "Save metadata",
  "rules": [
    {
      "t": "set",
      "p": "metadata",
      "pt": "msg",
      "to": "{ \"id\" : payload.id }",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 480,
  "y": 440,
  "wires": [
    [
      "31cd35aa26aed776"
    ]
  ],
  "_order": 165
}

module.exports = Node;