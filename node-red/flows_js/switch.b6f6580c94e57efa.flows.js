const Node = {
  "id": "b6f6580c94e57efa",
  "type": "switch",
  "z": "6b360b454d19172a",
  "g": "12de71dcddfdf75d",
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
  "x": 640,
  "y": 460,
  "wires": [
    [
      "005e3b79e2cf7c32"
    ],
    [
      "d724de646703fe6a"
    ]
  ],
  "_order": 277
}

module.exports = Node;