const Node = {
  "id": "d1b6d4d0583e38be",
  "type": "change",
  "z": "93db0a70bc3b8d10",
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
      "to": "{\t   \"table\":\"BIL54\",\t   \"format\":\"CSV\",\t   \"valuePresentation\":\"CodeAndValue\",\t   \"variables\":[\t       {\"code\":\"OMRÅDE\",\"values\":[\"730\"]},\t       {\t           \"code\":\"BILTYPE\",\t           \"values\":[\"4000101002\",\"4000102000\"]\t       },\t       {\"code\":\"BRUG\",\"values\":[\"1100\",\"1200\"]},\t       {\t           \"code\":\"DRIV\",\t           \"values\":[\t               \"20205\",\t               \"20210\",\t               \"20215\",\t               \"20220\",\t               \"20225\",\t               \"20230\",\t               \"20231\",\t               \"20232\",\t               \"20235\"\t           ]\t       },\t       {\t           \"code\":\"Tid\",\t           \"values\": [\"*\"]\t        }\t   ]\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 520,
  "y": 260,
  "wires": [
    [
      "0fd80a271f9602cb"
    ]
  ],
  "_order": 759
}

module.exports = Node;