const Node = {
  "id": "6ae4d558ad8907c7",
  "type": "switch",
  "z": "c0f39fa937e7d6f9",
  "name": "Loop complete?",
  "property": "count",
  "propertyType": "msg",
  "rules": [
    {
      "t": "lt",
      "v": "(data ~> $count()) -1",
      "vt": "jsonata"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 600,
  "y": 1060,
  "wires": [
    [
      "1514b262b25ba298"
    ],
    [
      "952a75481b39dd63",
      "2f755bb1629f6e4c"
    ]
  ],
  "_order": 483
}

module.exports = Node;