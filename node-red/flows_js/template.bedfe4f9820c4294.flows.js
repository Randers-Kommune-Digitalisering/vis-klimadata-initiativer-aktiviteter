const Node = {
  "id": "bedfe4f9820c4294",
  "type": "template",
  "z": "63aa29a6222f244d",
  "name": "Opsæt kolonner",
  "field": "columns",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 700,
  "y": 140,
  "wires": [
    [
      "ee20aad4e4eaf5f4"
    ]
  ],
  "_order": 204
}

Node.template = `
{{#payload.flatlist}}
{{name}} {{type}},
{{/payload.flatlist}}
`

module.exports = Node;