const Node = {
  "id": "ac75fe745dfd96de",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "92d5ed7235f71cf0",
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
  "x": 990,
  "y": 260,
  "wires": [
    [
      "d137d1f7aad720ca"
    ]
  ],
  "_order": 558
}

module.exports = Node;