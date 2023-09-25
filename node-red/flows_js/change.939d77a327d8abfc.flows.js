const Node = {
  "id": "939d77a327d8abfc",
  "type": "change",
  "z": "aad50484a0b40b44",
  "name": "Fjern specialkarakterer fra \\n tabelnavne for data",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data ~> | $ | {\t    \"tablename\": \"os2iot_\" & id ~> $replace(\"-\", \"_\")\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 830,
  "y": 540,
  "wires": [
    [
      "ce76806c8311fa4b"
    ]
  ],
  "_order": 501
}

module.exports = Node;