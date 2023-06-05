const Node = {
  "id": "6a5e831da5abdd74",
  "type": "subflow:f15ef1d8b0c08ad3",
  "z": "452aaf8dc5cd8d45",
  "g": "aedcfef7c781f318",
  "name": "OpenData.dk Connector",
  "x": 610,
  "y": 240,
  "wires": [
    [
      "629fadbe2ccd3132"
    ],
    [
      "e70a1104df57dfc9"
    ],
    [
      "6d6145a3b97ad273"
    ]
  ],
  "info": "",
  "_order": 259
}

Node.info = `
# Generisk connector til OpenData.dk

Connectoren forbinder til alle datasæt der ligger under opendata.dk/randers-kommune/

Der kræves kun 2 inputs.

 1. msg.dataset - datasættets navn 

 2. msg.max_file_age_days - hvor mange dage bagud i tid skal der hentes data fra
    Der kigges på metadata "created" for datafiler.
    Default er 0
`

module.exports = Node;