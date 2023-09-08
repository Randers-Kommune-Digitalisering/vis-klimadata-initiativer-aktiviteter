# SQL Lab i Superset
Formålet med denne guide er at give ne kort introduktion til SQL Lab i Apache Superset samt SQL generelt. 

__Indhold__
* [Brugergrænseflade](#brugergrænseflade)
* [SQL-kommandoer](#sql-kommandoer)
  * [Syntaks](#syntaks)
  * [Datatyper (de vigtigste)](#datatyper-de-vigtigste)
  * [Operatorer](#operatorer)
    * [Matematiske operatorer](#matematiske-operatorer)
    * [Logiske operatorer](#logiske-operatorer)
  * [Common Table Expressions (CTE)](#common-table-expressions-cte)
  * [Fletning](#fletning)
  * [Funktioner](#funktioner)
* [Tips og tricks](#tips-og-tricks)
* [Gode ressourcer](#gode-ressourcer)

## Brugergrænseflade
I topmenuen vælges `SQL => SQL Lab` hvorved følgende side vises:

<img src="https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/9e66be79-b07f-4634-9dce-58b5573c06fa" alt="drawing" width="600"/></img>

I venstre del af siden vælges Database, Schema (databaseområde) og Table schema (datatabel). Vælges eksempelvis `MariaDB Klima`, `klima` og `DST_bil54` produceres en liste med alle kolonner/tabellen samt i tabellen `DST_bil54` og deres [datatype](#datatyper-de-vigtigste). 

![billede](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/c42633ad-ba71-4937-a3c0-f22ada94a463)

I højre side af billedet vises øvers selve SQL-editoren og nederst resultatet af ens forespørgsler. 

Det er muligt at gemme selve forespørgslen ved at trykke 

![billede](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/74da5771-7174-4137-bec3-3431883be264)

Hvis resultatet af forespørgslen skal bruges til visualisering, skal et (virtuelt) datasæt gemmes. Det gøres ved at trykke på pilen til højre for gem og vælge `Save dataset` 

![billede](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/78cb5ac3-471b-4c00-83b6-4ea4c3c99a76)

## SQL-kommandoer

### Syntaks

### Datatyper (de vigtigste)
`VARCHAR`
`FLOAT`
`DECIMAL`
`INTEGER`
`BOOLEAN`
`DATE`
`TIME`
`DATETIME`
`TIMESTAMP`
`YEAR`


Den eneste SQL-kommando, der kan køres i SQL Lab er `SELECT`. Hvis man forsøger andet, får man fejlbeskeden: 

![billede](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/83f8aaeb-d2a6-413e-b789-8483ec8bb4f0)

`SELECT * FROM [tabel]`

`*`, `[variabel1, variabel2, ... ]`

`SELECT DISTINCT`

`AS`

`WHERE`

`LIMIT`

`ORDER BY [variabel1, variabel2, ... ] [ASC]|DESC`

`CASE`

### Operatorer
#### Matematiske operatorer
`+`, `-`, `*`, `/`, `%`
#### Logiske operatorer 
`AND`, `OR`, `NOT`

### Common Table Expressions (CTE)
`WITH`

### Fletning
`INNER JOIN`
`LEFT JOIN`
`RIGHT JOIN`
`FULL OUTER JOIN`

`ON`


### Funktioner
`COUNT()`

`SUM()`

`AVG()`

`CONCAT()`

`LEFT()`

`RIGHT()`

`CAST()`





## Tips og tricks


## Gode ressourcer
* [w3schools.com/sql](https://www.w3schools.com/sql/default.asp)
