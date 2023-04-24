const Node = {
  "id": "f68edc394a4e5259",
  "type": "subflow",
  "name": "Retry",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 180,
      "y": 80,
      "wires": [
        {
          "id": "node2"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 1030,
      "y": 120,
      "wires": [
        {
          "id": "node4",
          "port": 0
        }
      ]
    },
    {
      "x": 980,
      "y": 70,
      "wires": [
        {
          "id": "node2",
          "port": 0
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#87A980",
  "outputLabels": [
    "Retrying {retryCount} number of times",
    "MaxRetries Reached"
  ],
  "icon": "font-awesome/fa-retweet",
  "status": {
    "x": 900,
    "y": 180,
    "wires": [
      {
        "id": "fdc6e109d6714a6c",
        "port": 0
      }
    ]
  },
  "_order": 9
}

module.exports = Node;