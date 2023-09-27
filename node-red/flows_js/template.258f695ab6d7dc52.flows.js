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
  "x": 800,
  "y": 1360,
  "wires": [
    [
      "597b176723af7dca"
    ]
  ],
  "_order": 501
}

Node.template = `
INSERT INTO {{data.tablename}}
(observedAt, type, value)
VALUES
{{{sqlvalues}}}
`

module.exports = Node;