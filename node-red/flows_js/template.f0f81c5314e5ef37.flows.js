const Node = {
  "id": "f0f81c5314e5ef37",
  "type": "template",
  "z": "db9cae581f57fc84",
  "g": "1990698f251b0a12",
  "name": "DROP TABLE {{flow.tablename}} ",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 580,
  "y": 1000,
  "wires": [
    [
      "e9174240eaa25dae"
    ]
  ],
  "_order": 576
}

Node.template = `
DROP TABLE {{flow.tablename}}
`

module.exports = Node;