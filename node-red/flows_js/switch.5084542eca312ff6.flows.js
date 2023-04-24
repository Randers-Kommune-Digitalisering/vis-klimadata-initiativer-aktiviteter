const Node = {
  "id": "5084542eca312ff6",
  "type": "switch",
  "z": "5d9f87f4934f2873",
  "name": "Datafilter ↓ udvælg filer oprettet \\n  for data_age_days siden",
  "property": "payload.created ~> $substring(0,10)",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "gte",
      "v": "$toMillis($now()) - data_age_days * 24 * 60 * 60 * 1000 ~> /* Udregner og returnerer datostempel \"data_age_days\" tilbage i tiden */\t$fromMillis() ~> /* Konverterer til data og tids format */\t$substring(0, 10) /* Konverterer til streng og fjern tidsstempel */\t",
      "vt": "jsonata"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": true,
  "outputs": 2,
  "x": 1550,
  "y": 580,
  "wires": [
    [
      "a45baa0bfa1b3f64"
    ],
    [
      "e849519eb4a2ce3a"
    ]
  ],
  "outputLabels": [
    "created today",
    ""
  ],
  "_order": 234
}

module.exports = Node;