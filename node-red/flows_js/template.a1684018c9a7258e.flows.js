const Node = {
  "id": "a1684018c9a7258e",
  "type": "template",
  "z": "9cd2fc26979e7dd1",
  "g": "4a217ed33a9fcb99",
  "name": "Forespørgsel ↓\\n Hent dato for seneste række ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 260,
  "y": 320,
  "wires": [
    [
      "729e7334cbd4e630"
    ]
  ],
  "_order": 252
}

Node.template = `
SELECT MAX(Month) as latest_month
FROM {{flow.tablename}}
`

module.exports = Node;