const Node = {
  "id": "2e9339b2c18a23f4",
  "type": "template",
  "z": "7f3219f0beb025c3",
  "g": "7fe3437fd75f09f8",
  "name": "Forespørgsel ↓\\n Indsæt eller opdater \\n data i tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 240,
  "y": 640,
  "wires": [
    [
      "aa4085ae631b7f7f"
    ]
  ],
  "_order": 161
}

Node.template = `
INSERT INTO {{flow.tablename}} 
    (Måned, Biltype, Drivmiddel, Anvendelse, Antal)
VALUES( 
        '{{{data.maaned}}}',
        '{{{data.BILTYPE}}}',
        '{{{data.DRIV}}}',
        '{{{data.BRUG}}}',
        '{{{data.INDHOLD}}}'
        )
ON DUPLICATE KEY UPDATE
    Antal = '{{{data.INDHOLD}}}'
`

module.exports = Node;