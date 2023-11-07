const Node = {
  "id": "21843d1518b67d7e",
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
  "x": 250,
  "y": 420,
  "wires": [
    [
      "2d962db6eced9c3b"
    ]
  ],
  "_order": 297
}

Node.template = `
CREATE TABLE if not exists {{flow.tablename}} (
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	HourDK TIMESTAMP,
	Branche VARCHAR(15),
	ConsumptionkWh FLOAT
	);
`

module.exports = Node;