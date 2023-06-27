const Node = {
  "id": "f1b4c62cf19a485e",
  "type": "switch",
  "z": "067b777cae534d43",
  "g": "1e2123ef10d686d8",
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
      "71b1bb147d683624",
      "f643fc9db3079702"
    ],
    [
      "07e5e4dba6a0df79"
    ]
  ],
  "outputLabels": [
    "created today",
    ""
  ],
  "_order": 136
}

module.exports = Node;