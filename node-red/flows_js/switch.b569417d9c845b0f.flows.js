const Node = {
  "id": "b569417d9c845b0f",
  "type": "switch",
  "z": "6b360b454d19172a",
  "g": "4d967bbe9d19abb4",
  "name": "Datafilter ↓ udvælg filer oprettet \\n  for max_file_age_days siden",
  "property": "payload.created ~> $substring(0,10)",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "gte",
      "v": "$toMillis($now()) - max_file_age_days * 24 * 60 * 60 * 1000 ~> /* Udregner og returnerer datostempel max_file_age_days tilbage i tiden */\t$fromMillis() ~> /* Konverterer til data og tids format */\t$substring(0, 10) /* Konverterer til streng og fjern tidsstempel */\t",
      "vt": "jsonata"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "false",
  "repair": false,
  "outputs": 2,
  "x": 410,
  "y": 300,
  "wires": [
    [
      "a713818e03fcf4ec",
      "f998e08a71c1f45e"
    ],
    [
      "e1e6ba7375f49afd"
    ]
  ],
  "outputLabels": [
    "created today",
    ""
  ],
  "_order": 264
}

module.exports = Node;