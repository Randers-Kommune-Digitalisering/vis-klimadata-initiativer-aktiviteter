const Node = {
  "id": "93edc6173e4116e6",
  "type": "switch",
  "z": "9cd2fc26979e7dd1",
  "g": "4a217ed33a9fcb99",
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
      "3fe3ca9587eec005"
    ],
    [
      "0207acdc5f9a876b"
    ]
  ],
  "_order": 298
}

module.exports = Node;