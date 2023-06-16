const Node = {
  "id": "6cef18fad00d03a7",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "68638907faf95219",
  "name": "Fjern overflødige \\n datafelter",
  "rules": [
    {
      "t": "delete",
      "p": "payload.OMRÅDE",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.TID",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 1040,
  "wires": [
    [
      "54bea232f93f8f0b"
    ]
  ],
  "_order": 142
}

module.exports = Node;