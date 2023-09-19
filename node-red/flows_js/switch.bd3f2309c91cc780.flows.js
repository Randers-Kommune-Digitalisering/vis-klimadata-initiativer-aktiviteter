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
  "x": 1120,
  "y": 680,
  "wires": [
    [
      "6249a8208c7aeabc",
      "b4581e3f82afe60a"
    ],
    [
      "dec6311158454d48"
    ]
  ],
  "_order": 269
}

module.exports = Node;