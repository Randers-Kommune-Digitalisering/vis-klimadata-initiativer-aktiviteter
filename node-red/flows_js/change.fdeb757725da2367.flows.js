const Node = {
  "id": "fdeb757725da2367",
  "type": "change",
  "z": "93db0a70bc3b8d10",
  "name": "Opsætning af forespørgsel ↓ \\n Metadata for tabel",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "https://api.statbank.dk/v1/tableinfo",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "POST",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{ \"table\": \"BIL54\"}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 460,
  "y": 440,
  "wires": [
    [
      "82edd7fbd5262490"
    ]
  ],
  "_order": 762
}

module.exports = Node;