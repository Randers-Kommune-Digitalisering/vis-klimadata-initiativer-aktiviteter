const Node = {
  "id": "548e675769f3b8f5",
  "type": "change",
  "z": "d5880abe3145a384",
  "g": "25372ea7d623e06e",
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
  "y": 200,
  "wires": [
    [
      "1d375752baa0da60"
    ]
  ],
  "_order": 711
}

module.exports = Node;