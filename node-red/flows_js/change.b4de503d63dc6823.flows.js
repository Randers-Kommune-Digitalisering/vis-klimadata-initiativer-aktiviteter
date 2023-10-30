const Node = {
  "id": "b4de503d63dc6823",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "68638907faf95219",
  "name": "Fjern specialkarakterer\\n og byg kolonnenavne",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $map(function($value)\t{\t    $keys(column_renaming) @ $key .\t    {\t        column_renaming ~> $lookup($key): $value ~> $lookup($key)\t    }\t    ~> $merge()\t})",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "(\t/* this code removes special characters from the all the keys in the the \"payload\" object */\t   /* define special chars as all non-alphanumeric characters, including \"æøå\", case-insensitive, with a regular expression */\t   $specialchars := /[^a-zæøå0-9]/i;\t   /* Apply the function to all objects in the array */\t   $map(\t       payload,\t       function($value)\t       {\t           /* Create a new object with the keys modified to replace special chars with underscores */\t            $merge(\t                [\t                    $each(\t                       $value,\t                       function($value, $key) {\t                           /* Use object construction syntax to create a new object with the modified key */\t                            {\t                               $replace($key, $specialchars, \"_\"): $value \t                            }\t                        }\t                    )\t                ]\t            )\t        }\t)\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "columnnames",
      "pt": "msg",
      "to": "$keys(payload)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 900,
  "y": 1240,
  "wires": [
    [
      "54bea232f93f8f0b"
    ]
  ],
  "_order": 264
}

module.exports = Node;