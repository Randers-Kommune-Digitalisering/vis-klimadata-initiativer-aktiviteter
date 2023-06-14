const Node = {
  "id": "b3eced699866b194",
  "type": "template",
  "z": "db9cae581f57fc84",
  "name": "Forespørgsel ↓\\n Tjek om tabel eksisterer",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 510,
  "y": 480,
  "wires": [
    [
      "4ba2430025d196f9"
    ]
  ],
  "_order": 350
}

Node.template = `
SHOW TABLES LIKE '{{{flow.tablename}}}';
`

module.exports = Node;