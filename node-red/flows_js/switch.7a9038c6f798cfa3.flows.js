const Node = {
  "id": "7a9038c6f798cfa3",
  "type": "switch",
  "z": "36a828017042c198",
  "g": "420f87762af87ac6",
  "name": "Tjek om der køres \\n i udviklermiljø",
  "property": "DEV_ENVIROMENT",
  "propertyType": "env",
  "rules": [
    {
      "t": "eq",
      "v": "false",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 490,
  "y": 100,
  "wires": [
    [
      "c2a7d80a8df9fc53"
    ]
  ],
  "_order": 346
}

module.exports = Node;