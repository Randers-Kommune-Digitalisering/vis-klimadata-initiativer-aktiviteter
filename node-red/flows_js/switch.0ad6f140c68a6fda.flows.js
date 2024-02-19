const Node = {
  "id": "0ad6f140c68a6fda",
  "type": "switch",
  "z": "7f3219f0beb025c3",
  "g": "68a49c0bcc64ea66",
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
  "x": 930,
  "y": 420,
  "wires": [
    [
      "f6528938738539ec"
    ],
    [
      "08b465ae39304f21"
    ]
  ],
  "_order": 554
}

module.exports = Node;