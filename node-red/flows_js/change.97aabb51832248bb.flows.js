const Node = {
  "id": "97aabb51832248bb",
  "type": "change",
  "z": "067b777cae534d43",
  "g": "997f4664c676fae7",
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
  "x": 1160,
  "y": 80,
  "wires": [
    [
      "46723c2ac685825a"
    ]
  ],
  "_order": 234
}

module.exports = Node;