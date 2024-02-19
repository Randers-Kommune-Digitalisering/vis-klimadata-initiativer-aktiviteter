const Node = {
  "id": "e45a491888de725a",
  "type": "function",
  "z": "d5880abe3145a384",
  "g": "2abe0180ccd5533c",
  "name": "Delete redundant \\n variables from data",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 590,
  "y": 780,
  "wires": [
    [
      "c4771b04d2d55847"
    ]
  ],
  "_order": 431
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    for (let obs=0;obs<msg.data.length;obs++) {
        for (let index = 0; index < msg.redundant.length; index++) {
            var todrop=msg.redundant[index];
            delete msg.data[obs][todrop];
        }
    }
    return msg;
  
}

module.exports = Node;