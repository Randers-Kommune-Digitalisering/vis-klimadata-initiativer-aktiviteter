const Node = {
  "id": "daa7a7e364322fd6",
  "type": "template",
  "z": "36a828017042c198",
  "g": "94f2534250740b77",
  "name": "Forespørgsel ↓\\n Indsæt eller opdater \\n data i tabel",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 240,
  "y": 640,
  "wires": [
    [
      "077bfbcc6043bdb1"
    ]
  ],
  "_order": 112
}

Node.template = `
INSERT INTO {{flow.tablename}} 
    (Måned, Arealtype, Areal_km2)
VALUES( 
        '{{{data.TID}}}',
        '{{{data.ARE1}}}',
        '{{{data.INDHOLD}}}'
        )
ON DUPLICATE KEY UPDATE
    Areal_km2 = '{{{data.INDHOLD}}}'
`

module.exports = Node;