const Node = {
  "id": "8094e4bd93cd5f19",
  "type": "change",
  "z": "8571dcc8e1e9c903",
  "d": true,
  "g": "26dd9724b7750974",
  "name": "Fjern tidsstempel \\n og sæt startdato til dato-streng \\n for seneste række hentet",
  "rules": [
    {
      "t": "set",
      "p": "startdato",
      "pt": "msg",
      "to": "$substring($string(payload[0].latest_month), 1, 10)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1110,
  "y": 340,
  "wires": [
    [
      "71fc6f4bc4f9607a"
    ]
  ],
  "info": "",
  "_order": 208
}

Node.info = `
Henter den fulde dato og tid fra den seneste række i databasen, konverterer til en teksstren og fjerner tidsstemplet.
Returnerer derefter den rensede dato
`

module.exports = Node;