const Node = {
  "id": "c2446f870b8d8bd9",
  "type": "change",
  "z": "aad50484a0b40b44",
  "name": "Flyt msg.data \\n til payload",
  "rules": [
    {
      "t": "move",
      "p": "data",
      "pt": "msg",
      "to": "payload",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 240,
  "y": 540,
  "wires": [
    [
      "e248568d908a8478"
    ]
  ],
  "_order": 463
}

module.exports = Node;