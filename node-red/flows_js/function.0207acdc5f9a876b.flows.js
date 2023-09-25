const Node = {
  "id": "0207acdc5f9a876b",
  "type": "function",
  "z": "9cd2fc26979e7dd1",
  "g": "4a217ed33a9fcb99",
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
      "c54ea9b80c5fdba4"
    ]
  ],
  "_order": 335
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