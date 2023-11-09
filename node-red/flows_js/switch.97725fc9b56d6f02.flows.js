const Node = {
  "id": "97725fc9b56d6f02",
  "type": "switch",
  "z": "4ee111634776501c",
  "name": "Loop complete?",
  "property": "counter",
  "propertyType": "msg",
  "rules": [
    {
      "t": "lt",
      "v": "length",
      "vt": "jsonata"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 340,
  "y": 300,
  "wires": [
    [
      "d470eeba4ce1ab01"
    ],
    [
      "16df21bd1191806d"
    ]
  ],
  "_order": 607
}

module.exports = Node;