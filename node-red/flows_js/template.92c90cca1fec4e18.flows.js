const Node = {
  "id": "92c90cca1fec4e18",
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
  "x": 350,
  "y": 2000,
  "wires": [
    [
      "4cff9f5661a4042d"
    ]
  ],
  "_order": 473
}

Node.template = `
DROP TABLE os2iot_refrigerator_sensor_309c_talkpool;
`

module.exports = Node;