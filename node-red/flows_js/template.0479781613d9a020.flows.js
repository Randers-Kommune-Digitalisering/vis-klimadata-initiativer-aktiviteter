const Node = {
  "id": "0479781613d9a020",
  "type": "template",
  "z": "8a53080563b8e8f2",
  "name": "Custom DB-query",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 390,
  "y": 160,
  "wires": [
    [
      "f013c79b839dfddf"
    ]
  ],
  "_order": 455
}

Node.template = `
SELECT * from ConsumptionIndustry
`

module.exports = Node;