const Node = {
  "id": "d55559412b3a5755",
  "type": "template",
  "z": "db9cae581f57fc84",
  "g": "1990698f251b0a12",
  "name": "SELECT * FROM {{flow.tablename}}",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 620,
  "y": 1400,
  "wires": [
    [
      "e0fc9f64744e1df9"
    ]
  ],
  "_order": 245
}

Node.template = `
SELECT *
FROM {{flow.tablename}}
`

module.exports = Node;