const Node = {
  "id": "7d4a5af6fbb7cc47",
  "type": "function",
  "z": "4ee111634776501c",
  "name": "tables",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 350,
  "y": 80,
  "wires": [
    [
      "9bc33e596547bfd0",
      "abed0c9ac8660b8d"
    ]
  ],
  "_order": 603
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.tables = [
      "ConsumptionIndustry",
      "eds_FORBRUG",
      "eds_PRODUKTION",
      "os2iot_",
      "os2iot_elsys_sensor_24f7",
      "os2iot_metadata",
      "os2iot_refrigerator_sensor_309c_talkpool",
      "test"
  ];
  msg.length=msg.tables.length;
  return msg;
}

module.exports = Node;