const Node = {
  "id": "449682c78633f1cc",
  "type": "switch",
  "z": "db9cae581f57fc84",
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
  "x": 1190,
  "y": 60,
  "wires": [
    [
      "e01068b35a8d78bf"
    ]
  ],
  "_order": 355
}

module.exports = Node;