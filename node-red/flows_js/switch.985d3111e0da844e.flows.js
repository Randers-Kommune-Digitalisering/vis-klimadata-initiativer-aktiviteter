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
      "bdd4759a3e449525"
    ]
  ],
  "_order": 248
}

module.exports = Node;