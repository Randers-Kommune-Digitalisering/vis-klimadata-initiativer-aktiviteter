const Node = {
  "id": "74d1dfee25742878",
  "type": "template",
  "z": "8b14b3c953574b40",
  "g": "e927759a0e35212b",
  "name": "Forespørgsel ↓\\n Hent dato for seneste række ",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 260,
  "y": 320,
  "wires": [
    [
      "921fba1309b4cc59"
    ]
  ],
  "_order": 350
}

Node.template = `
SELECT MAX(Month) as latest_month
FROM {{flow.tablename}}
`

module.exports = Node;