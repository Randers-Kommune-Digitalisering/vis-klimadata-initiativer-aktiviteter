const Node = {
  "id": "1ae4294ce24de36c",
  "type": "change",
  "z": "8571dcc8e1e9c903",
  "g": "aba12498e68c82c2",
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
  "y": 500,
  "wires": [
    [
      "f934320bfabf4b28"
    ]
  ],
  "info": "",
  "_order": 175
}

Node.info = `
Based on url query:

https://api.energidataservice.dk/dataset/ConsumptionpermunicipalityDE35?offset=0&start=2013-01-01T00:00&end=2023-03-01T00:00&filter=%7B%22MunicipalityNo%22:[%22730%22]%7D&sort=Month%20DESC&timezone=dk
`

module.exports = Node;