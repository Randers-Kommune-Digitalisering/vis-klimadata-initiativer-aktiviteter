const Node = {
  "id": "b4de503d63dc6823",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "68638907faf95219",
  "name": "Fjern specialkarakterer\\n og byg kolonnenavne",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "(\t/* this code removes special characters from the all the keys in the the \"data\" object */\t   /* define special chars as all non-alphanumeric characters, including \"æøå\", case-insensitive, with a regular expression */\t   $specialchars := /[^a-zæøå0-9]/i;\t   /* Apply the function to all objects in the array */\t   $map(\t       data,\t       function($value)\t       {\t           /* Create a new object with the keys modified to replace special chars with underscores */\t            $merge(\t                [\t                    $each(\t                       $value,\t                       function($value, $key) {\t                           /* Use object construction syntax to create a new object with the modified key */\t                            {\t                               $replace($key, $specialchars, \"_\"): $value \t                            }\t                        }\t                    )\t                ]\t            )\t        }\t)\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "columnnames",
      "pt": "msg",
      "to": "$keys(data)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1140,
  "y": 1040,
  "wires": [
    [
      "2db6b45e5b5bc4be"
    ]
  ],
  "_order": 156
}

module.exports = Node;