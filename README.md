# 🌍 Monitorering af klimadata

| [**Beskrivelse**](#beskrivelse) | [**Afhængigheder**](#afh%C3%A6ngigheder) | [**Ressourcer**](#Ressourcer)

```mermaid

flowchart LR

subgraph Datakilder
        direction LR
        ODDKAPI(OpenDataDK API)
        DSTAPI(Danmarks Statistik API)
        EDDK(Energidataservice API)
end

subgraph Datafordeler
        subgraph node-red
                datakilde-forbindelse---
                RM(datavask- og regel-motor)---
                DM(datamapper og database-forbindelse)
        end
end

subgraph Datalake
direction LR
DB1[(Køretøjsdata)]
DB2[(Arealdata)]
DB3[(Energidata)]
end


subgraph Præsentationslag
        subgraph apache-superset
        dash(Klimamonitor \n dashboard)
        end
end

Datakilder--->datakilde-forbindelse 
DM--->Datalake<-->Præsentationslag
    
```
### Beskrivelse

Klima monitoren er 

- Lavfrekvent data hentes....
- Højfrekvent... 

### Afhængigheder
Løsningen er afhængig af en række software komponenter og en række netværksadgange til eksterne ressourcer for at fungere.

Krav til installerede software pakker 

:gear: | [Apache SuperSet 2.0]()  |  [Node-RED 3.0.2](https://nodered.org/docs/getting-started/windows)  | 

Krav til netværksadgange til datakilder

:cloud: | https://api.statbank.dk |  

Krav til adgangsgivende information og anvendte miljøvarible

Krav til anvendelse af miljøvariable:

:heavy_dollar_sign: | DB_USER | DB_PASS | DB_HOST | DB_DATABASE |
