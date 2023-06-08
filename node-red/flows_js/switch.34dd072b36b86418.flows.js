const Node = {
  "id": "34dd072b36b86418",
  "type": "switch",
  "z": "80076417ef9f662a",
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
      "487ad510ea1fe3e0"
    ],
    [
      "eca82ec062fb212f"
    ]
  ],
  "_order": 253
}

module.exports = Node;