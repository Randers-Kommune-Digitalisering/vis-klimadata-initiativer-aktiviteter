const Node = {
  "id": "8cc02bc1bff762f5",
  "type": "change",
  "z": "6a3178445dadff32",
  "name": "currentRetryAttempt+1",
  "rules": [
    {
      "t": "set",
      "p": "config.currentRetryAttempt",
      "pt": "msg",
      "to": "config.currentRetryAttempt+1",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 380,
  "y": 80,
  "wires": [
    [
      "a1963aed436a96c5"
    ]
  ],
  "_order": 289
}

module.exports = Node;