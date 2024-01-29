const Node = {
  "id": "d656430bc4b9bef7",
  "type": "change",
  "z": "c0f39fa937e7d6f9",
  "name": "Loop +1",
  "rules": [
    {
      "t": "set",
      "p": "count",
      "pt": "msg",
      "to": "count +1",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "data[$$.count]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 620,
  "y": 1180,
  "wires": [
    [
      "7be173b145756d1c"
    ]
  ],
  "_order": 582
}

module.exports = Node;