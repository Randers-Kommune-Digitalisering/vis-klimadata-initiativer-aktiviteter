const Node = {
  "id": "01708dfbfec7a37d",
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
  "x": 250,
  "y": 420,
  "wires": [
    [
      "00861bf976566611"
    ]
  ],
  "_order": 514
}

Node.template = `
CREATE TABLE if not exists {{flow.tablename}} (
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	Month DATE,
	OnshoreWindPower DECIMAL(10,2),
	OffshoreWindPower DECIMAL(10,2),
	SolarPower DECIMAL(10,2),
	UNIQUE (Month, OnshoreWindPower, OffshoreWindPower, SolarPower)
	);
`

module.exports = Node;