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
      "aeed61301c7f7180"
    ]
  ],
  "_order": 518
}

module.exports = Node;