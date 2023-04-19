const Node = {
  "id": "a232a87387ebb966",
  "type": "delay",
  "z": "452aaf8dc5cd8d45",
  "g": "9fc7aa784e8175c5",
  "name": "Retry if error",
  "pauseType": "delay",
  "timeout": "15",
  "timeoutUnits": "seconds",
  "rate": "1",
  "nbRateUnits": "1",
  "rateUnits": "second",
  "randomFirst": "1",
  "randomLast": "5",
  "randomUnits": "seconds",
  "drop": false,
  "allowrate": false,
  "outputs": 1,
  "x": 890,
  "y": 400,
  "wires": [
    [
      "e7b5a7f605e706ce",
      "e1559b7f0276848f"
    ]
  ],
  "_order": 188
}

module.exports = Node;