const Node = {
  "id": "fdd8f9690b8a671b",
  "type": "switch",
  "z": "80076417ef9f662a",
  "name": "",
  "property": "config.currentRetryAttempts",
  "propertyType": "msg",
  "rules": [
    {
      "t": "gte",
      "v": "1",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 190,
  "y": 100,
  "wires": [
    [
      "b5376498af36d2bd"
    ],
    [
      "b340dcdc1c773927"
    ]
  ],
  "_order": 245
}

module.exports = Node;