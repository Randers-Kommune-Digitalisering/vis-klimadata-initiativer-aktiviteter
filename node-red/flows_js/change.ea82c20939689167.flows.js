const Node = {
  "id": "ea82c20939689167",
  "type": "change",
  "z": "d5880abe3145a384",
  "d": true,
  "g": "25372ea7d623e06e",
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
  "y": 160,
  "wires": [
    [
      "1d375752baa0da60"
    ]
  ],
  "_order": 710
}

module.exports = Node;