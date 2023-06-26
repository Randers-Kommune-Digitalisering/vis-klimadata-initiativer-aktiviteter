const Node = {
  "id": "cdd23141457e6b94",
  "type": "template",
  "z": "9cd2fc26979e7dd1",
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
      "bd84561d3243af27"
    ]
  ],
  "_order": 238
}

Node.template = `
SELECT Month
FROM {{flow.tablename}}
`

module.exports = Node;