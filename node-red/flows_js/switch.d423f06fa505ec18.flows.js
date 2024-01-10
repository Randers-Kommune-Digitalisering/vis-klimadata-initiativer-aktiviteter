const Node = {
  "id": "d423f06fa505ec18",
  "type": "switch",
  "z": "c0f39fa937e7d6f9",
  "name": "Loop complete?",
  "property": "count +1",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "lt",
      "v": "(dataset ~> $count())",
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
  "y": 700,
  "wires": [
    [
      "923954f3d8cf399e",
      "cb1d5a5f3a8f3adf"
    ],
    [
      "8c1bf9171310f8c3"
    ]
  ],
  "_order": 578
}

module.exports = Node;