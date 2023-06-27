const Node = {
  "id": "0f7b6e7e23598f29",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "8978c7606345d52b",
  "name": "Skab dataskabelon \\n + sæt validDateFormats",
  "rules": [
    {
      "t": "set",
      "p": "dataskabelon",
      "pt": "msg",
      "to": "data[0]",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "validDateFormats",
      "pt": "msg",
      "to": "[\"DD.MM.YYYY\",\"DD-MM-YYYY\",\"DD/MM-YYYY\",\"YYYY.MM.DD\",\"YYYY-MM-DD\"]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 470,
  "y": 1400,
  "wires": [
    [
      "8c4bc353c4de6e4e"
    ]
  ],
  "_order": 325
}

module.exports = Node;