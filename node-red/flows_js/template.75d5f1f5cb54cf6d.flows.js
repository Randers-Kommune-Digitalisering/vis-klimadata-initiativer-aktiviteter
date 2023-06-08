const Node = {
  "id": "75d5f1f5cb54cf6d",
  "type": "template",
  "z": "14a0d5d3f4f8bbaa",
  "g": "0b411ba91eca1200",
  "name": "SELECT * FROM {{flow.tablename}}",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 1404,
  "wires": [
    [
      "7fa68053b9264409"
    ]
  ],
  "_order": 490
}

Node.template = `
SELECT *
FROM {{flow.tablename}}
`

module.exports = Node;