const Node = {
  "id": "d55559412b3a5755",
  "type": "template",
  "z": "7f3219f0beb025c3",
  "g": "1990698f251b0a12",
  "name": "SELECT * FROM {{flow.tablename}}",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 470,
  "y": 1560,
  "wires": [
    [
      "e0fc9f64744e1df9"
    ]
  ],
  "_order": 168
}

Node.template = `
SELECT *
FROM {{flow.tablename}}
`

module.exports = Node;