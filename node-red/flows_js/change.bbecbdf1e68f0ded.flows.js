const Node = {
  "id": "bbecbdf1e68f0ded",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
  "g": "9fc7aa784e8175c5",
  "name": "Opsætning af forespørgsel ↓ \\n Hent senest opdaterede datafil",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "payload.result.resources[0].url",
      "tot": "msg"
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
  "x": 350,
  "y": 480,
  "wires": [
    [
      "f687e22a82b980dd"
    ]
  ],
  "_order": 180
}

module.exports = Node;