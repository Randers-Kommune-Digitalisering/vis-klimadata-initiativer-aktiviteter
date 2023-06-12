const Node = {
  "id": "310f915d8edfc229",
  "type": "switch",
  "z": "5ee0ae05e3ad5b5a",
  "name": "",
  "property": "config.currentRetryAttempt",
  "propertyType": "msg",
  "rules": [
    {
      "t": "else"
    },
    {
      "t": "lte",
      "v": "config.retryAttempts",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 630,
  "y": 100,
  "wires": [
    [
      "e3e640d4700783e9"
    ],
    [
      "88134273a1fcabf6"
    ]
  ],
  "_order": 104
}

module.exports = Node;