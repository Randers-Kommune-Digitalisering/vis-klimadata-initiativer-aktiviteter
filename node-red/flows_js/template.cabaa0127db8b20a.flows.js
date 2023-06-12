const Node = {
  "id": "cabaa0127db8b20a",
  "type": "template",
  "z": "8571dcc8e1e9c903",
  "g": "0b6a3796775ca5e9",
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
      "6942eb1e09ceac87"
    ]
  ],
  "_order": 173
}

Node.template = `
SELECT MAX(Month) as latest_month
FROM {{flow.tablename}}
`

module.exports = Node;