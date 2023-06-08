const Node = {
  "id": "f90aeb9f200eb923",
  "type": "change",
  "z": "f15ef1d8b0c08ad3",
  "name": "Create status object",
  "rules": [
    {
      "t": "set",
      "p": "status",
      "pt": "msg",
      "to": "{\t   \"fill\": \"yellow\",\t   \"shape\":\"ring\",\t   \"text\": statusCode }",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 940,
  "y": 560,
  "wires": [
    [
      "40eb0a4b6f011462"
    ]
  ],
  "_order": 245
}

module.exports = Node;