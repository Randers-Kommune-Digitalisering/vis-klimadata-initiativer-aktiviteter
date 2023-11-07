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
  "x": 450,
  "y": 720,
  "wires": [
    [
      "f99e71f5bcf1da35"
    ]
  ],
  "_order": 417
}

module.exports = Node;