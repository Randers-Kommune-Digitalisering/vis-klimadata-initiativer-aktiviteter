const Node = {
  "id": "f16ddb4b75ac438c",
  "type": "switch",
  "z": "d5880abe3145a384",
  "name": "",
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
  "x": 1070,
  "y": 600,
  "wires": [
    [
      "f37762038cbbae66"
    ]
  ],
  "_order": 449
}

module.exports = Node;