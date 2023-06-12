const Node = {
  "id": "59b47841deed3db1",
  "type": "switch",
  "z": "8571dcc8e1e9c903",
  "g": "616fd052c81e52cc",
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
      "8f35b8f426ac7542"
    ]
  ],
  "_order": 193
}

module.exports = Node;