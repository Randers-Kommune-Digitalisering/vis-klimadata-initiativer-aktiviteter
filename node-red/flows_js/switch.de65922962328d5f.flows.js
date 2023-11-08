const Node = {
  "id": "de65922962328d5f",
  "type": "switch",
  "z": "39591030e2e9860e",
  "g": "53b8689cf243c43d",
  "name": "Open Data Done?",
  "property": "opendataDone",
  "propertyType": "global",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 670,
  "y": 60,
  "wires": [
    [
      "8d6ba9e52ec92ff2"
    ],
    [
      "b87783269ee5fd37",
      "fddf843fd93f59fe"
    ]
  ],
  "_order": 590
}

module.exports = Node;