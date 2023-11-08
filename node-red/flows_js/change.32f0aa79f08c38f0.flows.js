const Node = {
  "id": "32f0aa79f08c38f0",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "5ae5c599163db6e5",
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
  "x": 970,
  "y": 1540,
  "wires": [
    [
      "06abc1a9c8c87145"
    ]
  ],
  "_order": 420
}

module.exports = Node;