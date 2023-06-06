const Node = {
  "id": "6ee1013da7bc9311",
  "type": "change",
  "z": "80076417ef9f662a",
  "name": "Create status object",
  "rules": [
    {
      "t": "set",
      "p": "status",
      "pt": "msg",
      "to": "{\t   \"fill\": \"yellow\",\t   \"shape\":\"ring\",\t   \"text\": \"Retries: \" & config.currentRetryAttempt\t}\t\t",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 640,
  "y": 240,
  "wires": [
    [
      "bf43302876766fa3"
    ]
  ],
  "_order": 232
}

module.exports = Node;