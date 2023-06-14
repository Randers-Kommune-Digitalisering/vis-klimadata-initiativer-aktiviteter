const Node = {
  "id": "ef96f03fb8b3e7f4",
  "type": "change",
  "z": "db9cae581f57fc84",
  "d": true,
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "isNewData",
      "pt": "msg",
      "to": "(data ~> $count()) >\t$lookup(payload[0], payload[0] ~> $keys()[0])",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1610,
  "y": 760,
  "wires": [
    []
  ],
  "_order": 349
}

module.exports = Node;