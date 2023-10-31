const Node = {
  "id": "3add07572fa4d675",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "name": "Set dst_updated",
  "rules": [
    {
      "t": "set",
      "p": "dst_updated",
      "pt": "msg",
      "to": "payload.updated ~> $toMillis()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 900,
  "y": 680,
  "wires": [
    [
      "bd3f2309c91cc780"
    ]
  ],
  "_order": 249
}

module.exports = Node;