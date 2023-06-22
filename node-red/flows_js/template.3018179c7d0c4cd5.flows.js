const Node = {
  "id": "3018179c7d0c4cd5",
  "type": "template",
  "z": "8b14b3c953574b40",
  "g": "1990698f251b0a12",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 360,
  "y": 1360,
  "wires": [
    [
      "c2426c53cdfab1e6"
    ]
  ],
  "_order": 245
}

Node.template = `
SELECT TOP 1 *
FROM opendata_test_af_vad_oglavbundsjord
`

module.exports = Node;