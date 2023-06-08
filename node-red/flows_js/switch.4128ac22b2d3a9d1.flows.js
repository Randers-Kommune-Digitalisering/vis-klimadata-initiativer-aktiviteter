const Node = {
  "id": "4128ac22b2d3a9d1",
  "type": "switch",
  "z": "6a3178445dadff32",
  "name": "",
  "property": "config.currentRetryAttempts",
  "propertyType": "msg",
  "rules": [
    {
      "t": "gte",
      "v": "1",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 190,
  "y": 100,
  "wires": [
    [
      "8cc02bc1bff762f5"
    ],
    [
      "df8f331cd5022431"
    ]
  ],
  "_order": 290
}

module.exports = Node;