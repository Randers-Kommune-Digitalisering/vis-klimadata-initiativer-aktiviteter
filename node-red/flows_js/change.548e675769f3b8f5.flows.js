const Node = {
  "id": "548e675769f3b8f5",
  "type": "change",
  "z": "d5880abe3145a384",
  "d": true,
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
  "x": 590,
  "y": 240,
  "wires": [
    [
      "1d375752baa0da60"
    ]
  ],
  "_order": 422
}

module.exports = Node;