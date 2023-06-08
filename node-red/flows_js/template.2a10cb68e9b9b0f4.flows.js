const Node = {
  "id": "2a10cb68e9b9b0f4",
  "type": "template",
  "z": "14a0d5d3f4f8bbaa",
  "g": "feec94d9d27d2789",
  "name": "Skabelon til forespørgsel ↓\\n Indsæt data i tabel",
  "field": "topic",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 430,
  "y": 1104,
  "wires": [
    [
      "dd033b7776db98bf",
      "4f90281ef54a959d"
    ]
  ],
  "_order": 512
}

Node.template = `
INSERT INTO {{flow.tablename}} 
    ({{columnnames}})
VALUES ({{{datastring}}})
`

module.exports = Node;