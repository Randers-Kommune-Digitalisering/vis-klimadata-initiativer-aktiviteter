const Node = {
  "id": "395b23ea365aef84",
  "type": "switch",
  "z": "8571dcc8e1e9c903",
  "g": "26dd9724b7750974",
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
      "09de035de0ec0ed2"
    ],
    [
      "8094e4bd93cd5f19",
      "60f63e3a5c85b719"
    ]
  ],
  "_order": 202
}

module.exports = Node;