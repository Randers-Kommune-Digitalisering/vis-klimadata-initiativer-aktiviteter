const Node = {
  "id": "node7",
  "type": "change",
  "z": "7b004c5e11e87f28",
  "name": "Increment Retry Count",
  "rules": [
    {
      "t": "set",
      "p": "retryCount",
      "pt": "msg",
      "to": "retryCount + 1",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1260,
  "y": 440,
  "wires": [
    [
      "0682d9fb23110e2c"
    ]
  ],
  "_order": 111
}

module.exports = Node;