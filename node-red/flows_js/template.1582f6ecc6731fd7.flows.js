const Node = {
  "id": "1582f6ecc6731fd7",
  "type": "template",
  "z": "8b14b3c953574b40",
  "g": "d7a0dc9f17f84cd2",
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
      "43d0cf92514303e7"
    ]
  ],
  "_order": 369
}

Node.template = `
CREATE TABLE if not exists {{flow.tablename}} (
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	Month DATE,
	Industrycode_DE35 VARCHAR(10),
	TotalConsumption INT,
	UNIQUE (Month, Industrycode_DE35)
	);
`

module.exports = Node;