const Node = {
  "id": "1b73ea38ae7d18fc",
  "type": "switch",
  "z": "067b777cae534d43",
  "g": "997f4664c676fae7",
  "name": "Check statusCode for sucess",
  "property": "statusCode",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "200",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 840,
  "y": 120,
  "wires": [
    [
      "998faeda5906d634"
    ],
    [
      "466f005d217b7ea4"
    ]
  ],
  "_order": 144
}

module.exports = Node;