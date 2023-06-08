const Node = {
  "id": "b920e7d754e563c7",
  "type": "switch",
  "z": "14a0d5d3f4f8bbaa",
  "name": "",
  "property": "error.message",
  "propertyType": "msg",
  "rules": [
    {
      "t": "cont",
      "v": "\"Error: Table '\" & \"{{flow.tablename}}\" & \"' doesn't exist\"",
      "vt": "jsonata"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 870,
  "y": 1704,
  "wires": [
    [
      "ea0ae3fda1e05a9d"
    ]
  ],
  "_order": 527
}

module.exports = Node;