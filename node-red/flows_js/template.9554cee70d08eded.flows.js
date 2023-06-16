const Node = {
  "id": "9554cee70d08eded",
  "type": "template",
  "z": "7f3219f0beb025c3",
  "name": "Forespørgsel ↓\\n Tjek om tabel eksisterer",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 330,
  "y": 320,
  "wires": [
    [
      "3c2e93fc649ce13d"
    ]
  ],
  "_order": 201
}

Node.template = `
SHOW TABLES LIKE '{{{flow.tablename}}}';
`

module.exports = Node;