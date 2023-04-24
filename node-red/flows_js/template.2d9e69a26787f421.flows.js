const Node = {
  "id": "2d9e69a26787f421",
  "type": "template",
  "z": "36a828017042c198",
  "g": "7c7a1adb80186cae",
  "name": "Forespørgsel ↓\\n Opret tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 990,
  "y": 120,
  "wires": [
    [
      "7f3fa659dc7e3a5c"
    ]
  ],
  "_order": 137
}

Node.template = `
CREATE TABLE if not exists {{flow.tablename}} (
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	Måned DATE,
	Arealtype varchar(256),
	Areal_km2 DECIMAL(4,1),
	UNIQUE (Måned, Arealtype)
	);
`

module.exports = Node;