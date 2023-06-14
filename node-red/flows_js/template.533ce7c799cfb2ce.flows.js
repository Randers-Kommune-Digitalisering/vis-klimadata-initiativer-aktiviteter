const Node = {
  "id": "533ce7c799cfb2ce",
  "type": "template",
  "z": "db9cae581f57fc84",
  "g": "4cb2acab938256d7",
  "name": "Opsæt kolonner",
  "field": "columns",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 900,
  "y": 900,
  "wires": [
    [
      "2ef7eb5951d9c7f5"
    ]
  ],
  "_order": 328
}

Node.template = `
{{#payload.flatlist}}
{{name}} {{type}},
{{/payload.flatlist}}
`

module.exports = Node;