const Node = {
  "id": "36a828017042c198",
  "type": "tab",
  "label": "AREALDK api.statbank.dk",
  "disabled": false,
  "info": "",
  "env": [],
  "_order": 1
}

Node.info = `
# Danmarks areal
### Statistikken viser Danmarks areal fordelt efter kommuner og regioner, opgjort pr. 1. januar. 
Fra 2011 er opgørelsen baseret på data fra Geodatastyrelsens matrikelregister.
Kun matrikulerede områder er medtaget ved opmålingen, hvilket medfører, at mange søer ikke er medtaget. '
For kommuner med umatrikulerede søer vil arealet derfor være faldet sammenlignet med tidligere. Pr. 1. januar 2011-2013 gælder yderligere for København og Frederiksberg, at vejene ikke er matrikuleret og derfor ikke indgår i det opmålte areal.

https://www.dst.dk/da/Statistik/dokumentation/statistikdokumentation/arealregnskab/indhold
`

module.exports = Node;