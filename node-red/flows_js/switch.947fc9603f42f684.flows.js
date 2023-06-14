const Node = {
  "id": "947fc9603f42f684",
  "type": "switch",
  "z": "db9cae581f57fc84",
  "g": "05fc82ad62ba62fa",
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
  "x": 750,
  "y": 560,
  "wires": [
    [
      "afdc803eef4a5296"
    ],
    [
      "afdc803eef4a5296",
      "e8dc11ac80efa9a0"
    ]
  ],
  "_order": 278
}

module.exports = Node;