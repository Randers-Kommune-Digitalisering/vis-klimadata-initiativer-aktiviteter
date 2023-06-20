const Node = {
  "id": "d2ae71a2cc455b60",
  "type": "template",
  "z": "7f3219f0beb025c3",
  "g": "cfbcffc3f4a1cd56",
  "name": "Opsæt kolonner",
  "field": "columns",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 220,
  "y": 1340,
  "wires": [
    [
      "3d24b7a4450b205a"
    ]
  ],
  "_order": 174
}

Node.template = `
{{#flatlist}}
{{name}} {{type}},
{{/flatlist}}
`

module.exports = Node;