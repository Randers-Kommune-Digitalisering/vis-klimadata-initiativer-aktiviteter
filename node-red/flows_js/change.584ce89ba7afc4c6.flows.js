const Node = {
  "id": "584ce89ba7afc4c6",
  "type": "change",
  "z": "aad50484a0b40b44",
  "d": true,
  "g": "4be49ca197686888",
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
  "x": 800,
  "y": 2100,
  "wires": [
    []
  ],
  "_order": 479
}

module.exports = Node;