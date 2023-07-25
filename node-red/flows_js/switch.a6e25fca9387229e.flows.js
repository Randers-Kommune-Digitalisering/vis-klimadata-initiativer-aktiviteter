const Node = {
  "id": "a6e25fca9387229e",
  "type": "switch",
  "z": "b211627962aab2cb",
  "g": "f16189186b28255c",
  "name": "Undersøg dato for \\n seneste række",
  "property": "payload[0].latest_month",
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
  "x": 790,
  "y": 600,
  "wires": [
    [
      "2da160df28353b1e"
    ],
    [
      "fd4171a6966f7c3f"
    ]
  ],
  "_order": 271
}

module.exports = Node;