const Node = {
  "id": "b69eebc8be6350a3",
  "type": "template",
  "z": "9cd2fc26979e7dd1",
  "g": "5fcf0a583cd8ecd9",
  "name": "Forespørgsel ↓\\n Indsæt eller opdater \\n data i tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 240,
  "y": 780,
  "wires": [
    [
      "99a490443915f42b",
      "55e9e94c58418ff7"
    ]
  ],
  "_order": 281
}

Node.template = `
INSERT INTO {{flow.tablename}} 
    ({{{columnnames}}})
VALUES {{{datastring}}}
`

module.exports = Node;