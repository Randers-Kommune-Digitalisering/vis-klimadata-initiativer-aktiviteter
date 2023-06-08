const Node = {
  "id": "7b004c5e11e87f28",
  "type": "subflow",
  "name": "OpenData.dk - Randers org. - Connector",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 40,
      "y": 40,
      "wires": [
        {
          "id": "4e0b98bc09a1a4b7"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 1310,
      "y": 420,
      "wires": [
        {
          "id": "a1043807c29f2e48",
          "port": 0
        }
      ]
    },
    {
      "x": 1320,
      "y": 320,
      "wires": [
        {
          "id": "75c15c71a7c0076e",
          "port": 0
        },
        {
          "id": "f685a017c25bbbeb",
          "port": 0
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#DDAA99",
  "outputLabels": [
    "data",
    "metrics"
  ],
  "status": {
    "x": 300,
    "y": 580,
    "wires": [
      {
        "id": "0edb927b549dc4ac",
        "port": 0
      }
    ]
  },
  "_order": 8
}

module.exports = Node;