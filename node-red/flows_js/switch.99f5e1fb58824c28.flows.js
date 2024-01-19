const Node = {
  "id": "99f5e1fb58824c28",
  "type": "switch",
  "z": "4ee111634776501c",
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
  "x": 330,
  "y": 100,
  "wires": [
    [
      "7d4a5af6fbb7cc47"
    ]
  ],
  "_order": 689
}

module.exports = Node;