const Node = {
  "id": "4e0b98bc09a1a4b7",
  "type": "change",
  "z": "5d9f87f4934f2873",
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
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 240,
  "y": 600,
  "wires": [
    [
      "1817ef0c011528f5"
    ]
  ],
  "_order": 233
}

module.exports = Node;