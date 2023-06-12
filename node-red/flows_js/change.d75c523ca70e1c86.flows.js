const Node = {
  "id": "d75c523ca70e1c86",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
  "g": "d28907ebd75f61dc",
  "name": "Fjern special- \\n karakterer \\n i kolonnenavne",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "(\t/* this code removes special characters from the all the keys in the the \"data\" object */\t   /* define special chars as all non-alphanumeric characters, including \"æøå\", case-insensitive, with a regular expression */\t   $specialchars := /[^a-zæøå0-9]/i;\t   /* Apply the function to all objects in the array */\t   $map(\t       data,\t       function($value) {\t           /* Create a new object with the keys modified to replace special chars with underscores */\t           $merge(\t               [\t                   $each(\t                       $value,\t                       function($value, $key) {\t                           /* Use object construction syntax to create a new object with the modified key */\t {\t                               $replace($key, $specialchars, \"_\"): $value \t                       }\t }\t               )\t           ]\t       )\t}\t)\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 197,
  "y": 434,
  "wires": [
    [
      "1a5741c80875dc61"
    ]
  ],
  "_order": 445
}

module.exports = Node;