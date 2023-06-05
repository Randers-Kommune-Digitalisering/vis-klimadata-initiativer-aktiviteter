const Node = {
  "id": "b340dcdc1c773927",
  "type": "change",
  "z": "80076417ef9f662a",
  "name": "currentRetryAttempt=1",
  "rules": [
    {
      "t": "set",
      "p": "config.currentRetryAttempt",
      "pt": "msg",
      "to": "1",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 380,
  "y": 120,
  "wires": [
    [
      "760ecf35e1a9bc7a"
    ]
  ],
  "_order": 190
}

module.exports = Node;