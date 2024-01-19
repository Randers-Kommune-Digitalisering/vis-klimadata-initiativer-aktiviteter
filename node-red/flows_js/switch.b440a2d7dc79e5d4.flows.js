const Node = {
  "id": "b440a2d7dc79e5d4",
  "type": "switch",
  "z": "db9cae581f57fc84",
  "g": "50ce8cdc07614c53",
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
  "x": 595,
  "y": 1100,
  "wires": [
    [
      "f979cefa7ea50d1f"
    ]
  ],
  "l": false,
  "_order": 362
}

module.exports = Node;