const Node = {
  "id": "e313e748ed2589dd",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "92d5ed7235f71cf0",
  "name": "Rens og oversæt kendte datoformater \\n til iso8601",
  "rules": [
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
  "x": 990,
  "y": 320,
  "wires": [
    [
      "fc03246ef667b432"
    ]
  ],
  "_order": 597
}

module.exports = Node;