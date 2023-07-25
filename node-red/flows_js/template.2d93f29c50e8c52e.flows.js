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
  "x": 480,
  "y": 320,
  "wires": [
    [
      "20eb9649f07da6f1"
    ]
  ],
  "_order": 440
}

Node.template = `
CREATE TABLE if not exists {{flow.metadata_tablename}} (
	uid VARCHAR(255) NOT NULL,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	sensor_type VARCHAR(255),
	sensor_location VARCHAR(255),
	UNIQUE (uid)
	);
`

module.exports = Node;