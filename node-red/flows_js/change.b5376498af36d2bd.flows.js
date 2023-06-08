const Node = {
  "id": "b5376498af36d2bd",
  "type": "change",
  "z": "80076417ef9f662a",
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
      "760ecf35e1a9bc7a"
    ]
  ],
  "_order": 250
}

module.exports = Node;