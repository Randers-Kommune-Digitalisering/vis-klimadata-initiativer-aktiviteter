const Node = {
  "id": "f9b61580a698b535",
  "type": "template",
  "z": "8571dcc8e1e9c903",
  "d": true,
  "name": "Select time zone",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 370,
  "y": 1640,
  "wires": [
    [
      "bdf0630c4111b922"
    ]
  ],
  "_order": 215
}

Node.template = `
SELECT @@global.time_zone, @@session.time_zone
`

module.exports = Node;