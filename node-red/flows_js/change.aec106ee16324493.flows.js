const Node = {
  "id": "aec106ee16324493",
  "type": "change",
  "z": "8571dcc8e1e9c903",
  "g": "0b6a3796775ca5e9",
  "name": "Hvis NULL sæt startdato to 2018",
  "rules": [
    {
      "t": "set",
      "p": "startdato",
      "pt": "msg",
      "to": "2018-01-01",
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
      "698ef7d845c45259"
    ]
  ],
  "_order": 181
}

module.exports = Node;