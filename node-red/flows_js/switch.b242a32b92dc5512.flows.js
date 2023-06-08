const Node = {
  "id": "b242a32b92dc5512",
  "type": "switch",
  "z": "f15ef1d8b0c08ad3",
  "g": "19fc61772af3f2a5",
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
      "b1b2d1d99797f590",
      "8604a55da5a084e7"
    ],
    [
      "7344e720e0250413"
    ]
  ],
  "outputLabels": [
    "created today",
    ""
  ],
  "_order": 219
}

module.exports = Node;