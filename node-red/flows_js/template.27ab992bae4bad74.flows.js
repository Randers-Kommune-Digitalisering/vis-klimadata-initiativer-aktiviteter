const Node = {
  "id": "27ab992bae4bad74",
  "type": "template",
  "z": "db9cae581f57fc84",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 720,
  "y": 2260,
  "wires": [
    [
      "6fa1a22720727561"
    ]
  ],
  "_order": 363
}

Node.template = `
DROP TABLE opendata_braendstofforbrug
`

module.exports = Node;