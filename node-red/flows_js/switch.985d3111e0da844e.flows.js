const Node = {
  "id": "985d3111e0da844e",
  "type": "switch",
  "z": "b211627962aab2cb",
  "g": "e1e61df6fde8cc6b",
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
      "e6036517b6111e21"
    ]
  ],
  "_order": 225
}

module.exports = Node;