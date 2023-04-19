const Node = {
  "id": "cabaa0127db8b20a",
  "type": "template",
  "z": "8571dcc8e1e9c903",
  "g": "0b6a3796775ca5e9",
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
      "8899c8d86911d51f"
    ]
  ],
  "_order": 150
}

Node.template = `
SELECT MAX(Month) as latest_month
FROM {{flow.tablename}}
`

module.exports = Node;