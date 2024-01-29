const Node = {
  "id": "3a514086efa4fc6b",
  "type": "function",
  "z": "d5880abe3145a384",
  "g": "2abe0180ccd5533c",
  "name": "Change decimal \\n indicator ",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1040,
  "y": 780,
  "wires": [
    [
      "6e054ca0f1ed231a",
      "f16ddb4b75ac438c"
    ]
  ],
  "_order": 445
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  /* Identify columns with DST date-format */
  var firstRowValues = Object.values(msg.data[0]);
  var keys = Object.keys(msg.data[0]);
  var columnsDecimalWithComma = [];
  for (let i = 0; i < firstRowValues.length; i++) {
      if (/^([0-9]+)(,|\.){1}([0-9]+)$/.test(firstRowValues[i]) == true) {
          columnsDecimalWithComma.push(keys[i])
      }
  }
  
  /* Change to ISO-date */
  for (let obs = 0; obs < msg.data.length; obs++) {
      for (let index = 0; index < columnsDecimalWithComma.length; index++) {
          var columnToChange = columnsDecimalWithComma[index]
          msg.columnToChange = columnToChange
          msg.data[obs][columnToChange] = msg.data[obs][columnToChange].replace(",", ".")
          /**/
      }
  }
  return msg;
}

module.exports = Node;