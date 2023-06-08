const Node = {
  "id": "1b526f86e256afde",
  "type": "change",
  "z": "6a3178445dadff32",
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
      "b6f1e1c31e198fb1"
    ]
  ],
  "_order": 297
}

module.exports = Node;