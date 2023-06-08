const Node = {
  "id": "a1025e65d5b222fa",
  "type": "change",
  "z": "f15ef1d8b0c08ad3",
  "g": "acc1c82d640f13f3",
  "name": "Create status object",
  "rules": [
    {
      "t": "set",
      "p": "status",
      "pt": "msg",
      "to": "{\t   \"fill\": \"yellow\",\t   \"shape\":\"ring\",\t   \"text\": statusCode & \" \" & payload.error.message\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1180,
  "y": 60,
  "wires": [
    [
      "54c785a288809e11"
    ]
  ],
  "_order": 242
}

module.exports = Node;