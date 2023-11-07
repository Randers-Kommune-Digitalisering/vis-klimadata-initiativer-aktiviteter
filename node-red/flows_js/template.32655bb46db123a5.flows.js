const Node = {
  "id": "32655bb46db123a5",
  "type": "template",
  "z": "c0f39fa937e7d6f9",
  "name": "DATA TIL LOOP",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 360,
  "y": 760,
  "wires": [
    [
      "8078c1890c410bb1"
    ]
  ],
  "_order": 478
}

Node.template = `
[
    {
        "value": 1
    },
    {
        "value": 2
    },
    {
        "value": 3
    },
    {
        "value": 4
    }
]
`

module.exports = Node;