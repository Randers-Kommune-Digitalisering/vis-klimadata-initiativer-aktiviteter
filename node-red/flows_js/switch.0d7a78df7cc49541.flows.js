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
      "3eb09dda45462a10"
    ]
  ],
  "_order": 282
}

module.exports = Node;