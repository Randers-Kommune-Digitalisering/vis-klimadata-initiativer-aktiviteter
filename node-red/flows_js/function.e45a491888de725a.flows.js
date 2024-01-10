const Node = {
  "id": "e45a491888de725a",
  "type": "function",
  "z": "d5880abe3145a384",
  "name": "Delete redundant data from payload",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 400,
  "y": 680,
  "wires": [
    [
      "f9534bc27208fc3e"
    ]
  ],
  "_order": 426
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  for (let index = 0; index < msg.redundant.length; index++) {
      const redundant=msg.redundant[index];
      delete msg.data.redundant;
  }
  return msg;
}

module.exports = Node;