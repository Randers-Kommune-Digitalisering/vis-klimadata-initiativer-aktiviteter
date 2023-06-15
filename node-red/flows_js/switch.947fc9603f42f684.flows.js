const Node = {
  "id": "947fc9603f42f684",
  "type": "switch",
  "z": "db9cae581f57fc84",
  "g": "ab0af2245cd1cfbb",
  "name": "Tjek antal rækker \\n op mod MariaDB",
  "property": "(data ~> $count()) >\t$lookup(payload[0], payload[0] ~> $keys()[0])",
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
  "x": 870,
  "y": 1380,
  "wires": [
    [
      "488595e350259e35"
    ],
    [
      "e8dc11ac80efa9a0"
    ]
  ],
  "_order": 303
}

module.exports = Node;