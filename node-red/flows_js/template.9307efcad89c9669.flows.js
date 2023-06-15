const Node = {
  "id": "9307efcad89c9669",
  "type": "template",
  "z": "7f3219f0beb025c3",
  "g": "1990698f251b0a12",
  "name": "SHOW TABLES",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 400,
  "y": 1600,
  "wires": [
    [
      "c2426c53cdfab1e6"
    ]
  ],
  "_order": 171
}

Node.template = `
SHOW TABLES
`

module.exports = Node;