const Node = {
  "id": "393912b0b06287dd",
  "type": "template",
  "z": "8571dcc8e1e9c903",
  "name": "Set session time zone",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 380,
  "y": 1600,
  "wires": [
    [
      "bdf0630c4111b922"
    ]
  ],
  "_order": 248
}

Node.template = `
# SET @@global.time_zone = "Europe/Copenhagen";
SET @@session.time_zone = "Europe/Copenhagen";
`

module.exports = Node;