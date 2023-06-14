const Node = {
  "id": "5b457dd8bba4ea8e",
  "type": "template",
  "z": "9cd2fc26979e7dd1",
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
      "87c9e83d5f992eaf"
    ]
  ],
  "_order": 198
}

Node.template = `
# SET @@global.time_zone = "Europe/Copenhagen";
SET @@session.time_zone = "Europe/Copenhagen";
`

module.exports = Node;