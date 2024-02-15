const Node = {
  "id": "f5aba8b95cd0b340",
  "type": "switch",
  "z": "752a5429c81af8a5",
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
  "y": 340,
  "wires": [
    [
      "a5c7c206067049b4"
    ],
    [
      "074a7af3458a126a"
    ]
  ],
  "_order": 740
}

module.exports = Node;