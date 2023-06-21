const Node = {
  "id": "5237b57314ead347",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "name": "Opsætning af forespørgsel ↓ \\n Metadata for tabel",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "https://api.statbank.dk/v1/tableinfo",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "POST",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{ \"table\": dst_tablename }",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 340,
  "y": 520,
  "wires": [
    [
      "395ef8c34d3115fe"
    ]
  ],
  "_order": 175
}

module.exports = Node;