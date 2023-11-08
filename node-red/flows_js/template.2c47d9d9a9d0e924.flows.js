const Node = {
  "id": "2c47d9d9a9d0e924",
  "type": "template",
  "z": "39591030e2e9860e",
  "g": "abac934caf35d9eb",
  "name": "Drop existing table (if exits)",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 500,
  "y": 700,
  "wires": [
    [
      "8e218bae1e5a019b",
      "7633fa7363ada217"
    ]
  ],
  "_order": 561
}

Node.template = `
DROP TABLE IF EXISTS {{newtable}}
`

module.exports = Node;