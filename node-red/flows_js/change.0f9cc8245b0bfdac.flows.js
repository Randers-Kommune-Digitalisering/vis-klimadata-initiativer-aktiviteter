const Node = {
  "id": "0f9cc8245b0bfdac",
  "type": "change",
  "z": "6b360b454d19172a",
  "g": "bb671390488c23f1",
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
      "1cbaf9dd5f00f15d"
    ]
  ],
  "_order": 287
}

module.exports = Node;