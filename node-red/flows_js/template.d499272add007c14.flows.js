const Node = {
  "id": "d499272add007c14",
  "type": "template",
  "z": "7f3219f0beb025c3",
  "g": "1990698f251b0a12",
  "name": "Forespørgsel ↓\\n Slet rækker med samme fil-id",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 440,
  "y": 1900,
  "wires": [
    [
      "9567d2574c400714"
    ]
  ],
  "_order": 157
}

Node.template = `
DELETE FROM {{{flow.tablename}}} WHERE file_id = 'd2ccc999-c5af-4a89-9d6f-f8ee76cc7cb3';
`

module.exports = Node;