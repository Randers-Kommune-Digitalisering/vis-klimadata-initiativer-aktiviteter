const Node = {
  "id": "c90c0df932ecbbd2",
  "type": "template",
  "z": "8a53080563b8e8f2",
  "name": "Custom DB-query #2",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 580,
  "y": 220,
  "wires": [
    [
      "f013c79b839dfddf"
    ]
  ],
  "_order": 563
}

Node.template = `
SHOW COLUMNS FROM {{flow.tablename}}
`

module.exports = Node;