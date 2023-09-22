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
  "x": 750,
  "y": 120,
  "wires": [
    [
      "7ae42282b90ffe12"
    ]
  ],
  "_order": 470
}

module.exports = Node;