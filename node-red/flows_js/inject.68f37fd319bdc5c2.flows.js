const Node = {
  "id": "68f37fd319bdc5c2",
  "type": "inject",
  "z": "db9cae581f57fc84",
  "name": "",
  "props": [
    {
      "p": "data",
      "v": "[{\"Fakturadato\":\"02-01-2018\",\"Antal_enheder\":780,\"Fakturaenhed\":\"LTR\",\"UNSPSC\":15101701,\"UNSPSC_navn\":\"Nr. 2 Brændselsolie til opvarmning\"}]",
      "vt": "json"
    },
    {
      "p": "validDateFormats",
      "v": "[\"DD.MM.YYYY\",\"DD-MM-YYYY\",\"DD/MM-YYYY\",\"YYYY.MM.DD\",\"YYYY-MM-DD\"]",
      "vt": "json"
    },
    {
      "p": "outputDateFormat",
      "v": "YYYY-MM-DD",
      "vt": "str"
    },
    {
      "p": "dataskabelon",
      "v": "{\"Fakturadato\":\"DATE\",\"Antal_enheder\":\"FLOAT\",\"Fakturaenhed\":\"VARCHAR(255)\",\"UNSPSC\":\"FLOAT\",\"UNSPSC_navn\":\"VARCHAR(255)\"}",
      "vt": "json"
    }
  ],
  "repeat": "",
  "crontab": "",
  "once": false,
  "onceDelay": 0.1,
  "topic": "",
  "x": 270,
  "y": 900,
  "wires": [
    [
      "fc03246ef667b432"
    ]
  ],
  "_order": 578
}

module.exports = Node;