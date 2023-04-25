const Node = {
  "id": "7278d8a019646c2b",
  "type": "switch",
  "z": "7f3219f0beb025c3",
  "g": "dce8b91a0662f793",
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
      "85b6b60428bd1e4c"
    ]
  ],
  "_order": 124
}

module.exports = Node;