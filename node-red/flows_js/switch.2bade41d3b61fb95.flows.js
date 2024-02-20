const Node = {
  "id": "2bade41d3b61fb95",
  "type": "switch",
  "z": "d5880abe3145a384",
  "g": "16cba9e5783d458b",
  "name": "",
  "property": "counter",
  "propertyType": "msg",
  "rules": [
    {
      "t": "lt",
      "v": "length-1",
      "vt": "jsonata"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 240,
  "y": 440,
  "wires": [
    [
      "279e3136e64a382b"
    ],
    [
      "df652812f7a46562"
    ]
  ],
  "_order": 410
}

module.exports = Node;