const Node = {
  "id": "824cac92d7eb9ce6",
  "type": "template",
  "z": "7f3219f0beb025c3",
  "name": "Forespørgsel ↓\\n Find datarække med seneste update",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 370,
  "y": 420,
  "wires": [
    [
      "89075d011b84b979"
    ]
  ],
  "_order": 179
}

Node.template = `
SELECT last_updated
FROM {{flow.tablename}}
ORDER BY last_updated ASC
LIMIT 1
`

module.exports = Node;