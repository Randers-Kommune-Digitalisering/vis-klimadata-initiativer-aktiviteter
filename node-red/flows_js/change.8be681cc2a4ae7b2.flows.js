const Node = {
  "id": "8be681cc2a4ae7b2",
  "type": "change",
  "z": "14a0d5d3f4f8bbaa",
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
  "x": 830,
  "y": 160,
  "wires": [
    [
      "ac8c9353eec897be",
      "5fcc0f1fd32cd221"
    ]
  ],
  "_order": 539
}

module.exports = Node;