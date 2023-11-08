const Node = {
  "id": "2325333d3556eb67",
  "type": "change",
  "z": "39591030e2e9860e",
  "g": "80fb5b1757ce0cd1",
  "name": "Opsæt dataskabelon",
  "rules": [
    {
      "t": "set",
      "p": "dataskabelon",
      "pt": "flow",
      "to": "payload ~> $merge()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 500,
  "y": 680,
  "wires": [
    [
      "ec3d69e36ae9e822"
    ]
  ],
  "_order": 583
}

module.exports = Node;