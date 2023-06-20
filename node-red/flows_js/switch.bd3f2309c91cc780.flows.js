const Node = {
  "id": "bd3f2309c91cc780",
  "type": "switch",
  "z": "7f3219f0beb025c3",
  "name": "Ny data?",
  "property": "dst_updated > db_updated",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "false"
    },
    {
      "t": "true"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 1220,
  "y": 520,
  "wires": [
    [
      "6249a8208c7aeabc"
    ],
    [
      "dec6311158454d48"
    ]
  ],
  "_order": 186
}

module.exports = Node;