const Node = {
  "id": "50d4d1dc04e813ec",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "log",
      "pt": "msg",
      "to": "topic",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "topic",
      "pt": "msg",
      "to": "SQL",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 720,
  "y": 980,
  "wires": [
    [
      "3189dd1242211a13"
    ]
  ],
  "_order": 421
}

module.exports = Node;