const Node = {
  "id": "67411e9c7afcae52",
  "type": "change",
  "z": "39591030e2e9860e",
  "g": "789f8d87a0aa7671",
  "name": "opendata_vomgasser-fra-dyrehold",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "opendata_vomgasser-fra-dyrehold",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "with cte_baseline as    (select      vomgasser_CH4 as vomgasser_CH4_2018,     vomgasser_CO2e as vomgasser_CO2e_2018      from opendata_vomgasser_fra_dyrehold      where aarstal=2018   )  SELECT      last_day(makedate(aarstal,365)) as aarstal,      vomgasser_CH4 as vomgasser_CH4,      vomgasser_CH4_2018 as vomgasser_CH4_2018,      vomgasser_CH4-vomgasser_CH4_2018 as d_vomgasser_CH4,     (vomgasser_CH4-vomgasser_CH4_2018)/vomgasser_CH4_2018 as dp_vomgasser_CH4,     vomgasser_CO2e,      vomgasser_CO2e_2018,      vomgasser_CO2e-vomgasser_CO2e_2018 as d_vomgasser_CO2e,     (vomgasser_CO2e-vomgasser_CO2e_2018)/vomgasser_CO2e_2018 as dp_vomgasser_CO2e   from opendata_vomgasser_fra_dyrehold cross join    cte_baseline",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1530,
  "y": 60,
  "wires": [
    [
      "827f5643878e0def"
    ]
  ],
  "_order": 644
}

module.exports = Node;