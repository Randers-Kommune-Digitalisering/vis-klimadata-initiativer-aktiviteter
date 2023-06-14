const Node = {
  "id": "c81467561af794f0",
  "type": "template",
  "z": "db9cae581f57fc84",
  "name": "Forespørgsel ↓\\n Tjek om tabel eksisterer",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1410,
  "y": 240,
  "wires": [
    []
  ],
  "_order": 282
}

Node.template = `
SELECT * 
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_TYPE = 'BASE TABLE'
AND TABLE_NAME = '{{{flow.tablename}}}';
`

module.exports = Node;