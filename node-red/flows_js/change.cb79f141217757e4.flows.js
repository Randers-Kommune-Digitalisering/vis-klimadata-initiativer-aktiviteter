const Node = {
  "id": "cb79f141217757e4",
  "type": "change",
  "z": "c0f39fa937e7d6f9",
  "g": "c8e2659e5a564a0d",
  "name": "set counter and object",
  "rules": [
    {
      "t": "set",
      "p": "counter",
      "pt": "msg",
      "to": "0",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "datasql",
      "pt": "msg",
      "to": "sql",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "delete",
      "p": "sql",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "data",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 880,
  "y": 160,
  "wires": [
    [
      "c96c8633368d1183"
    ]
  ],
  "_order": 626
}

module.exports = Node;