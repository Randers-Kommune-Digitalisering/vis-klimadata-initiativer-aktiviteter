const Node = {
  "id": "878290139df436cb",
  "type": "change",
  "z": "7b004c5e11e87f28",
  "g": "9fc7aa784e8175c5",
  "name": "Konfigurerer tabelnavn \\n og datatræks periode",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "flow",
      "to": "\"opendata\" & \"_\" & dataset",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "data_age_days",
      "pt": "msg",
      "to": "$data_age_days := data_age_days ? data_age_days : 0 \t/* Sætter værdien til 0 hvis data_age_days er NULL eller ikke eksisterer */\t",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 240,
  "y": 100,
  "wires": [
    [
      "e32ebb307f800fb4"
    ]
  ],
  "_order": 106
}

module.exports = Node;