const Node = {
  "id": "0472adc3fd25e4fe",
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
  "x": 440,
  "y": 140,
  "wires": [
    [
      "eacf1c9a007f26ca"
    ]
  ],
  "_order": 757
}

module.exports = Node;