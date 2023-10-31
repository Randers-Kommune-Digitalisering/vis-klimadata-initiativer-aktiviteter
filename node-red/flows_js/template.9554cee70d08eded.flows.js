const Node = {
  "id": "9554cee70d08eded",
  "type": "template",
  "z": "7f3219f0beb025c3",
  "g": "68a49c0bcc64ea66",
  "name": "Forespørgsel ↓\\n Tjek om tabel eksisterer",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 290,
  "y": 420,
  "wires": [
    [
      "3c2e93fc649ce13d"
    ]
  ],
  "_order": 253
}

Node.template = `
SHOW TABLES LIKE '{{{flow.tablename}}}';
`

module.exports = Node;