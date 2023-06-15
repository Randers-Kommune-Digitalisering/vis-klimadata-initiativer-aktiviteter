const Node = {
  "id": "d55559412b3a5755",
  "type": "template",
  "z": "9cd2fc26979e7dd1",
  "g": "1990698f251b0a12",
  "name": "SELECT * FROM {{flow.tablename}}",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 1960,
  "wires": [
    [
      "e0fc9f64744e1df9"
    ]
  ],
  "_order": 238
}

Node.template = `
SELECT *
FROM {{flow.tablename}}
`

module.exports = Node;