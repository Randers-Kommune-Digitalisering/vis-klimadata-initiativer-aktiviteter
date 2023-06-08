const Node = {
  "id": "72ee09fd25a880d5",
  "type": "change",
  "z": "8b14b3c953574b40",
  "g": "e927759a0e35212b",
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
      "e330064ce7a79cc8"
    ]
  ],
  "info": "",
  "_order": 373
}

Node.info = `
Henter den fulde dato og tid fra den seneste række i databasen, konverterer til en teksstren og fjerner tidsstemplet.
Returnerer derefter den rensede dato
`

module.exports = Node;