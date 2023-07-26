const Node = {
  "id": "584ce89ba7afc4c6",
  "type": "change",
  "z": "aad50484a0b40b44",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "( data.values ~> $keys ) @ $key . {\t    \"type\":         $key,\t    \"value\":        (data.values ~> $lookup($key) ) .value,\t    \"observedAt\":   (data.values ~> $lookup($key) ) .observedAt\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 320,
  "y": 1340,
  "wires": [
    []
  ],
  "_order": 475
}

module.exports = Node;