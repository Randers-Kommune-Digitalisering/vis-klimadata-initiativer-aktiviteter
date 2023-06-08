const Node = {
  "id": "dcabf70eb915b49f",
  "type": "change",
  "z": "067b777cae534d43",
  "g": "8a31b6b1e5d45bbe",
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
      "31cd35aa26aed776"
    ]
  ],
  "_order": 310
}

module.exports = Node;