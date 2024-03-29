const Node = {
  "id": "9c8e5fb879307e46",
  "type": "change",
  "z": "d5880abe3145a384",
  "g": "8c2a820fca4845b1",
  "name": "Request \\n parameters",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "query",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "POST",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "https://api.statbank.dk/v1/data",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 210,
  "y": 600,
  "wires": [
    [
      "2980a9d28e4700dd"
    ]
  ],
  "_order": 420
}

module.exports = Node;