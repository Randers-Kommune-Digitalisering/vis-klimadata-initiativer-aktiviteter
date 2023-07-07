const Node = {
  "id": "1712fed5a9be08ad",
  "type": "change",
  "z": "9cd2fc26979e7dd1",
  "g": "f2e780fbd3ecba57",
  "name": "Opsætning af forespørgsel ↓ \\n Elforbrug total i kwh pr. måned",
  "rules": [
    {
      "t": "set",
      "p": "baseurl",
      "pt": "msg",
      "to": "https://api.energidataservice.dk/dataset/CommunityProduction",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "GET",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "baseurl & \"?offset=0&start=\"&startdato&\"&end=now&filter=%7B%22MunicipalityNo%22:[%22730%22]%7D&sort=Month%20DESC&timezone=dk&limit=10000\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 270,
  "y": 800,
  "wires": [
    [
      "fec7560ec7bd81a2"
    ]
  ],
  "info": "",
  "_order": 305
}

Node.info = `
Based on url query:

https://api.energidataservice.dk/dataset/ConsumptionpermunicipalityDE35?offset=0&start=2013-01-01T00:00&end=2023-03-01T00:00&filter=%7B%22MunicipalityNo%22:[%22730%22]%7D&sort=Month%20DESC&timezone=dk
`

module.exports = Node;