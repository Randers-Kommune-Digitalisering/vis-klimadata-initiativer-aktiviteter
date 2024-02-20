const Node = {
  "id": "43b3d9580826c443",
  "type": "change",
  "z": "d5880abe3145a384",
  "g": "63511c64cbde6f8e",
  "name": "arealdk",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "arealdk",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "query",
      "pt": "msg",
      "to": "{\"table\":\"arealdk\",\"format\":\"CSV\",\"variables\":[{\"code\":\"ARE1\",\"values\":[\"A\",\"A1\",\"A15\",\"A2\",\"A3\",\"B\",\"B1\",\"B2\",\"C\",\"C1\",\"C2\",\"D\",\"D1\",\"D2\",\"D3\",\"D4\",\"E\",\"F\",\"F1\",\"F2\",\"G\",\"G1\",\"G2\",\"H\"]},{\"code\":\"OMRÅDE\",\"values\":[\"730\"]},{\"code\":\"ENHED\",\"values\":[\"0120\",\"0130\",\"0140\"]},{\"code\":\"Tid\",\"values\":[\"*\"]}]}",
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
  "x": 1700,
  "y": 140,
  "wires": [
    [
      "0daea7d9549ba6f3"
    ]
  ],
  "_order": 447
}

module.exports = Node;