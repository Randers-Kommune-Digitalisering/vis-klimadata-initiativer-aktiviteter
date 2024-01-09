const Node = {
  "id": "6b32e653641b0dd2",
  "type": "switch",
  "z": "1e5470dae1365ec6",
  "name": "is CSV?",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "cont",
      "v": ";",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 680,
  "y": 140,
  "wires": [
    [
      "0a5ebccb2dbacf96"
    ],
    [
      "d85b123d96f694b6"
    ]
  ],
  "_order": 241
}

module.exports = Node;