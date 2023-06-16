const Node = {
  "id": "f0f81c5314e5ef37",
  "type": "template",
  "z": "7f3219f0beb025c3",
  "g": "1990698f251b0a12",
  "name": "DROP TABLE {{flow.tablename}} ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 450,
  "y": 2040,
  "wires": [
    [
      "e9174240eaa25dae"
    ]
  ],
  "_order": 160
}

Node.template = `
DROP TABLE {{flow.tablename}}
`

module.exports = Node;