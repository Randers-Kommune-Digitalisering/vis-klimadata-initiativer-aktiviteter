const Node = {
  "id": "2e9339b2c18a23f4",
  "type": "template",
  "z": "7f3219f0beb025c3",
  "g": "7fe3437fd75f09f8",
  "name": "Forespørgsel ↓\\n Indsæt eller opdater \\n data i tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 580,
  "y": 1700,
  "wires": [
    [
      "f003f7882b360583"
    ]
  ],
  "_order": 268
}

Node.template = `
INSERT INTO {{flow.tablename}}
    ({{columnnames}})
VALUES {{{datastring}}}
#ON DUPLICATE KEY UPDATE
#    {{\\{updatestring}\\}}
`

module.exports = Node;