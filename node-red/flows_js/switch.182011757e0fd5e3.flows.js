const Node = {
  "id": "182011757e0fd5e3",
  "type": "switch",
  "z": "452aaf8dc5cd8d45",
  "g": "8108b6de77b9d886",
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
  "x": 850,
  "y": 800,
  "wires": [
    [
      "396efed709b6a975"
    ],
    [
      "328b01860b363a81"
    ]
  ],
  "_order": 201
}

module.exports = Node;