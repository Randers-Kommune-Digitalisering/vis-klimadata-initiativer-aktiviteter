const Node = {
  "id": "53e6ce8d95a68234",
  "type": "switch",
  "z": "067b777cae534d43",
  "name": "is 404 / 409?",
  "property": "status.text",
  "propertyType": "msg",
  "rules": [
    {
      "t": "cont",
      "v": "404",
      "vt": "str"
    },
    {
      "t": "cont",
      "v": "409",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 1090,
  "y": 640,
  "wires": [
    [
      "f145636890aacdc2"
    ],
    [
      "dd44421eef2a107f"
    ]
  ],
  "_order": 180
}

module.exports = Node;