const Node = {
  "id": "3302debcb6e0a7d8",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "551ed5c8ce0f31c7",
  "name": "Opsætning af forespørgsel ↓ \\n Totalt antal indregistrerede biler i Randers Kommune \\n pr. måned, biltype, anvendelse og drivmiddel. ",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "https://api.statbank.dk/v1/data",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "POST",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"table\":\"BIL54\",\"format\":\"CSV\",\"valuePresentation\":\"CodeAndValue\",\"variables\":[{\"code\":\"OMRÅDE\",\"values\":[\"730\"]},{\"code\":\"BILTYPE\",\"values\":[\"4000101002\",\"4000102000\"]},{\"code\":\"BRUG\",\"values\":[\"1100\",\"1200\"]},{\"code\":\"DRIV\",\"values\":[\"20205\",\"20210\",\"20215\",\"20220\",\"20225\",\"20230\",\"20231\",\"20232\",\"20235\"]},{\"code\":\"Tid\",\"values\":[\"*\"]}]}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 340,
  "y": 320,
  "wires": [
    [
      "2572a9725c8bd282"
    ]
  ],
  "_order": 158
}

module.exports = Node;