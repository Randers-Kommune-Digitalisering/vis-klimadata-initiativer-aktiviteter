const Node = {
  "id": "b91ac275b4e70f51",
  "type": "change",
  "z": "6b360b454d19172a",
  "g": "12de71dcddfdf75d",
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
      "2eeba406d51ec3dd"
    ]
  ],
  "_order": 212
}

module.exports = Node;