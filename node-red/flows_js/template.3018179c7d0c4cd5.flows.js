const Node = {
  "id": "3018179c7d0c4cd5",
  "type": "template",
  "z": "9cd2fc26979e7dd1",
  "g": "1990698f251b0a12",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 400,
  "y": 2060,
  "wires": [
    [
      "c2426c53cdfab1e6"
    ]
  ],
  "_order": 249
}

Node.template = `
SELECT TOP 1 *
FROM opendata_test_af_vad_oglavbundsjord
`

module.exports = Node;