const Node = {
  "id": "c12cf54d9eb133bb",
  "type": "change",
  "z": "752a5429c81af8a5",
  "name": "",
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
  "x": 360,
  "y": 500,
  "wires": [
    [
      "3911f9ba84e3262b"
    ]
  ],
  "_order": 732
}

module.exports = Node;