const Node = {
  "id": "c7afbc2c2d304e32",
  "type": "change",
  "z": "7b004c5e11e87f28",
  "g": "2e3370dafaa81dac",
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
      "a45d66223cdc33e2"
    ]
  ],
  "_order": 161
}

module.exports = Node;