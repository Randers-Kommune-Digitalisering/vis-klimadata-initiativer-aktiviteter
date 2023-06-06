const Node = {
  "id": "eec02a801697c1a2",
  "type": "switch",
  "z": "6b360b454d19172a",
  "g": "bb671390488c23f1",
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
      "dc172905d7889d81"
    ],
    [
      "1edfd2ca9d9adb45"
    ]
  ],
  "_order": 259
}

module.exports = Node;