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
CREATE TABLE if not exists 'os2iot_{{data.id}}' (
	observedAt TIMESTAMP NOT NULL,
	type VARCHAR(255),
	value FLOAT SIGNED
	);
`

module.exports = Node;