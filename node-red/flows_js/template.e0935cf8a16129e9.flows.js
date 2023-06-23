const Node = {
  "id": "e0935cf8a16129e9",
  "type": "template",
  "z": "b211627962aab2cb",
  "g": "6cd73e834b634e42",
  "name": "Forespørgsel ↓\\n Opret tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1010,
  "y": 120,
  "wires": [
    [
      "2d962db6eced9c3b"
    ]
  ],
  "_order": 225
}

Node.template = `
CREATE TABLE if not exists {{flow.tablename}} (
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	Month DATE,
	OnshoreWindPower DECIMAL(10,2),
	SolarPower DECIMAL(10,2),
	UNIQUE (Month, OnshoreWindPower, SolarPower)
	);
`

module.exports = Node;