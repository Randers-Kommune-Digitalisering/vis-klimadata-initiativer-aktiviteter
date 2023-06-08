const Node = {
  "id": "c9ceb3f69f2e739e",
  "type": "change",
  "z": "6b360b454d19172a",
  "g": "bb671390488c23f1",
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
      "be6eba4a03be6a16"
    ]
  ],
  "_order": 276
}

module.exports = Node;