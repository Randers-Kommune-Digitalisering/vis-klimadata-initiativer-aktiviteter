const Node = {
  "id": "f0f81c5314e5ef37",
  "type": "template",
  "z": "8b14b3c953574b40",
  "g": "1990698f251b0a12",
  "name": "DROP TABLE {{flow.tablename}} ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 430,
  "y": 1220,
  "wires": [
    [
      "e9174240eaa25dae"
    ]
  ],
  "_order": 231
}

Node.template = `
DROP TABLE {{flow.tablename}}
`

module.exports = Node;