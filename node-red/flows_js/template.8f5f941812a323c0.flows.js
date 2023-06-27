const Node = {
  "id": "8f5f941812a323c0",
  "type": "template",
  "z": "db9cae581f57fc84",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 720,
  "y": 2180,
  "wires": [
    [
      "6fa1a22720727561"
    ]
  ],
  "_order": 359
}

Node.template = `
SELECT * FROM opendata_braendstofforbrug
`

module.exports = Node;