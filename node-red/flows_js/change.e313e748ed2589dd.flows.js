const Node = {
  "id": "e313e748ed2589dd",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "92d5ed7235f71cf0",
  "name": "Bestem valid + output \\n datoformatering",
  "rules": [
    {
      "t": "set",
      "p": "validDateFormats",
      "pt": "msg",
      "to": "[\"DD.MM.YYYY\",\"DD-MM-YYYY\",\"DD/MM-YYYY\",\"YYYY.MM.DD\",\"YYYY-MM-DD\"]",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "outputDateFormat",
      "pt": "msg",
      "to": "YYYY-MM-DD",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 220,
  "y": 2680,
  "wires": [
    [
      "fc03246ef667b432"
    ]
  ],
  "_order": 363
}

module.exports = Node;