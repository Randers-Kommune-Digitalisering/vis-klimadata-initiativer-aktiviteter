const Node = {
  "id": "9d63c3bddef1a418",
  "type": "template",
  "z": "7f3219f0beb025c3",
  "d": true,
  "name": "Forespørgsel ↓\\n Indsæt eller opdater \\n data i tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 460,
  "y": 1260,
  "wires": [
    []
  ],
  "_order": 157
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