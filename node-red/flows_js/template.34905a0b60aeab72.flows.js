const Node = {
  "id": "34905a0b60aeab72",
  "type": "template",
  "z": "452aaf8dc5cd8d45",
  "g": "9b93957b29e5fe56",
  "name": "DROP TABLE {{flow.tablename}} ",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 540,
  "y": 980,
  "wires": [
    [
      "2489dd068351ec75"
    ]
  ],
  "_order": 457
}

Node.template = `
DROP TABLE {{flow.tablename}}
`

module.exports = Node;