const Node = {
  "id": "c0a1ad499d5c94df",
  "type": "template",
  "z": "452aaf8dc5cd8d45",
  "g": "80e6cc7cb0d92329",
  "name": "Opsæt kolonner",
  "field": "columns",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 940,
  "y": 420,
  "wires": [
    [
      "38291a57af9afb3e"
    ]
  ],
  "_order": 410
}

Node.template = `
{{#payload.flatlist}}
{{name}} {{type}},
{{/payload.flatlist}}
`

module.exports = Node;