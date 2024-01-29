const Node = {
  "id": "40ab1502f6b85218",
  "type": "change",
  "z": "752a5429c81af8a5",
  "g": "0a80d523e2a0a3a9",
  "name": "Datasets/queries and \\n loop counter",
  "rules": [
    {
      "t": "set",
      "p": "datasets",
      "pt": "msg",
      "to": "query",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "counter",
      "pt": "msg",
      "to": "0",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1000,
  "y": 140,
  "wires": [
    [
      "9a97a51b9535c06b",
      "6ca901fba763ce88"
    ]
  ],
  "_order": 713
}

module.exports = Node;