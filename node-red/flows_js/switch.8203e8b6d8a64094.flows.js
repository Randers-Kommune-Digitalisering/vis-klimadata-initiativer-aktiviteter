const Node = {
  "id": "8203e8b6d8a64094",
  "type": "switch",
  "z": "aad50484a0b40b44",
  "name": "Er data null?",
  "property": "payload[0].last_observation",
  "propertyType": "msg",
  "rules": [
    {
      "t": "null"
    },
    {
      "t": "nnull"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 350,
  "y": 940,
  "wires": [
    [
      "edcd9921993e19bf"
    ],
    [
      "8e3bb04c7e0fbde5"
    ]
  ],
  "_order": 493
}

module.exports = Node;