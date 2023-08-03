const Node = {
  "id": "dc300126a2092f0d",
  "type": "switch",
  "z": "aad50484a0b40b44",
  "name": "Er data tom?",
  "property": "payload[0].last_observation ~> $exists()",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "false"
    },
    {
      "t": "true"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 330,
  "y": 900,
  "wires": [
    [
      "edcd9921993e19bf"
    ],
    [
      "8e3bb04c7e0fbde5"
    ]
  ],
  "_order": 464
}

module.exports = Node;