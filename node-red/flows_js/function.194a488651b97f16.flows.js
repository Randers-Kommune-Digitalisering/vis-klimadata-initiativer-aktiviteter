const Node = {
  "id": "194a488651b97f16",
  "type": "function",
  "z": "7f3219f0beb025c3",
  "name": "Beregn måneder som \\n data skal hentes fra",
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
  "x": 320,
  "y": 780,
  "wires": [
    [
      "cb8dcbe58c1cd1e6"
    ]
  ],
  "_order": 210
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, dayjs) {
  // Parse millis to dayjs() months
  var dstUpdated = dayjs(msg.dst_updated).month();
  var dbUpdated = dayjs(msg.db_updated).month();
  
  // Calculate months diff
  var months = dstUpdated - dbUpdated;
  
  // Initialize array in correct formats
  var monthArray = [];
  
  // Push each missing month to array in correct format
  for (let i = 1; i <= months; i++)
  {
      var today = dayjs();
      var today_minus_i_months = today.subtract(i, 'month');
  
      var month = today_minus_i_months.format("YYYY-MM");
      month = month.replace("-", "M");
  
      monthArray.push(month);
  }
  
  msg.months = monthArray;
  return msg;
}

module.exports = Node;