const Node = {
  "id": "95b355ae77a29945",
  "type": "switch",
  "z": "aad50484a0b40b44",
  "name": "Kontrollér om modtaget data \\n er nyere end gemt data",
  "property": "payload[0].last_observation ~> $toMillis(\"[Y0001]-[M01]-[D01] [H01]:[m01]:[s01]\")",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "gte",
      "v": "data.observedAt ~> $toMillis",
      "vt": "jsonata"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 380,
  "y": 1160,
  "wires": [
    [
      "1186e95d964e4127"
    ],
    [
      "85c10287d8d017e4"
    ]
  ],
  "_order": 473
}

module.exports = Node;