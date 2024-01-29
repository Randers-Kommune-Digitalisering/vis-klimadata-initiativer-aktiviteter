const Node = {
  "id": "6a45f0d0af65ebbd",
  "type": "change",
  "z": "d5880abe3145a384",
  "g": "63511c64cbde6f8e",
  "name": "bil53",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "bil53",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "query",
      "pt": "msg",
      "to": "{\"table\":\"BIL53\",\"format\":\"CSV\",\"variables\":[{\"code\":\"OMRÅDE\",\"values\":[\"730\"]},{\"code\":\"Tid\",\"values\":[\"*\"]},{\"code\":\"BRUG\",\"values\":[\"1100\",\"1200\"]},{\"code\":\"DRIV\",\"values\":[\"20205\",\"20210\",\"20215\",\"20220\",\"20225\",\"20230\",\"20231\",\"20256\",\"20258\",\"20232\",\"20235\"]},{\"code\":\"BILTYPE\",\"values\":[\"4000101002\",\"4000102000\"]}]}",
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
  "y": 100,
  "wires": [
    [
      "0daea7d9549ba6f3"
    ]
  ],
  "_order": 445
}

module.exports = Node;