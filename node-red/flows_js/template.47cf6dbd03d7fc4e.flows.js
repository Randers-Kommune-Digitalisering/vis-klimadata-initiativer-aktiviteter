const Node = {
  "id": "47cf6dbd03d7fc4e",
  "type": "template",
  "z": "aad50484a0b40b44",
  "name": "Forespørgsel ↓\\n Opdater metadata tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 370,
  "y": 1560,
  "wires": [
    [
      "9b28d1ce80428ceb"
    ]
  ],
  "_order": 508
}

Node.template = `
UPDATE {{flow.metadata_tablename}} SET last_observation = '{{data.observedAt}}' WHERE uid = '{{data.id}}';
`

module.exports = Node;