const Node = {
  "id": "692e207220efbddb",
  "type": "template",
  "z": "39591030e2e9860e",
  "g": "b666146e16192d1e",
  "name": "Insert data",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 450,
  "y": 1060,
  "wires": [
    [
      "ef3971c39c0bc268"
    ]
  ],
  "_order": 670
}

Node.template = `
INSERT INTO {{newtable}} 
    ({{{columnnames}}})
VALUES {{{datastring}}}
`

module.exports = Node;