const Node = {
  "id": "2b62973ed9f21b58",
  "type": "switch",
  "z": "b211627962aab2cb",
  "name": "Data = empty?",
  "property": "data",
  "propertyType": "msg",
  "rules": [
    {
      "t": "empty"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 1080,
  "y": 660,
  "wires": [
    [
      "107d0fa21a5b6807"
    ],
    [
      "64b92360571a9628"
    ]
  ],
  "_order": 461
}

module.exports = Node;