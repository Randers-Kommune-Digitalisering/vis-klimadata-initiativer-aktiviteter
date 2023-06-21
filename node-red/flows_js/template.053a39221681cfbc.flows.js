const Node = {
  "id": "053a39221681cfbc",
  "type": "template",
  "z": "db9cae581f57fc84",
  "g": "ab0af2245cd1cfbb",
  "name": "Forespørgsel ↓\\n Tjek antal rækker med samme fil-id",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 380,
  "y": 1380,
  "wires": [
    [
      "6a824b2c94884d6d"
    ]
  ],
  "_order": 342
}

Node.template = `
SELECT COUNT(*) FROM {{{flow.tablename}}} WHERE file_id = '{{{metadata.id}}}';
`

module.exports = Node;