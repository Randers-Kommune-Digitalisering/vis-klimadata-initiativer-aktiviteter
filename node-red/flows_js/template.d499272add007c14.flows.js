const Node = {
  "id": "d499272add007c14",
  "type": "template",
  "z": "9cd2fc26979e7dd1",
  "name": "Forespørgsel ↓\\n Slet rækker med samme fil-id",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 460,
  "y": 1760,
  "wires": [
    [
      "9567d2574c400714"
    ]
  ],
  "_order": 231
}

Node.template = `
DELETE FROM {{{flow.tablename}}} WHERE file_id = 'd2ccc999-c5af-4a89-9d6f-f8ee76cc7cb3';
`

module.exports = Node;