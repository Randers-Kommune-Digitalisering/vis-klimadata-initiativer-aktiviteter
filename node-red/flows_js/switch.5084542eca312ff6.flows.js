const Node = {
  "id": "5084542eca312ff6",
  "type": "switch",
  "z": "7b004c5e11e87f28",
  "g": "35227f630a1419d4",
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
      "3d76d476ede49cfa",
      "440fe5b20f5ad96e"
    ],
    [
      "58c3d6c42e0d8cdc"
    ]
  ],
  "outputLabels": [
    "created today",
    ""
  ],
  "_order": 186
}

module.exports = Node;