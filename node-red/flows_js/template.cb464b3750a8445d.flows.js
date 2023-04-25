const Node = {
  "id": "cb464b3750a8445d",
  "type": "template",
  "z": "63aa29a6222f244d",
  "name": "Forespørgsel ↓\\n Opret tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 220,
  "wires": [
    [
      "2d7968346d12185a"
    ]
  ],
  "_order": 178
}

Node.template = `
CREATE TABLE if not exists {{flow.tablename}} (
created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
{{columns}}
);
`

module.exports = Node;