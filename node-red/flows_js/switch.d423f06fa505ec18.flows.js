const Node = {
  "id": "d423f06fa505ec18",
  "type": "switch",
  "z": "c0f39fa937e7d6f9",
  "name": "Loop complete?",
  "property": "count",
  "propertyType": "msg",
  "rules": [
    {
      "t": "lt",
      "v": "(dataset ~> $count()) -1",
      "vt": "jsonata"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 680,
  "y": 700,
  "wires": [
    [
      "923954f3d8cf399e",
      "9dd2ba588e0b65af"
    ],
    [
      "8c1bf9171310f8c3",
      "923954f3d8cf399e",
      "9dd2ba588e0b65af"
    ]
  ],
  "_order": 490
}

module.exports = Node;