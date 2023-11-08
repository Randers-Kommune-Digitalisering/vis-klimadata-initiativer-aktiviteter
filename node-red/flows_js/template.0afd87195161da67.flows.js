const Node = {
  "id": "0afd87195161da67",
  "type": "template",
  "z": "db9cae581f57fc84",
  "g": "19c2db021d7d414f",
  "name": "Skabelon til forespørgsel ↓\\n Indsæt data i tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 480,
  "y": 2860,
  "wires": [
    [
      "cc9f08c240e607f0"
    ]
  ],
  "_order": 358
}

Node.template = `
INSERT INTO {{flow.tablename}}
    ({{columnnames}})
VALUES {{{datastring}}}
`

module.exports = Node;