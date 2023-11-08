const Node = {
  "id": "2c6891898da04502",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "19c2db021d7d414f",
  "name": "Byg data streng",
  "rules": [
    {
      "t": "set",
      "p": "datastring",
      "pt": "msg",
      "to": "data ~> $map(function($value)\t{\t    \"(\" & (\t\t    columnnames\t    ~> $map ( function($key)\t    {\t\t        $value ~> $lookup($key) ~> $exists() ? \t        (\t            ($flowContext(\"flatlist\")[name = $key].type) = \"FLOAT\" ?\t                           $value ~> $lookup($key)\t                :\t                    \"'\" & ($value ~> $lookup($key)) & \"'\"\t        )\t        :\t            \"null\"\t\t    } ~> $string )\t      ~> $join(\",\")\t\t    ) & \")\"\t} )\t\t~> $join(\",\")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 200,
  "y": 2880,
  "wires": [
    [
      "0afd87195161da67"
    ]
  ],
  "info": "",
  "_order": 452
}

Node.info = `
# Byg af datatreng og kolonnenavne til INSERT query

### JSONata udtrykket der anvendes på msg.data
Dette JSONata udtryk genererer en kommasepareret streng i 'msg.datastring' indeholdende værdierne i det angivne objekt
og omslutter strengværdierne i anførselstegn.
`

module.exports = Node;