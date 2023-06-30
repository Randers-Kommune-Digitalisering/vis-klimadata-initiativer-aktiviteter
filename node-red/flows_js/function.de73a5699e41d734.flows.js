const Node = {
  "id": "de73a5699e41d734",
  "type": "function",
  "z": "7f3219f0beb025c3",
  "g": "68a49c0bcc64ea66",
  "name": "Set db_updated",
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
  "x": 900,
  "y": 520,
  "wires": [
    [
      "f38533d1c82aaf84"
    ]
  ],
  "_order": 208
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, dayjs) {
  // Check if data exists
  if(msg.payload[0] == null)
  {
      msg.db_updated = 0;
      return msg;
  }
  
  // Parse last_updated
  var db_updated = dayjs(msg.payload[0].last_updated);
  
  // Format as millis
  db_updated = db_updated.valueOf();
  
  msg.db_updated = db_updated;
  return msg;
}

module.exports = Node;