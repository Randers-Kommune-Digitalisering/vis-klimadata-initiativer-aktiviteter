const Node = {
  "id": "334268f203a6e7a6",
  "type": "template",
  "z": "452aaf8dc5cd8d45",
  "g": "9b93957b29e5fe56",
  "name": "SHOW TABLES",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 1060,
  "wires": [
    [
      "086a02bd76ed2197"
    ]
  ],
  "_order": 463
}

Node.template = `
SHOW TABLES
`

module.exports = Node;