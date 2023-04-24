const Node = {
  "id": "954e0bf93ef4a29b",
  "type": "switch",
  "z": "7b004c5e11e87f28",
  "g": "9fc7aa784e8175c5",
  "name": "Datafilter ↓ udvælg filer oprettet \\n  for data_age_days siden",
  "property": "payload.created ~> $substring(0,10)",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "gte",
      "v": "$toMillis($now()) - data_age_days * 24 * 60 * 60 * 1000 ~> /* Udregner og returnerer datostempel \"data_age_days\" tilbage i tiden */\t$fromMillis() ~> /* Konverterer til data og tids format */\t$substring(0, 10) /* Konverterer til streng og fjern tidsstempel */",
      "vt": "jsonata"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 1470,
  "y": 100,
  "wires": [
    [
      "164ebb684530a3e9"
    ]
  ],
  "outputLabels": [
    "created today"
  ],
  "_order": 110
}

module.exports = Node;