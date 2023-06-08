const Node = {
  "id": "313bd15f2261ef13",
  "type": "template",
  "z": "452aaf8dc5cd8d45",
  "g": "9b93957b29e5fe56",
  "name": "SELECT * FROM {{flow.tablename}}",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 560,
  "y": 1020,
  "wires": [
    [
      "8346755427508e2d"
    ]
  ],
  "_order": 460
}

Node.template = `
SELECT *
FROM {{flow.tablename}}
`

module.exports = Node;