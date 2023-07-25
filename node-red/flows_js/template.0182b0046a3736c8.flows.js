const Node = {
  "id": "0182b0046a3736c8",
  "type": "template",
  "z": "aad50484a0b40b44",
  "name": "Forespørgsel ↓\\n Tjek om sensor eksisterer \\n i metadata tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 450,
  "y": 660,
  "wires": [
    [
      "6ce8ea2c3738553d"
    ]
  ],
  "_order": 445
}

Node.template = `
SELECT last_updated FROM {{flow.metadata_tablename}} WHERE uid = '{{data.id}}' ORDER BY last_updated DESC LIMIT 1
`

module.exports = Node;