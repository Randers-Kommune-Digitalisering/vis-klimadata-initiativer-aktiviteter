const Node = {
  "id": "b3fede442247b8f7",
  "type": "template",
  "z": "14a0d5d3f4f8bbaa",
  "g": "7903155cb43d8194",
  "name": "Opsæt kolonner",
  "field": "columns",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1000,
  "y": 480,
  "wires": [
    [
      "4e1b44b16c24168f"
    ]
  ],
  "_order": 478
}

Node.template = `
{{#payload.flatlist}}
{{name}} {{type}},
{{/payload.flatlist}}
`

module.exports = Node;