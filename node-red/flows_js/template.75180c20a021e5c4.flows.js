const Node = {
  "id": "75180c20a021e5c4",
  "type": "template",
  "z": "8571dcc8e1e9c903",
  "g": "2bb7d935665ca30a",
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
      "83374769ba059ad7"
    ]
  ],
  "_order": 217
}

Node.template = `
CREATE TABLE if not exists {{flow.tablename}} (
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	Month DATETIME,
	OnshoreWindPower DECIMAL(10,2),
	SolarPower DECIMAL(10,2),
	UNIQUE (Month, OnshoreWindPower, SolarPower)
	);
`

module.exports = Node;