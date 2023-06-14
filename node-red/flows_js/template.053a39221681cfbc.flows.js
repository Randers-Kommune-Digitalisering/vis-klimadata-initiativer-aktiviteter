const Node = {
  "id": "053a39221681cfbc",
  "type": "template",
  "z": "db9cae581f57fc84",
  "g": "05fc82ad62ba62fa",
  "name": "Forespørgsel ↓\\n Tjek antal rækker med samme fil-id",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 260,
  "y": 560,
  "wires": [
    [
      "6a824b2c94884d6d"
    ]
  ],
  "_order": 345
}

Node.template = `
SELECT COUNT(*) FROM {{{flow.tablename}}} WHERE file_id = '{{{metadata.id}}}';
`

module.exports = Node;