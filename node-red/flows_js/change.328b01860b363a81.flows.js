const Node = {
  "id": "328b01860b363a81",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
  "g": "8108b6de77b9d886",
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
  "x": 1190,
  "y": 380,
  "wires": [
    []
  ],
  "info": "",
  "_order": 202
}

Node.info = `
Henter den fulde dato og tid fra den seneste række i databasen, konverterer til en teksstren og fjerner tidsstemplet.
Returnerer derefter den rensede dato
`

module.exports = Node;