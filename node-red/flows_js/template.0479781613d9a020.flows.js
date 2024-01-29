const Node = {
  "id": "0479781613d9a020",
  "type": "template",
  "z": "8a53080563b8e8f2",
  "name": "Custom DB-query #1",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 580,
  "y": 160,
  "wires": [
    [
      "f013c79b839dfddf"
    ]
  ],
  "_order": 560
}

Node.template = `
SELECT * from {{flow.tablename}} limit 100


`

module.exports = Node;