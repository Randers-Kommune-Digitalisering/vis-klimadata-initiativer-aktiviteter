const Node = {
  "id": "0d4ef824c81b35d3",
  "type": "template",
  "z": "7f3219f0beb025c3",
  "g": "cfbcffc3f4a1cd56",
  "name": "Forespørgsel ↓\\n Opret tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 590,
  "y": 1520,
  "wires": [
    [
      "acf75b18d98fad23"
    ]
  ],
  "_order": 517
}

Node.template = `
CREATE TABLE if not exists {{flow.tablename}} (
{{{columns}}}
);
`

module.exports = Node;