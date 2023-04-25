const Node = {
  "id": "bae7dd126b39e4a3",
  "type": "change",
  "z": "8571dcc8e1e9c903",
  "g": "c48edeb2197fb965",
  "name": "Skab dataobjekt og \\n fjern overflødige datafelter",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "{\t   \"Month\" : payload.Month,\t   \"Onshore_Windpower_MWh\": payload.OnshoreWindPower,\t   \"Solar_Power_MVh\": payload.SolarPower\t}\t",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 410,
  "y": 620,
  "wires": [
    [
      "fc9b6e0147d4efe1"
    ]
  ],
  "_order": 179
}

module.exports = Node;