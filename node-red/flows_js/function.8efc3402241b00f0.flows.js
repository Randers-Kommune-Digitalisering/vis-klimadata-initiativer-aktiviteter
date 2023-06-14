const Node = {
  "id": "8efc3402241b00f0",
  "type": "function",
  "z": "8571dcc8e1e9c903",
  "name": "function 1",
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
  "x": 1580,
  "y": 600,
  "wires": [
    [
      "8866a0c60826b0f8"
    ]
  ],
  "_order": 221
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, dayjs) {
  var dayobj = dayjs(msg.payload[0].latest_month);
  dayobj = dayobj.add(1, "month");
  
  msg.dayjs = dayobj;
  
  
  return msg;
}

module.exports = Node;