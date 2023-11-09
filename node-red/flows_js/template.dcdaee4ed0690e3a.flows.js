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
  "x": 900,
  "y": 200,
  "wires": [
    [
      "2696ccc9cdf0b0ce"
    ]
  ],
  "_order": 600
}

Node.template = `
DROP TABLE IF EXISTS {{droptable}}
`

module.exports = Node;