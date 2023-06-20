const Node = {
  "id": "9307efcad89c9669",
  "type": "template",
  "z": "8b14b3c953574b40",
  "g": "1990698f251b0a12",
  "name": "SHOW TABLES",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 380,
  "y": 1300,
  "wires": [
    [
      "c2426c53cdfab1e6"
    ]
  ],
  "_order": 240
}

Node.template = `
SHOW TABLES
`

module.exports = Node;