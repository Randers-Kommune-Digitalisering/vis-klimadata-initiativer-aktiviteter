const Node = {
  "id": "ea82c20939689167",
  "type": "change",
  "z": "d5880abe3145a384",
  "g": "63511c64cbde6f8e",
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
    },
    {
      "t": "set",
      "p": "redundant",
      "pt": "msg",
      "to": "[\"OMRÅDE\"]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1690,
  "y": 60,
  "wires": [
    [
      "0daea7d9549ba6f3"
    ]
  ],
  "_order": 437
}

module.exports = Node;