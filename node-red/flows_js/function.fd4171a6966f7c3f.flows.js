const Node = {
  "id": "fd4171a6966f7c3f",
  "type": "function",
  "z": "b211627962aab2cb",
  "g": "f16189186b28255c",
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
  "y": 640,
  "wires": [
    [
      "4801bc788048bf31"
    ]
  ],
  "_order": 283
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, dayjs) {
  // Get latest month from dataset
  var dayobj = dayjs(msg.payload[0].latest_month);
  
  // Add 1 month for new startdate
  dayobj = dayobj.add(1, "month");
  
  // Return in desired format
  msg.startdato = dayobj.format("YYYY-MM-DD");
  return msg;
}

module.exports = Node;