const Node = {
  "id": "baaf9adbbf2231b0",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "05fc82ad62ba62fa",
  "name": "db_done = true",
  "rules": [
    {
      "t": "set",
      "p": "db_done",
      "pt": "flow",
      "to": "",
      "tot": "date"
    },
    {
      "t": "set",
      "p": "db_isBeingCreated",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1080,
  "y": 1020,
  "wires": [
    []
  ],
  "_order": 313
}

module.exports = Node;