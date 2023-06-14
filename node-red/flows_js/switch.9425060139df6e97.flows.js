const Node = {
  "id": "9425060139df6e97",
  "type": "switch",
  "z": "067b777cae534d43",
  "g": "8a31b6b1e5d45bbe",
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
  "x": 280,
  "y": 520,
  "wires": [
    [
      "c4872cdb3119e7dd"
    ],
    [
      "5a2e615e515be2c0"
    ]
  ],
  "_order": 138
}

module.exports = Node;