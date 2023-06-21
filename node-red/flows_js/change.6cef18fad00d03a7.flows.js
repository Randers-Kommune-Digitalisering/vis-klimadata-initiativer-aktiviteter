const Node = {
  "id": "6cef18fad00d03a7",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "68638907faf95219",
  "name": "Fjern overflødige \\n datafelter",
  "rules": [
    {
      "t": "set",
      "p": "columns_todelete",
      "pt": "msg",
      "to": "[\"OMRÅDE\"]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 1080,
  "wires": [
    [
      "b4de503d63dc6823"
    ]
  ],
  "_order": 195
}

module.exports = Node;