const Node = {
  "id": "0d7a78df7cc49541",
  "type": "switch",
  "z": "9cd2fc26979e7dd1",
  "g": "d0265b9f621b187d",
  "name": "Tjek om der køres \\n i udviklermiljø",
  "property": "DEV_ENVIROMENT",
  "propertyType": "env",
  "rules": [
    {
      "t": "neq",
      "v": "true",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 430,
  "y": 220,
  "wires": [
    [
      "c24928efa595e691"
    ]
  ],
  "_order": 485
}

module.exports = Node;