const Node = {
  "id": "4e0b98bc09a1a4b7",
  "type": "change",
  "z": "7b004c5e11e87f28",
  "g": "0f369eeef0896547",
  "name": "Konfigurerer tabelnavn, \\n retryCount og \\n datatræks periode",
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
      "p": "max_file_age_days",
      "pt": "msg",
      "to": "$max_file_age_days := max_file_age_days ? max_file_age_days : 0 \t/* Sætter værdien til 0 hvis max_file_age_days er NULL eller ikke eksisterer */\t",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "retryCount",
      "pt": "msg",
      "to": "0",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "delay",
      "pt": "msg",
      "to": "0",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 250,
  "y": 100,
  "wires": [
    [
      "1817ef0c011528f5"
    ]
  ],
  "_order": 168
}

module.exports = Node;