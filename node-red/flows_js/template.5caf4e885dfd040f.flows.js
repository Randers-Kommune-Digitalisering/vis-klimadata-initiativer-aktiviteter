const Node = {
  "id": "5caf4e885dfd040f",
  "type": "template",
  "z": "b211627962aab2cb",
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
    []
  ],
  "_order": 200
}

Node.template = `
SELECT Month
FROM {{flow.tablename}}
`

module.exports = Node;