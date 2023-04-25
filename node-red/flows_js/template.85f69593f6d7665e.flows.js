const Node = {
  "id": "85f69593f6d7665e",
  "type": "template",
  "z": "8571dcc8e1e9c903",
  "g": "61c8622d890b37d9",
  "name": "Forespørgsel ↓\\n Indsæt eller opdater \\n data i tabel",
  "field": "topic",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 240,
  "y": 760,
  "wires": [
    [
      "37c93df8cc9511ca"
    ]
  ],
  "_order": 182
}

Node.template = `
INSERT INTO {{flow.tablename}} 
    (Month,	Onshore_Windpower_MWh,Solar_Power_MVh)
VALUES( 
        '{{{data.Month}}}',
        '{{{data.Onshore_Windpower_MWh}}}',
        '{{data.Solar_Power_MVh}}'
      )
ON DUPLICATE KEY UPDATE
    Onshore_Windpower_MWh = '{{{data.Onshore_Windpower_MWh}}}',
    Solar_Power_MVh = '{{data.Solar_Power_MVh}}'
`

module.exports = Node;