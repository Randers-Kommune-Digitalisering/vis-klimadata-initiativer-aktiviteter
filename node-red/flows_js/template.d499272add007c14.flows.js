const Node = {
  "id": "d499272add007c14",
  "type": "template",
  "z": "8b14b3c953574b40",
  "g": "1990698f251b0a12",
  "name": "Forespørgsel ↓\\n Slet rækker med samme fil-id",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 420,
  "y": 1080,
  "wires": [
    [
      "9567d2574c400714"
    ]
  ],
  "_order": 265
}

Node.template = `
DELETE FROM {{{flow.tablename}}} WHERE file_id = 'd2ccc999-c5af-4a89-9d6f-f8ee76cc7cb3';
`

module.exports = Node;