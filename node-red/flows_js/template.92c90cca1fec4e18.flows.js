const Node = {
  "id": "92c90cca1fec4e18",
  "type": "template",
  "z": "aad50484a0b40b44",
  "name": "DROP TABLE",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 470,
  "y": 1680,
  "wires": [
    [
      "4cff9f5661a4042d"
    ]
  ],
  "_order": 469
}

Node.template = `
DROP TABLE os2iot_metadata
`

module.exports = Node;