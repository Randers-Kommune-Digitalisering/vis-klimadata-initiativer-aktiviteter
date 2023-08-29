const Node = {
  "id": "4370572af6e58e63",
  "type": "switch",
  "z": "5ee0ae05e3ad5b5a",
  "name": "",
  "property": "config.currentRetryAttempt",
  "propertyType": "msg",
  "rules": [
    {
      "t": "gte",
      "v": "1",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 170,
  "y": 100,
  "wires": [
    [
      "6c7c743d5b7e2aab"
    ],
    [
      "3d995f447af30ece"
    ]
  ],
  "_order": 158
}

module.exports = Node;