const Node = {
  "id": "d09e9abbc38df8c5",
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
  "y": 620,
  "wires": [
    [
      "276139171fd46b7f"
    ],
    [
      "d45ef44fc053d4ba"
    ]
  ],
  "_order": 238
}

module.exports = Node;