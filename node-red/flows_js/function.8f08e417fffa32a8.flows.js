const Node = {
  "id": "8f08e417fffa32a8",
  "type": "function",
  "z": "8571dcc8e1e9c903",
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
  "x": 1100,
  "y": 760,
  "wires": [
    []
  ],
  "_order": 238
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, dayjs) {
  
  
  var dayobj = dayjs(msg.payload[0].latest_month);
  msg.startdato = dayobj.format("YYYY-MM");
  
  return msg;
}

module.exports = Node;