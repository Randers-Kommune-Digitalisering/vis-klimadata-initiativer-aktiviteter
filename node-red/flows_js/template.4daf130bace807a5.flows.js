const Node = {
  "id": "4daf130bace807a5",
  "type": "template",
  "z": "7f3219f0beb025c3",
  "name": "Forespørgsel ↓\\n Indsæt eller opdater \\n data i tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 580,
  "y": 1140,
  "wires": [
    [
      "89439360f2f8a365"
    ]
  ],
  "_order": 195
}

Node.template = `
INSERT INTO {{flow.tablename}}
    ({{columnnames}})
VALUES ()
#ON DUPLICATE KEY UPDATE
#    {{\\{updatestring}\\}}
`

module.exports = Node;