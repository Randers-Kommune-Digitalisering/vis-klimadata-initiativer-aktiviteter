const Node = {
  "id": "485a43a04e99f6b3",
  "type": "change",
  "z": "36a828017042c198",
  "g": "7b1390c441209648",
  "name": "Fjern overflødige \\n datafelter",
  "rules": [
    {
      "t": "delete",
      "p": "payload.OMRÅDE",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.ENHED",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 570,
  "y": 480,
  "wires": [
    [
      "5476474f50f31f4e"
    ]
  ],
  "_order": 168
}

module.exports = Node;