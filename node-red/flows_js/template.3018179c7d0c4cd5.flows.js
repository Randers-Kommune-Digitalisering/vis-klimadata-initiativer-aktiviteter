const Node = {
  "id": "3018179c7d0c4cd5",
  "type": "template",
  "z": "db9cae581f57fc84",
  "g": "1990698f251b0a12",
  "name": "",
  "field": "topic",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 510,
  "y": 1140,
  "wires": [
    [
      "c2426c53cdfab1e6"
    ]
  ],
  "_order": 591
}

Node.template = `
SELECT TOP 1 *
FROM opendata_test_af_vad_oglavbundsjord
`

module.exports = Node;