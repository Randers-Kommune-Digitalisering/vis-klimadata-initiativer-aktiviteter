const Node = {
  "id": "b9422a45d22f82f7",
  "type": "switch",
  "z": "9cd2fc26979e7dd1",
  "name": "Data = empty?",
  "property": "data",
  "propertyType": "msg",
  "rules": [
    {
      "t": "empty"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 1080,
  "y": 840,
  "wires": [
    [
      "3ed8898fec120e3e"
    ],
    [
      "69578e7178f64af5"
    ]
  ],
  "_order": 286
}

module.exports = Node;