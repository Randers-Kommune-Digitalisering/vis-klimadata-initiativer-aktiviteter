const Node = {
  "id": "87fdfac3f0d99186",
  "type": "template",
  "z": "db9cae581f57fc84",
  "g": "4cb2acab938256d7",
  "name": "Forespørgsel ↓\\n Opret tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 810,
  "y": 1240,
  "wires": [
    [
      "03040269b52754fb"
    ]
  ],
  "_order": 292
}

Node.template = `
CREATE TABLE if not exists {{flow.tablename}} (
created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
{{{columns}}}
);
`

module.exports = Node;