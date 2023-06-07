const Node = {
  "id": "ba497f9c23b38275",
  "type": "template",
  "z": "14a0d5d3f4f8bbaa",
  "name": "Query",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 870,
  "y": 1644,
  "wires": [
    [
      "e66062a4159643de"
    ]
  ],
  "_order": 490
}

Node.template = `
SELECT * FROM {{flow.tablename}}
LIMIT 1;
`

module.exports = Node;