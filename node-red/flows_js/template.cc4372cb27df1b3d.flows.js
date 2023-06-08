const Node = {
  "id": "cc4372cb27df1b3d",
  "type": "template",
  "z": "452aaf8dc5cd8d45",
  "g": "80e6cc7cb0d92329",
  "name": "Forespørgsel ↓\\n Opret tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 810,
  "y": 520,
  "wires": [
    [
      "1adb98814879c48c"
    ]
  ],
  "_order": 436
}

Node.template = `
CREATE TABLE if not exists {{flow.tablename}} (
created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
{{columns}}
);
`

module.exports = Node;