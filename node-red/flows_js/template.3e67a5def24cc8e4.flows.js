const Node = {
  "id": "3e67a5def24cc8e4",
  "type": "template",
  "z": "7f3219f0beb025c3",
  "g": "62d1b4969e322491",
  "name": "Forespørgsel ↓\\n Opret tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 990,
  "y": 120,
  "wires": [
    [
      "acf75b18d98fad23"
    ]
  ],
  "_order": 138
}

Node.template = `
CREATE TABLE if not exists {{flow.tablename}} (
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	Måned DATE,
	Biltype varchar(256),
	Drivmiddel varchar(48),
	Anvendelse varchar(128),
	Antal INT,
	UNIQUE (Måned, Drivmiddel, Biltype, Anvendelse)
	);
`

module.exports = Node;