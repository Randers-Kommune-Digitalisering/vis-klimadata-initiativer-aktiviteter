const Node = {
  "id": "8203e8b6d8a64094",
  "type": "switch",
  "z": "aad50484a0b40b44",
  "name": "Er data null?",
  "property": "payload[0].last_observation",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nnull"
    },
    {
      "t": "null"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 270,
  "y": 1200,
  "wires": [
    [
      "95b355ae77a29945"
    ],
    [
      "524029eb5aa1b087"
    ]
  ],
  "_order": 496
}

module.exports = Node;