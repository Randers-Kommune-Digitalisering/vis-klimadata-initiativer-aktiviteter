const Node = {
  "id": "4e8801c4e0b75b92",
  "type": "template",
  "z": "63aa29a6222f244d",
  "name": "Statisk forespørgsel ↓\\n Opret tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 320,
  "wires": [
    []
  ],
  "_order": 200
}

Node.template = `
CREATE TABLE if not exists {{flow.tablename}} (
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ogc_fid INTEGER,
    projektomr: VARCHAR(255),
    status: VARCHAR(255),
    vandloebsnavn: VARCHAR(255)
    aarstal: INTEGER,
    areal_klima_ha: FLOAT
    );
`

module.exports = Node;