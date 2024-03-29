const Node = {
  "id": "a5b2fcbcd359f428",
  "type": "change",
  "z": "b211627962aab2cb",
  "g": "6cb75d07c897709b",
  "name": "Opsætning af forespørgsel ↓ \\n Elforbrug total i kwh pr. måned",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "https://api.energidataservice.dk/dataset/ConsumptionIndustry?columns=HourDK,Branche,ConsumptionkWh&limit=0&filter={%22MunicipalityNo%22:%22730%22}",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "GET",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 270,
  "y": 620,
  "wires": [
    [
      "288791f6f17df6b3"
    ]
  ],
  "info": "",
  "_order": 468
}

Node.info = `
Based on url query:

https://api.energidataservice.dk/dataset/ConsumptionpermunicipalityDE35?offset=0&start=2013-01-01T00:00&end=2023-03-01T00:00&filter=%7B%22MunicipalityNo%22:[%22730%22]%7D&sort=Month%20DESC&timezone=dk
`

module.exports = Node;