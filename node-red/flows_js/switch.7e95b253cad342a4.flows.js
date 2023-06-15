const Node = {
  "id": "7e95b253cad342a4",
  "type": "switch",
  "z": "8b14b3c953574b40",
  "g": "ca8ecf0bcc98d479",
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
      "6ce841fbce39163d"
    ]
  ],
  "_order": 181
}

module.exports = Node;