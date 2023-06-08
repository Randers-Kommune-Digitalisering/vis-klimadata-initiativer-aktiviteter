const Node = {
  "id": "f5ccc076ae0ba342",
  "type": "template",
  "z": "452aaf8dc5cd8d45",
  "g": "318aa83402c5bebd",
  "name": "Skabelon til forespørgsel ↓\\n Indsæt data i tabel",
  "field": "topic",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 460,
  "y": 660,
  "wires": [
    [
      "4f7fe65f46e9b0ec",
      "ed72f4060b2d7ad8"
    ]
  ],
  "_order": 450
}

Node.template = `
INSERT INTO {{flow.tablename}}
    ({{columnnames}})
VALUES {{{datastring}}}
`

module.exports = Node;