const Node = {
  "id": "f0f81c5314e5ef37",
  "type": "template",
  "z": "9cd2fc26979e7dd1",
  "g": "1990698f251b0a12",
  "name": "DROP TABLE {{flow.tablename}} ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 470,
  "y": 1920,
  "wires": [
    [
      "e9174240eaa25dae"
    ]
  ],
  "_order": 234
}

Node.template = `
DROP TABLE {{flow.tablename}}
`

module.exports = Node;