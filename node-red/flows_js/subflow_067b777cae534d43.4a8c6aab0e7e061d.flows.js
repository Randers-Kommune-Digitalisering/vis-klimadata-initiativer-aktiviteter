const Node = {
  "id": "4a8c6aab0e7e061d",
  "type": "subflow:067b777cae534d43",
  "z": "14a0d5d3f4f8bbaa",
  "g": "c0ab4cb3eb4c482a",
  "name": "OpenData.dk Connector",
  "x": 630,
  "y": 300,
  "wires": [
    [
      "87398a78934e9cc7"
    ],
    [
      "8be681cc2a4ae7b2"
    ],
    [
      "c8b7e9e70d2bcf14"
    ]
  ],
  "info": "",
  "_order": 449
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