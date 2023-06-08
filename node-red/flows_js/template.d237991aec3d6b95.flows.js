const Node = {
  "id": "d237991aec3d6b95",
  "type": "template",
  "z": "452aaf8dc5cd8d45",
  "g": "9b93957b29e5fe56",
  "name": "",
  "field": "topic",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 470,
  "y": 1120,
  "wires": [
    [
      "086a02bd76ed2197"
    ]
  ],
  "_order": 467
}

Node.template = `
SELECT TOP 1 *
FROM opendata_test_af_vad_oglavbundsjord
`

module.exports = Node;