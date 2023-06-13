const Node = {
  "id": "73df4bb1c3f715df",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "bf3a5d37f980d010",
  "name": "Fjern specialkarakterer i kolonnenavne",
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
  "x": 1010,
  "y": 360,
  "wires": [
    [
      "400784d46720a617"
    ]
  ],
  "_order": 343
}

module.exports = Node;