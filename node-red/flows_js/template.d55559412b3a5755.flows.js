const Node = {
  "id": "d55559412b3a5755",
  "type": "template",
  "z": "8b14b3c953574b40",
  "g": "1990698f251b0a12",
  "name": "SELECT * FROM {{flow.tablename}}",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 450,
  "y": 1260,
  "wires": [
    [
      "e0fc9f64744e1df9"
    ]
  ],
  "_order": 250
}

Node.template = `
SELECT *
FROM {{flow.tablename}}
`

module.exports = Node;