const Node = {
  "id": "7692bfa6e16780ad",
  "type": "template",
  "z": "db9cae581f57fc84",
  "g": "8fa237cc848f11bd",
  "name": "",
  "field": "topic",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 580,
  "y": 1640,
  "wires": [
    [
      "873bd8c4027cad35"
    ]
  ],
  "_order": 266
}

Node.template = `
SELECT *
FROM {{flow.tablename}}
`

module.exports = Node;