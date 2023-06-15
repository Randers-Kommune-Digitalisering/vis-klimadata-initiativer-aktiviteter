const Node = {
  "id": "244935a3f7fe9a35",
  "type": "template",
  "z": "7f3219f0beb025c3",
  "d": true,
  "name": "Forespørgsel ↓\\n Opret tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 210,
  "y": 1260,
  "wires": [
    []
  ],
  "_order": 182
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