const Node = {
  "id": "2b95e774560da542",
  "type": "switch",
  "z": "db9cae581f57fc84",
  "name": "Tjek om tabel eksisterer",
  "property": "payload.length",
  "propertyType": "msg",
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
  "x": 1010,
  "y": 480,
  "wires": [
    [
      "e6adcf1a18463665",
      "5b92c664b1dd20a0"
    ],
    [
      "053a39221681cfbc"
    ]
  ],
  "_order": 353
}

module.exports = Node;