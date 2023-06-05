const Node = {
  "id": "627b9982c16502f9",
  "type": "change",
  "z": "8571dcc8e1e9c903",
  "g": "0b6a3796775ca5e9",
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
      "698ef7d845c45259"
    ]
  ],
  "info": "",
  "_order": 300
}

Node.info = `
Henter den fulde dato og tid fra den seneste række i databasen, konverterer til en teksstren og fjerner tidsstemplet.
Returnerer derefter den rensede dato
`

module.exports = Node;