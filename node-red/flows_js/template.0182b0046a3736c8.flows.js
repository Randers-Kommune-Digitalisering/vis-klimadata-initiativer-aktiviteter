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
  "x": 370,
  "y": 720,
  "wires": [
    [
      "6ce8ea2c3738553d"
    ]
  ],
  "_order": 463
}

Node.template = `
SELECT last_observation FROM {{flow.metadata_tablename}}
WHERE uid = '{{data.id}}' ORDER BY last_observation DESC LIMIT 1;
`

module.exports = Node;