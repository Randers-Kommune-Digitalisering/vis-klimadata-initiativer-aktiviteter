const Node = {
  "id": "009034ecd061d313",
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
  "x": 610,
  "y": 540,
  "wires": [
    [
      "939d77a327d8abfc"
    ]
  ],
  "_order": 476
}

module.exports = Node;