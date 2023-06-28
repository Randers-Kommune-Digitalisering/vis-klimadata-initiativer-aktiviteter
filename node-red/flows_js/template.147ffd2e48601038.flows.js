const Node = {
  "id": "147ffd2e48601038",
  "type": "template",
  "z": "7f3219f0beb025c3",
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
      "16abbee64e6bd34f"
    ]
  ],
  "_order": 229
}

Node.template = `
DROP TABLE IF EXISTS {{flow.tablename}}

`

module.exports = Node;