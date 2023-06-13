const Node = {
  "id": "81a57fc07abb76da",
  "type": "template",
  "z": "8571dcc8e1e9c903",
  "g": "d2636245c56c3bc5",
  "name": "Forespørgsel ↓\\n Indsæt eller opdater \\n data i tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 240,
  "y": 780,
  "wires": [
    [
      "20fab0cd87d89962",
      "4d2fa3f6716bedee"
    ]
  ],
  "_order": 214
}

Node.template = `
SET @@session.time_zone = 'Copenhagen/Europe';

INSERT INTO {{flow.tablename}} 
    ({{{columnnames}}})
VALUES {{{datastring}}}
`

module.exports = Node;