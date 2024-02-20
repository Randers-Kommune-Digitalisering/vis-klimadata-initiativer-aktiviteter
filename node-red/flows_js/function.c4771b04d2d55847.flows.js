const Node = {
  "id": "c4771b04d2d55847",
  "type": "function",
  "z": "d5880abe3145a384",
  "g": "2abe0180ccd5533c",
  "name": "Change DST-dates \\n to ISO-dates \\n eg. 2018M01 => 2018-01-01",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 820,
  "y": 780,
  "wires": [
    [
      "3a514086efa4fc6b"
    ]
  ],
  "_order": 431
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    /* Identify columns with DST date-format */
    var firstRowValues=Object.values(msg.data[0]);
    var keys = Object.keys(msg.data[0]);
    var columnsDSTDate=[];
    for (let i=0;i<firstRowValues.length;i++) {
        if (/^([0-9]{4,4}M{1,1}[0-9]{2,2})$/.test(firstRowValues[i])==true) {
            columnsDSTDate.push(keys[i])
        }
    }
    
    /* Change to ISO-date */
    for (let obs = 0; obs < msg.data.length; obs++) {
        for (let index = 0; index < columnsDSTDate.length; index++) {
            var columnToChange = columnsDSTDate[index]
            msg.columnToChange = columnToChange
            msg.data[obs][columnToChange] = msg.data[obs][columnToChange].replace("M", "-").concat("-01")
            /**/
        }
    }
    return msg;
  
}

module.exports = Node;