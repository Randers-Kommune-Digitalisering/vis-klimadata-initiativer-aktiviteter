const Node = {
  "id": "560d5ee0c009e19e",
  "type": "template",
  "z": "aad50484a0b40b44",
  "name": "Forespørgsel ↓\\n Opret sensor tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 470,
  "y": 1040,
  "wires": [
    []
  ],
  "_order": 441
}

Node.template = `
CREATE TABLE if not exists '{{data.id}}' (
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	tablename VARCHAR(255),
	sensor_type VARCHAR(255),
	sensor_location VARCHAR(255)
	);
`

module.exports = Node;