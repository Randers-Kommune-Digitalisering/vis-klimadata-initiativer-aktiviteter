const Node = {
  "id": "bbecbdf1e68f0ded",
  "type": "change",
  "z": "7b004c5e11e87f28",
  "g": "9fc7aa784e8175c5",
  "name": "Opsætning af forespørgsel ↓ \\n Hent senest opdaterede datafil",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "payload.url",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "GET",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 490,
  "y": 240,
  "wires": [
    [
      "4e8a18b7d9abbc0b"
    ]
  ],
  "_order": 93
}

module.exports = Node;