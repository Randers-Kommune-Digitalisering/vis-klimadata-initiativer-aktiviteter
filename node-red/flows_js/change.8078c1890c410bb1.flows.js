const Node = {
  "id": "8078c1890c410bb1",
  "type": "change",
  "z": "c0f39fa937e7d6f9",
  "name": "Loop = 0",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "payload",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "count",
      "pt": "msg",
      "to": "0",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "data[$$.count]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 620,
  "y": 1140,
  "wires": [
    [
      "7be173b145756d1c"
    ]
  ],
  "_order": 574
}

module.exports = Node;