const Node = {
  "id": "8a5ff7ce2b284e37",
  "type": "switch",
  "z": "f15ef1d8b0c08ad3",
  "g": "acc1c82d640f13f3",
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
  "x": 840,
  "y": 120,
  "wires": [
    [
      "0762afa37654a230"
    ],
    [
      "ae1a820ef89ab3a6"
    ]
  ],
  "_order": 181
}

module.exports = Node;