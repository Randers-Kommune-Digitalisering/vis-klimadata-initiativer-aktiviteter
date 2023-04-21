const Node = {
  "id": "node8",
  "type": "change",
  "z": "5d9f87f4934f2873",
  "name": "Reset Retry Count",
  "rules": [
    {
      "t": "set",
      "p": "retryCount",
      "pt": "msg",
      "to": "0",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "delay",
      "pt": "msg",
      "to": "0",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 350,
  "y": 60,
  "wires": [
    [
      "d9445c0bdd2aa1b8"
    ]
  ],
  "_order": 216
}

module.exports = Node;