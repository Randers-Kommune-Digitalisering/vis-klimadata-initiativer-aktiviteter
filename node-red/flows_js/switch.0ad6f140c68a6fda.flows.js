const Node = {
  "id": "0ad6f140c68a6fda",
  "type": "switch",
  "z": "7f3219f0beb025c3",
  "name": "Tjek om tabel eksisterer",
  "property": "$count(payload)",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "eq",
      "v": "0",
      "vt": "num"
    },
    {
      "t": "gt",
      "v": "0",
      "vt": "num"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 970,
  "y": 320,
  "wires": [
    [
      "f6528938738539ec"
    ],
    [
      "08b465ae39304f21"
    ]
  ],
  "_order": 190
}

module.exports = Node;