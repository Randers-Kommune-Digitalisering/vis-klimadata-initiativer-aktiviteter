const Node = {
  "id": "f15ef1d8b0c08ad3",
  "type": "subflow",
  "name": "OpenData.dk - Randers org. - Connector (2)",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 40,
      "y": 40,
      "wires": [
        {
          "id": "ca29ff7c7dca1935"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 1320,
      "y": 320,
      "wires": [
        {
          "id": "9014ce0c1ddf1f70",
          "port": 0
        },
        {
          "id": "4d9691fedb0a0717",
          "port": 0
        }
      ]
    },
    {
      "x": 1310,
      "y": 420,
      "wires": [
        {
          "id": "758b1a3ab736cae5",
          "port": 0
        }
      ]
    },
    {
      "x": 1310,
      "y": 520,
      "wires": [
        {
          "id": "66420c5109c50919",
          "port": 0
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#E9967A",
  "outputLabels": [
    "metrics",
    "data",
    "retry"
  ],
  "icon": "node-red/inject.svg",
  "status": {
    "x": 1340,
    "y": 600,
    "wires": [
      {
        "id": "c1ce98d04720ba49",
        "port": 0
      }
    ]
  },
  "_order": 9
}

module.exports = Node;