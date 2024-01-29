const Node = {
  "id": "bb38b1a4ac7c52b2",
  "type": "switch",
  "z": "39591030e2e9860e",
  "g": "cdba575c8249e3b4",
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
  "x": 450,
  "y": 460,
  "wires": [
    [
      "f01b07260aab2c0a"
    ],
    [
      "b3570232dfd4490e"
    ]
  ],
  "_order": 650
}

module.exports = Node;