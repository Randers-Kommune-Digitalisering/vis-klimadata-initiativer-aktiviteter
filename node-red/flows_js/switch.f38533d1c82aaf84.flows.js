const Node = {
  "id": "f38533d1c82aaf84",
  "type": "switch",
  "z": "7f3219f0beb025c3",
  "g": "68a49c0bcc64ea66",
  "name": "Tjek om data eksisterer i tabel",
  "property": "db_updated",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "0",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 1190,
  "y": 520,
  "wires": [
    [
      "7864e5ad04f1be39"
    ],
    [
      "1c718de50c990f81"
    ]
  ],
  "_order": 547
}

module.exports = Node;