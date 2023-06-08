const Node = {
  "id": "0afd87195161da67",
  "type": "template",
  "z": "db9cae581f57fc84",
  "g": "19c2db021d7d414f",
  "name": "Skabelon til forespørgsel ↓\\n Indsæt data i tabel",
  "field": "topic",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 440,
  "y": 760,
  "wires": [
    [
      "cc9f08c240e607f0",
      "e867e16a899f4307"
    ]
  ],
  "_order": 566
}

Node.template = `
INSERT INTO {{flow.tablename}}
    ({{columnnames}})
VALUES {{{datastring}}}
`

module.exports = Node;