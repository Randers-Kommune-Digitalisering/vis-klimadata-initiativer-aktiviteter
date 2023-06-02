const Node = {
  "id": "d5b0b2e741a0a32d",
  "type": "subflow:7b004c5e11e87f28",
  "z": "452aaf8dc5cd8d45",
  "name": "OpenData.dk Connector",
  "x": 770,
  "y": 120,
  "wires": [
    [
      "d2c872ed74b20148"
    ],
    [
      "0e5b1d5fd355f789"
    ]
  ],
  "info": "",
  "_order": 197
}

Node.info = `
# Generisk connector til OpenData.dk

Connectoren forbinder til alle datasæt der ligger under opendata.dk/randers-kommune/

Der kræves kun 2 inputs.

 1. msg.dataset - datasættets navn 

 2. msg.data_age_days - hvor mange dage bagud i tid skal der hentes data fra
    Der kigges på metadata "created" for datafiler.
    Default er 0, d.v.s. 
`

module.exports = Node;