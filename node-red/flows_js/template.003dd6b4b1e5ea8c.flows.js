const Node = {
  "id": "003dd6b4b1e5ea8c",
  "type": "template",
  "z": "9cd2fc26979e7dd1",
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
      "87c9e83d5f992eaf"
    ]
  ],
  "_order": 257
}

Node.template = `
SELECT @@global.time_zone, @@session.time_zone
`

module.exports = Node;