const Node = {
  "id": "2b95e774560da542",
  "type": "switch",
  "z": "db9cae581f57fc84",
  "g": "05fc82ad62ba62fa",
  "name": "Tjek om tabel eksisterer",
  "property": "$count(payload)",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "gt",
      "v": "0",
      "vt": "num"
    },
    {
      "t": "eq",
      "v": "0",
      "vt": "num"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 790,
  "y": 2120,
  "wires": [
    [
      "baaf9adbbf2231b0",
      "5b92c664b1dd20a0"
    ],
    [
      "a71458ca35fdca65"
    ]
  ],
  "_order": 402
}

module.exports = Node;