const Node = {
  "id": "824cac92d7eb9ce6",
  "type": "template",
  "z": "7f3219f0beb025c3",
  "g": "68a49c0bcc64ea66",
  "name": "Forespørgsel ↓\\n Find datarække med seneste update",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 330,
  "y": 520,
  "wires": [
    [
      "89075d011b84b979"
    ]
  ],
  "_order": 535
}

Node.template = `
SELECT last_updated
FROM {{flow.tablename}}
ORDER BY last_updated ASC
LIMIT 1
`

module.exports = Node;