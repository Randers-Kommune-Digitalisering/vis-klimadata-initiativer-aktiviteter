const Node = {
  "id": "dc46455e44341f37",
  "type": "change",
  "z": "c0f39fa937e7d6f9",
  "name": "dataset \\n vomgasser-fra-dyrehold",
  "rules": [
    {
      "t": "set",
      "p": "dataset",
      "pt": "msg",
      "to": "vomgasser-fra-dyrehold",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "sql-query",
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
  "x": 270,
  "y": 100,
  "wires": [
    [
      "b363d8b7715ef1ae"
    ]
  ],
  "_order": 470
}

module.exports = Node;