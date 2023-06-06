const Node = {
  "id": "f5ccc076ae0ba342",
  "type": "template",
  "z": "452aaf8dc5cd8d45",
  "g": "d4f48feb94aeeb77",
  "name": "Skabelon til forespørgsel ↓\\n Indsæt data i tabel",
  "field": "topic",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 440,
  "y": 660,
  "wires": [
    [
      "4f7fe65f46e9b0ec",
      "703bd9d363ef3ff0",
      "50c057df65a15779"
    ]
  ],
  "_order": 424
}

Node.template = `
INSERT INTO {{flow.tablename}}
    ({{columnnames}})
VALUES {{{datastring}}}
`

module.exports = Node;