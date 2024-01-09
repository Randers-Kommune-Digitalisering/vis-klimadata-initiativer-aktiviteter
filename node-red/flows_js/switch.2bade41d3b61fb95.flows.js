const Node = {
  "id": "2bade41d3b61fb95",
  "type": "switch",
  "z": "d5880abe3145a384",
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
  "x": 280,
  "y": 360,
  "wires": [
    [
      "279e3136e64a382b"
    ],
    [
      "54d1ba8682349156"
    ]
  ],
  "_order": 682
}

module.exports = Node;