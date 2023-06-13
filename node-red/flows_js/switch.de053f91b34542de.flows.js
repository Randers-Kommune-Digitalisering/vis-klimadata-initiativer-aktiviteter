const Node = {
  "id": "de053f91b34542de",
  "type": "switch",
  "z": "8571dcc8e1e9c903",
  "g": "ec678dd8475468cc",
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
      "b5451e7237d7ba50"
    ]
  ],
  "_order": 218
}

module.exports = Node;