const Node = {
  "id": "258f695ab6d7dc52",
  "type": "template",
  "z": "aad50484a0b40b44",
  "name": "Forespørgsel ↓\\n Indsæt ny data",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 780,
  "y": 1440,
  "wires": [
    [
      "85c10287d8d017e4"
    ]
  ],
  "_order": 484
}

Node.template = `
INSERT INTO {{flow.metadata_tablename}}
(uid, tablename, sensor_type, sensor_location)
VALUES
('{{data.id}}', 'os2iot_{{data.id}}', '{{data.type}}', '{{data.location.value.coordinates}}');
`

module.exports = Node;