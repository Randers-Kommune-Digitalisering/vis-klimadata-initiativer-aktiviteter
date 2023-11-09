const Node = {
  "id": "dcdaee4ed0690e3a",
  "type": "template",
  "z": "4ee111634776501c",
  "name": "Drop existing table (if exits)",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 700,
  "y": 220,
  "wires": [
    [
      "ce219d87689dc703"
    ]
  ],
  "_order": 600
}

Node.template = `
DROP TABLE IF EXISTS {{droptable}}
`

module.exports = Node;