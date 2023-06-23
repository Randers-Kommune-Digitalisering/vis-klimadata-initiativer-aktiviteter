const Node = {
  "id": "bf76db2ac198b50b",
  "type": "change",
  "z": "5ee0ae05e3ad5b5a",
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
      "3a3e26196ca3a21d"
    ]
  ],
  "_order": 115
}

module.exports = Node;