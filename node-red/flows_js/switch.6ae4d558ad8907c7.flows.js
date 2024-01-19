const Node = {
  "id": "6ae4d558ad8907c7",
  "type": "switch",
  "z": "c0f39fa937e7d6f9",
  "name": "Loop complete?",
  "property": "count+1",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "lt",
      "v": "(data ~> $count())",
      "vt": "jsonata"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 360,
  "y": 1240,
  "wires": [
    [
      "d656430bc4b9bef7"
    ],
    [
      "952a75481b39dd63"
    ]
  ],
  "_order": 602
}

module.exports = Node;