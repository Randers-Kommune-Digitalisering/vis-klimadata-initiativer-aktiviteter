const Node = {
  "id": "52291d6a82432a0c",
  "type": "switch",
  "z": "452aaf8dc5cd8d45",
  "g": "9fc7aa784e8175c5",
  "name": "",
  "property": "payload.result.resources.created",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "$substring($now(), 0, 10)",
      "vt": "jsonata"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 1030,
  "y": 360,
  "wires": [
    [
      "3cd6eec904070a61"
    ],
    [
      "9b43c3f5c40a564f"
    ]
  ],
  "_order": 187
}

module.exports = Node;