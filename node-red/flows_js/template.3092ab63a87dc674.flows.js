const Node = {
  "id": "3092ab63a87dc674",
  "type": "template",
  "z": "aad50484a0b40b44",
  "g": "4be49ca197686888",
  "name": "DROP TABLE",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 390,
  "y": 2100,
  "wires": [
    [
      "4cff9f5661a4042d"
    ]
  ],
  "_order": 489
}

Node.template = `
DROP TABLE os2iot_metadata;
`

module.exports = Node;