const Node = {
  "id": "f16ddb4b75ac438c",
  "type": "switch",
  "z": "d5880abe3145a384",
  "g": "4854ea2eaa259ca4",
  "name": "bil53?",
  "property": "tablename",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "dst_bil53",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 210,
  "y": 1280,
  "wires": [
    [
      "33c3c87427c8214e"
    ]
  ],
  "_order": 452
}

module.exports = Node;