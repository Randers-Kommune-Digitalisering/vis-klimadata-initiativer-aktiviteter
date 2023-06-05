const Node = {
  "id": "5476474f50f31f4e",
  "type": "change",
  "z": "36a828017042c198",
  "g": "7b1390c441209648",
  "name": "Rens og oversæt datofelt \\n til iso8601 og konverter areal til US decimal",
  "rules": [
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "data",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "data.TID",
      "pt": "msg",
      "to": "data.TID & \"-12-01\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "data.INDHOLD",
      "pt": "msg",
      "to": "$number($replace(data.INDHOLD, \",\", \".\"))",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 870,
  "y": 480,
  "wires": [
    [
      "8ad4b29a3e40eee8"
    ]
  ],
  "_order": 199
}

module.exports = Node;