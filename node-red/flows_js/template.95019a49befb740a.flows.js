const Node = {
  "id": "95019a49befb740a",
  "type": "template",
  "z": "8571dcc8e1e9c903",
  "g": "26dd9724b7750974",
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
      "d7fb4ccf5e2e1271"
    ]
  ],
  "_order": 203
}

Node.template = `
SELECT MAX(Month) as latest_month
FROM {{flow.tablename}}
`

module.exports = Node;