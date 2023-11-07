const Node = {
  "id": "bd35b2c70ae0b5e6",
  "type": "template",
  "z": "db9cae581f57fc84",
  "name": "Forespørgsel ↓\\n Slet eksisterende tabel ved deploy",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 620,
  "y": 820,
  "wires": [
    [
      "5298b18f1a031c6e"
    ]
  ],
  "_order": 423
}

Node.template = `
DROP TABLE IF EXISTS {{tablename}}
`

module.exports = Node;