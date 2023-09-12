const Node = {
  "id": "e8dc11ac80efa9a0",
  "type": "template",
  "z": "db9cae581f57fc84",
  "g": "ab0af2245cd1cfbb",
  "name": "Forespørgsel ↓\\n Slet rækker med samme fil-id",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 360,
  "y": 2420,
  "wires": [
    [
      "eabc9c639d7bd10e"
    ]
  ],
  "_order": 392
}

Node.template = `
DELETE FROM {{{flow.tablename}}} WHERE file_id = '{{{metadata.id}}}';
`

module.exports = Node;