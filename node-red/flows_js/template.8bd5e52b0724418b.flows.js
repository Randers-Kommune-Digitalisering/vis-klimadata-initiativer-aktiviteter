const Node = {
  "id": "8bd5e52b0724418b",
  "type": "template",
  "z": "452aaf8dc5cd8d45",
  "g": "8108b6de77b9d886",
  "name": "Forespørgsel ↓\\n Hent dato for seneste række ",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 180,
  "y": 200,
  "wires": [
    [
      "f94e70c1aa350345"
    ]
  ],
  "_order": 162
}

Node.template = `
SELECT MAX(Month) as latest_month
FROM {{flow.tablename}}
`

module.exports = Node;