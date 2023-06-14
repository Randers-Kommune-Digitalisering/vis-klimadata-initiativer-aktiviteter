const Node = {
  "id": "6440c7c789cb52fe",
  "type": "template",
  "z": "8b14b3c953574b40",
  "g": "558021ee7e67a81d",
  "name": "Forespørgsel ↓\\n Indsæt eller opdater \\n data i tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 240,
  "y": 760,
  "wires": [
    [
      "ea6b9ddd404c6bfa"
    ]
  ],
  "_order": 168
}

Node.template = `
SET time_zone = '+00:00';
INSERT INTO {{flow.tablename}} 
    ({{{columnnames}}})
VALUES {{{datastring}}}
`

module.exports = Node;