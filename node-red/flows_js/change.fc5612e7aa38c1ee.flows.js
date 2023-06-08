const Node = {
  "id": "fc5612e7aa38c1ee",
  "type": "change",
  "z": "db9cae581f57fc84",
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
  "x": 760,
  "y": 1000,
  "wires": [
    [
      "21e66b0eff7ab585"
    ]
  ],
  "_order": 546
}

module.exports = Node;