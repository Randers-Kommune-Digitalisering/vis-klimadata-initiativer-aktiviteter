const Node = {
  "id": "b80ad531beec2428",
  "type": "switch",
  "z": "db9cae581f57fc84",
  "name": "Data == null?",
  "property": "data",
  "propertyType": "msg",
  "rules": [
    {
      "t": "null"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 190,
  "y": 1120,
  "wires": [
    [
      "922a0753c1cb63e8"
    ],
    [
      "4f43366a23113848"
    ]
  ],
  "_order": 356
}

module.exports = Node;