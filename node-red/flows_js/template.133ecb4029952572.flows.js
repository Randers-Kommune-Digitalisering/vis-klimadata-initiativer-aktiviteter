const Node = {
  "id": "133ecb4029952572",
  "type": "template",
  "z": "9cd2fc26979e7dd1",
  "name": "Select now",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 350,
  "y": 1560,
  "wires": [
    [
      "87c9e83d5f992eaf"
    ]
  ],
  "_order": 248
}

Node.template = `
SELECT NOW()
`

module.exports = Node;