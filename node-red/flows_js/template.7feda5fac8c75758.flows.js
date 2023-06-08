const Node = {
  "id": "7feda5fac8c75758",
  "type": "template",
  "z": "14a0d5d3f4f8bbaa",
  "g": "0b411ba91eca1200",
  "name": "SHOW TABLES",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 420,
  "y": 1444,
  "wires": [
    [
      "7f0258f0b6ba7cd3"
    ]
  ],
  "_order": 497
}

Node.template = `
SHOW TABLES
`

module.exports = Node;