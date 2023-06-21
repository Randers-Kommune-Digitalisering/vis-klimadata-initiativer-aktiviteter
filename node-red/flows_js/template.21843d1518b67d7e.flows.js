const Node = {
  "id": "21843d1518b67d7e",
  "type": "template",
  "z": "9cd2fc26979e7dd1",
  "g": "8edb997a61d98957",
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
      "00861bf976566611"
    ]
  ],
  "_order": 336
}

Node.template = `
CREATE TABLE if not exists {{flow.tablename}} (
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	Month DATE,
	Industrycode_DE35 VARCHAR(10),
	TotalCon INT,
	UNIQUE (Month, Industrycode_DE35)
	);
`

module.exports = Node;