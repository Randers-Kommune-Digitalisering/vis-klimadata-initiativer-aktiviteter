const Node = {
  "id": "d68e5df950fbcad8",
  "type": "template",
  "z": "b211627962aab2cb",
  "g": "f16189186b28255c",
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
      "7e15b2d2d0197be7"
    ]
  ],
  "_order": 213
}

Node.template = `
SELECT MAX(Month) as latest_month
FROM {{flow.tablename}}
`

module.exports = Node;