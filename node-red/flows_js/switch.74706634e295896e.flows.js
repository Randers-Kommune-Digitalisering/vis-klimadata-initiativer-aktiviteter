const Node = {
  "id": "74706634e295896e",
  "type": "switch",
  "z": "1e5470dae1365ec6",
  "name": "is JSON?",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "istype",
      "v": "object",
      "vt": "object"
    },
    {
      "t": "istype",
      "v": "json",
      "vt": "json"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 3,
  "x": 440,
  "y": 100,
  "wires": [
    [
      "554640fd2f49234a"
    ],
    [
      "f5df73024c0e6be9"
    ],
    [
      "6b32e653641b0dd2"
    ]
  ],
  "_order": 214
}

module.exports = Node;