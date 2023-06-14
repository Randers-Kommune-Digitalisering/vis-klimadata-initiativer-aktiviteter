const Node = {
  "id": "60f63e3a5c85b719",
  "type": "function",
  "z": "8571dcc8e1e9c903",
  "g": "26dd9724b7750974",
  "name": "Sæt startdato",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "dayjs",
      "module": "dayjs"
    }
  ],
  "x": 1060,
  "y": 400,
  "wires": [
    [
      "71fc6f4bc4f9607a"
    ]
  ],
  "_order": 224
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, dayjs) {
  var dayobj = dayjs(msg.payload[0].latest_month);
  
  msg.startdato = dayobj.format("YYYY-MM");
  
  return msg;
}

module.exports = Node;