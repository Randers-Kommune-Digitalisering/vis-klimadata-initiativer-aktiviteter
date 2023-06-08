const Node = {
  "id": "cccdee9a8a6db77f",
  "type": "switch",
  "z": "14a0d5d3f4f8bbaa",
  "g": "8399753a47d23bb1",
  "name": "Check data return",
  "property": "data",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nnull"
    },
    {
      "t": "null"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 210,
  "y": 1604,
  "wires": [
    [
      "ab6fb30a9f6541ef"
    ],
    [
      "e958eeb703ac8e8c"
    ]
  ],
  "_order": 504
}

module.exports = Node;