const Node = {
  "id": "b440a2d7dc79e5d4",
  "type": "switch",
  "z": "db9cae581f57fc84",
  "name": "",
  "property": "$flowContext(\"datasets\") ~> $count",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "eq",
      "v": "0",
      "vt": "num"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 935,
  "y": 680,
  "wires": [
    [
      "fee1df64d376b1d2"
    ]
  ],
  "l": false,
  "_order": 393
}

module.exports = Node;