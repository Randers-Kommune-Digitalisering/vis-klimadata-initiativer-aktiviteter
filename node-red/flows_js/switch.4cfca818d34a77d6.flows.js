const Node = {
  "id": "4cfca818d34a77d6",
  "type": "switch",
  "z": "8571dcc8e1e9c903",
  "g": "0b6a3796775ca5e9",
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
      "aec106ee16324493"
    ],
    [
      "627b9982c16502f9"
    ]
  ],
  "_order": 181
}

module.exports = Node;