const Node = {
  "id": "39d6d01d9f4480a9",
  "type": "template",
  "z": "8571dcc8e1e9c903",
  "name": "Forespørgsel ↓\\n Hent dato for seneste række ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 680,
  "y": 1500,
  "wires": [
    [
      "ab890e98fa640571"
    ]
  ],
  "_order": 235
}

Node.template = `
SELECT Month
FROM {{flow.tablename}}
`

module.exports = Node;