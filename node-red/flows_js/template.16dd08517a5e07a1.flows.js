const Node = {
  "id": "16dd08517a5e07a1",
  "type": "template",
  "z": "b211627962aab2cb",
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
    []
  ],
  "_order": 212
}

Node.template = `
# SET @@global.time_zone = "Europe/Copenhagen";
SET @@session.time_zone = "Europe/Copenhagen";
`

module.exports = Node;