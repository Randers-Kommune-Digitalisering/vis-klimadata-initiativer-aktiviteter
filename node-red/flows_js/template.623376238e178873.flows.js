const Node = {
  "id": "623376238e178873",
  "type": "template",
  "z": "452aaf8dc5cd8d45",
  "g": "a55674bf9eda2e62",
  "name": "Forespørgsel ↓\\n Opret tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 350,
  "y": 380,
  "wires": [
    []
  ],
  "_order": 206
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