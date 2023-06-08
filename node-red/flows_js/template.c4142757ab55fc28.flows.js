const Node = {
  "id": "c4142757ab55fc28",
  "type": "template",
  "z": "14a0d5d3f4f8bbaa",
  "g": "0b411ba91eca1200",
  "name": "",
  "field": "topic",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 400,
  "y": 1504,
  "wires": [
    [
      "7f0258f0b6ba7cd3"
    ]
  ],
  "_order": 521
}

Node.template = `
SELECT TOP 1 *
FROM opendata_test_af_vad_oglavbundsjord
`

module.exports = Node;