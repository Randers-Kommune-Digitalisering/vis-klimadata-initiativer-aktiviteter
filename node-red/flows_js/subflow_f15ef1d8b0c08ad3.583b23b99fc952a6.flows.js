const Node = {
  "id": "583b23b99fc952a6",
  "type": "subflow:f15ef1d8b0c08ad3",
  "z": "db9cae581f57fc84",
  "g": "1a50bda2b70bfd0b",
  "name": "OpenData.dk Connector",
  "x": 646,
  "y": 268,
  "wires": [
    [
      "a6d32bfaf1b33a99"
    ],
    [
      "78f61040734e61af"
    ],
    [
      "ac75fe745dfd96de"
    ]
  ],
  "info": "",
  "_order": 553
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