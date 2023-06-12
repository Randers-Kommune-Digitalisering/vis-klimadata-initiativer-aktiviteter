const Node = {
  "id": "edd3277dd943c90c",
  "type": "template",
  "z": "8571dcc8e1e9c903",
  "name": "Select now",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 350,
  "y": 1560,
  "wires": [
    [
      "bdf0630c4111b922"
    ]
  ],
  "_order": 222
}

Node.template = `
SELECT NOW()
`

module.exports = Node;