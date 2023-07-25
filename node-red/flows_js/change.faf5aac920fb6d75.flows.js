const Node = {
  "id": "faf5aac920fb6d75",
  "type": "change",
  "z": "aad50484a0b40b44",
  "name": "Flyt payload \\n til msg.data",
  "rules": [
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "data",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 810,
  "y": 120,
  "wires": [
    [
      "2d93f29c50e8c52e"
    ]
  ],
  "_order": 444
}

module.exports = Node;