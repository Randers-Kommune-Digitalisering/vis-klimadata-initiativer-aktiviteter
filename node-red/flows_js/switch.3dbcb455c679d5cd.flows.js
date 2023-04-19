const Node = {
  "id": "3dbcb455c679d5cd",
  "type": "switch",
  "z": "8b14b3c953574b40",
  "g": "e927759a0e35212b",
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
  "y": 320,
  "wires": [
    [
      "b8b69a38c0aedf34"
    ],
    [
      "72ee09fd25a880d5"
    ]
  ],
  "_order": 134
}

module.exports = Node;