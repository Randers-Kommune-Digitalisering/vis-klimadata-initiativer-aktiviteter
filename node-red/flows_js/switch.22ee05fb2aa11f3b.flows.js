const Node = {
  "id": "22ee05fb2aa11f3b",
  "type": "switch",
  "z": "5d9f87f4934f2873",
  "name": "Check statusCode for sucess",
  "property": "statusCode",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "200",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 820,
  "y": 780,
  "wires": [
    [
      "7d50abf0d3091c7b"
    ],
    [
      "44dffa29248c1287"
    ]
  ],
  "_order": 244
}

module.exports = Node;