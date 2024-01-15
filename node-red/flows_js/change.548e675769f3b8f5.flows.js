const Node = {
  "id": "548e675769f3b8f5",
  "type": "change",
  "z": "d5880abe3145a384",
  "g": "63511c64cbde6f8e",
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
    },
    {
      "t": "set",
      "p": "redundant",
      "pt": "msg",
      "to": "[\"AMT\"]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1690,
  "y": 180,
  "wires": [
    [
      "0daea7d9549ba6f3"
    ]
  ],
  "_order": 431
}

module.exports = Node;