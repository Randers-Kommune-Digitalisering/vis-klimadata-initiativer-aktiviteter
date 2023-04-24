const Node = {
  "id": "c7afbc2c2d304e32",
  "type": "change",
  "z": "5d9f87f4934f2873",
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
  "x": 480,
  "y": 740,
  "wires": [
    [
      "a45d66223cdc33e2"
    ]
  ],
  "_order": 226
}

module.exports = Node;