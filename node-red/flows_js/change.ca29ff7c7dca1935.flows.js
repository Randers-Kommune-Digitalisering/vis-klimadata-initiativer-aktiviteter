const Node = {
  "id": "ca29ff7c7dca1935",
  "type": "change",
  "z": "f15ef1d8b0c08ad3",
  "g": "acc1c82d640f13f3",
  "name": "Konfigurerer datatræks periode",
  "rules": [
    {
      "t": "set",
      "p": "max_file_age_days",
      "pt": "msg",
      "to": "$max_file_age_days := max_file_age_days ? max_file_age_days : 0 \t/* Sætter værdien til 0 hvis max_file_age_days er NULL eller ikke eksisterer */\t",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "delay",
      "pt": "msg",
      "to": "0",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 270,
  "y": 100,
  "wires": [
    [
      "24fba0b7beae16a9"
    ]
  ],
  "_order": 234
}

module.exports = Node;