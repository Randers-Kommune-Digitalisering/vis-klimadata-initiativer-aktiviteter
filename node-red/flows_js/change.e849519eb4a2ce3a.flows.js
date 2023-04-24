const Node = {
  "id": "e849519eb4a2ce3a",
  "type": "change",
  "z": "5d9f87f4934f2873",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "log",
      "pt": "msg",
      "to": "No datafiles meets filter criteria",
      "tot": "str"
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1840,
  "y": 580,
  "wires": [
    [
      "ff1d39e1fd49525f"
    ]
  ],
  "_order": 243
}

module.exports = Node;