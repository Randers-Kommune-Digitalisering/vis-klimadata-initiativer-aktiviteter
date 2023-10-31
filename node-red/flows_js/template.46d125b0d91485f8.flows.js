const Node = {
  "id": "46d125b0d91485f8",
  "type": "template",
  "z": "b211627962aab2cb",
  "name": "Forespørgsel ↓\\n Slet eksisterende tabel ved deploy",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 960,
  "y": 220,
  "wires": [
    [
      "cbac50bab96d6526"
    ]
  ],
  "_order": 298
}

Node.template = `
DROP TABLE IF EXISTS {{flow.tablename}}

`

module.exports = Node;