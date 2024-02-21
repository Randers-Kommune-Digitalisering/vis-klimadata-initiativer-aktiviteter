const Node = {
  "id": "82aa94e7a277d75d",
  "type": "template",
  "z": "9cd2fc26979e7dd1",
  "name": "Forespørgsel ↓\\n Slet eksisterende tabel ved deploy",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 960,
  "y": 220,
  "wires": [
    [
      "c880f3fd7f15add1"
    ]
  ],
  "_order": 515
}

Node.template = `
DROP TABLE IF EXISTS {{flow.tablename}}

`

module.exports = Node;