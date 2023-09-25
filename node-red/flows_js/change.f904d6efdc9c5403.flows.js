const Node = {
  "id": "f904d6efdc9c5403",
  "type": "change",
  "z": "067b777cae534d43",
  "g": "997f4664c676fae7",
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
      "02ce3ed32acfa5c7"
    ]
  ],
  "_order": 203
}

module.exports = Node;