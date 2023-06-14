const Node = {
  "id": "947fc9603f42f684",
  "type": "switch",
  "z": "db9cae581f57fc84",
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
  "x": 790,
  "y": 560,
  "wires": [
    [
      "afd363f408707a55"
    ],
    [
      "afdc803eef4a5296",
      "73df4bb1c3f715df"
    ]
  ],
  "_order": 346
}

module.exports = Node;