const Node = {
  "id": "066637948baf2a48",
  "type": "template",
  "z": "39591030e2e9860e",
  "g": "80fb5b1757ce0cd1",
  "name": "SQL-query",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 440,
  "y": 600,
  "wires": [
    [
      "07f4c1fa22e90bbd"
    ]
  ],
  "_order": 676
}

Node.template = `
{{sql}}
`

module.exports = Node;