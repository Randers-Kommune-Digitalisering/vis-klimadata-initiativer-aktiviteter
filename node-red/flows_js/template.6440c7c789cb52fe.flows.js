const Node = {
  "id": "6440c7c789cb52fe",
  "type": "template",
  "z": "8b14b3c953574b40",
  "g": "558021ee7e67a81d",
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
      "ea6b9ddd404c6bfa"
    ]
  ],
  "_order": 123
}

Node.template = `
INSERT INTO {{flow.tablename}} 
    (Month,	Industrycode_DE35,TotalConsumption)
VALUES( 
        '{{{data.Month}}}',
        '{{{data.Industrycode_DE35}}}',
        '{{data.TotalConsumption}}'
        )
ON DUPLICATE KEY UPDATE
    TotalConsumption = '{{data.TotalConsumption}}'
`

module.exports = Node;