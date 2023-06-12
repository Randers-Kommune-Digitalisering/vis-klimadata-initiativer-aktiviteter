const Node = {
  "id": "f0f81c5314e5ef37",
  "type": "template",
  "z": "db9cae581f57fc84",
  "g": "1990698f251b0a12",
  "name": "DROP TABLE {{flow.tablename}} ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 600,
  "y": 1360,
  "wires": [
    [
      "e9174240eaa25dae"
    ]
  ],
  "_order": 206
}

Node.template = `
DROP TABLE {{flow.tablename}}
`

module.exports = Node;