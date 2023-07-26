const Node = {
  "id": "009034ecd061d313",
  "type": "change",
  "z": "aad50484a0b40b44",
  "name": "Flyt payload til msg.data",
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
  "y": 520,
  "wires": [
    [
      "ce76806c8311fa4b"
    ]
  ],
  "_order": 461
}

module.exports = Node;