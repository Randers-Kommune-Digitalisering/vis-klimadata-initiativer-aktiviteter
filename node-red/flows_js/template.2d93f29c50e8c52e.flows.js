const Node = {
  "id": "2d93f29c50e8c52e",
  "type": "template",
  "z": "aad50484a0b40b44",
  "name": "Forespørgsel ↓\\n Opret metadata tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 300,
  "y": 360,
  "wires": [
    [
      "20eb9649f07da6f1"
    ]
  ],
  "_order": 452
}

Node.template = `
CREATE TABLE if not exists {{flow.metadata_tablename}} (
	uid VARCHAR(255) NOT NULL,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	tablename VARCHAR(255),
	sensor_type VARCHAR(255),
	sensor_location VARCHAR(255),
	last_observation TIMESTAMP,
	UNIQUE (uid)
	);
`

module.exports = Node;