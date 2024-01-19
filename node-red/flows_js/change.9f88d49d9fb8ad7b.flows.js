const Node = {
  "id": "9f88d49d9fb8ad7b",
  "type": "change",
  "z": "752a5429c81af8a5",
  "g": "1f066a029e3c6ab0",
  "name": "bil54",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "bil54",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "query",
      "pt": "msg",
      "to": "{\"table\":\"bil54\",\"format\":\"CSV\",\"variables\":[{\"code\":\"OMRÅDE\",\"values\":[\"730\"]},{\"code\":\"Tid\",\"values\":[\"*\"]},{\"code\":\"BILTYPE\",\"values\":[\"*\"]},{\"code\":\"BRUG\",\"values\":[\"*\"]},{\"code\":\"DRIV\",\"values\":[\"*\"]}]}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 550,
  "y": 140,
  "wires": [
    [
      "2851f8f6621c1a9a"
    ]
  ],
  "_order": 701
}

module.exports = Node;