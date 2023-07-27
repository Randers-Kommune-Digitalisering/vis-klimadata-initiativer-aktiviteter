const Node = {
  "id": "95b355ae77a29945",
  "type": "switch",
  "z": "aad50484a0b40b44",
  "name": "Kontrollér om modtaget data \\n er nyere end gemt data",
  "property": "payload[0].last_observation ~> $toMillis",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "gte",
      "v": "(data.observedAt ~>$split('.'))[0] ~> $toMillis",
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
  "y": 1180,
  "wires": [
    [
      "bfb02ac182e1d95b"
    ],
    [
      "e88e7148db86ed42"
    ]
  ],
  "_order": 479
}

module.exports = Node;