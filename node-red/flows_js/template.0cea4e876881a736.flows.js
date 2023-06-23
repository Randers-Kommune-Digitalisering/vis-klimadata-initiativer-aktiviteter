const Node = {
  "id": "0cea4e876881a736",
  "type": "template",
  "z": "b211627962aab2cb",
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
    []
  ],
  "_order": 207
}

Node.template = `
SELECT @@global.time_zone, @@session.time_zone
`

module.exports = Node;