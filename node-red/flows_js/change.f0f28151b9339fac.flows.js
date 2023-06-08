const Node = {
  "id": "f0f28151b9339fac",
  "type": "change",
  "z": "f15ef1d8b0c08ad3",
  "g": "7c67278750086864",
  "name": "Opsætning af forespørgsel ↓ \\n Hent datafiler ",
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
  "x": 260,
  "y": 440,
  "wires": [
    [
      "1f797d3ba95a0d9f"
    ]
  ],
  "_order": 226
}

module.exports = Node;