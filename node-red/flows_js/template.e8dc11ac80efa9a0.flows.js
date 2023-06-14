const Node = {
  "id": "e8dc11ac80efa9a0",
  "type": "template",
  "z": "db9cae581f57fc84",
  "name": "Forespørgsel ↓\\n Slet rækker med samme fil-id",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 240,
  "y": 680,
  "wires": [
    [
      "eabc9c639d7bd10e"
    ]
  ],
  "_order": 378
}

Node.template = `
DELETE FROM {{{flow.tablename}}} WHERE file_id = '{{{metadata.id}}}';
`

module.exports = Node;