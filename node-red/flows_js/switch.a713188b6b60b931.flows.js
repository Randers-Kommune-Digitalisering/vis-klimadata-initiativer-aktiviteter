const Node = {
  "id": "a713188b6b60b931",
  "type": "switch",
  "z": "6a3178445dadff32",
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
      "5240643f4d6e1617"
    ],
    [
      "9316ca4a44bc4b46"
    ]
  ],
  "_order": 292
}

module.exports = Node;