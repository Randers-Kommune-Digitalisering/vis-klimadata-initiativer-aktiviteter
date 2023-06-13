const Node = {
  "id": "09de035de0ec0ed2",
  "type": "change",
  "z": "8571dcc8e1e9c903",
  "g": "26dd9724b7750974",
  "name": "Hvis NULL sæt startdato to 2018",
  "rules": [
    {
      "t": "set",
      "p": "startdato",
      "pt": "msg",
      "to": "2023-01-01",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1110,
  "y": 280,
  "wires": [
    [
      "71fc6f4bc4f9607a",
      "aaed9b5f92eccbb9"
    ]
  ],
  "_order": 203
}

module.exports = Node;