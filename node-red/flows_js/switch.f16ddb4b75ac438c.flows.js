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
  "x": 170,
  "y": 1260,
  "wires": [
    [
      "f37762038cbbae66"
    ]
  ],
  "_order": 450
}

module.exports = Node;