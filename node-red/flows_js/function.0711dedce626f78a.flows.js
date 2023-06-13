const Node = {
  "id": "0711dedce626f78a",
  "type": "function",
  "z": "9cd2fc26979e7dd1",
  "name": "function 2",
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
      "b642c354234fc501"
    ]
  ],
  "_order": 250
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, dayjs) {
  var dayobj = dayjs(msg.payload[0].latest_month);
  dayobj = dayobj.add(1, "month");
  
  msg.dayjs = dayobj;
  
  
  return msg;
}

module.exports = Node;