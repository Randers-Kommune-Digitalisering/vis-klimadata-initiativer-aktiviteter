const Node = {
  "id": "d09e9abbc38df8c5",
  "type": "switch",
  "z": "7b004c5e11e87f28",
  "g": "0f369eeef0896547",
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
  "y": 120,
  "wires": [
    [
      "276139171fd46b7f"
    ],
    [
      "6fe4579af68bd2ea"
    ]
  ],
  "_order": 96
}

module.exports = Node;