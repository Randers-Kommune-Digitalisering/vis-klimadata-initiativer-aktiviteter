const Node = {
  "id": "9ebe4442caf07207",
  "type": "switch",
  "z": "f15ef1d8b0c08ad3",
  "g": "7c67278750086864",
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
      "a99e5a07925df8f2"
    ],
    [
      "3b17098a02d1b641"
    ]
  ],
  "_order": 211
}

module.exports = Node;