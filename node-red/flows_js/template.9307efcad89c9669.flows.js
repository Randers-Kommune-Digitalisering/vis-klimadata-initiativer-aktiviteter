const Node = {
  "id": "9307efcad89c9669",
  "type": "template",
  "z": "db9cae581f57fc84",
  "g": "1990698f251b0a12",
  "name": "SHOW TABLES",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 450,
  "y": 1640,
  "wires": [
    [
      "c2426c53cdfab1e6"
    ]
  ],
  "_order": 241
}

Node.template = `
SHOW TABLES
`

module.exports = Node;