const Node = {
  "id": "5b1c780ffe35c1eb",
  "type": "template",
  "z": "8571dcc8e1e9c903",
  "g": "6aa95c95913a1dc8",
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
      "4be122699e16f822"
    ]
  ],
  "_order": 149
}

Node.template = `
CREATE TABLE if not exists {{flow.tablename}} (
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	Month DATE,
	Onshore_Windpower_MWh DECIMAL(10,2),
	Solar_Power_MVh DECIMAL(10,2),
	UNIQUE (Month, Onshore_Windpower_MWh, Solar_Power_MVh)
	);
`

module.exports = Node;