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
  "x": 450,
  "y": 560,
  "wires": [
    [
      "0182b0046a3736c8"
    ]
  ],
  "_order": 451
}

module.exports = Node;