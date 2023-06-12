const Node = {
  "id": "33cb60e4778285c0",
  "type": "template",
  "z": "14a0d5d3f4f8bbaa",
  "g": "0b411ba91eca1200",
  "name": "DROP TABLE {{flow.tablename}} ",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 470,
  "y": 1364,
  "wires": [
    [
      "7d755176bb3c20d7"
    ]
  ],
  "_order": 486
}

Node.template = `
DROP TABLE {{flow.tablename}}
`

module.exports = Node;