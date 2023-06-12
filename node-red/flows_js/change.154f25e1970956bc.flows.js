const Node = {
  "id": "154f25e1970956bc",
  "type": "change",
  "z": "14a0d5d3f4f8bbaa",
  "g": "7903155cb43d8194",
  "name": "Skab dataskabelon",
  "rules": [
    {
      "t": "set",
      "p": "dataskabelon",
      "pt": "msg",
      "to": "data[0]",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 210,
  "y": 480,
  "wires": [
    [
      "97f90c6164b14d53"
    ]
  ],
  "_order": 484
}

module.exports = Node;