const Node = {
  "id": "edcd9921993e19bf",
  "type": "template",
  "z": "aad50484a0b40b44",
  "name": "Forespørgsel ↓\\n Opret række til sensor \\n i metadata tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 600,
  "y": 900,
  "wires": [
    [
      "2145297f72052f22"
    ]
  ],
  "_order": 471
}

Node.template = `
INSERT INTO {{flow.metadata_tablename}}
(uid, tablename, sensor_type, sensor_location)
VALUES
('{{data.id}}', '{{data.tablename}}', '{{data.type}}', '{{data.location.value.coordinates}}');
`

module.exports = Node;