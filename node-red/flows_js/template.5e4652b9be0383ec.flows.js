const Node = {
  "id": "5e4652b9be0383ec",
  "type": "template",
  "z": "b211627962aab2cb",
  "g": "65d21d134b982376",
  "name": "Forespørgsel ↓\\n Indsæt eller opdater \\n data i tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 240,
  "y": 1060,
  "wires": [
    [
      "976cc783bd55ab9a"
    ]
  ],
  "_order": 284
}

Node.template = `
INSERT INTO {{flow.tablename}} 
    ({{{columnnames}}})
VALUES {{{datastring}}}
`

module.exports = Node;