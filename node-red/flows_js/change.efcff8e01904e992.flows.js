const Node = {
  "id": "efcff8e01904e992",
  "type": "change",
  "z": "752a5429c81af8a5",
  "g": "1f066a029e3c6ab0",
  "name": "bol102",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "bol102",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "query",
      "pt": "msg",
      "to": "{\"table\":\"BOL102\",\"format\":\"CSV\",\"variables\":[{\"code\":\"AMT\",\"values\":[\"730\"]},{\"code\":\"OPVARMNING\",\"values\":[\"*\"]},{\"code\":\"Tid\",\"values\":[\"*\"]},{\"code\":\"ANVENDELSE\",\"values\":[\"*\"]},{\"code\":\"OPFØRELSESÅR\",\"values\":[\"*\"]},{\"code\":\"BEBO\",\"values\":[\"*\"]}]}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 550,
  "y": 180,
  "wires": [
    [
      "2851f8f6621c1a9a"
    ]
  ],
  "_order": 704
}

module.exports = Node;