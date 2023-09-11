# SQL Lab i Superset
Formålet med denne guide er at give ne kort introduktion til SQL Lab i Apache Superset samt SQL generelt. 

__Indhold__
* [Brugergrænseflade](#brugergrænseflade)
* [SQL-kommandoer](#sql-kommandoer)
  * [Syntaks](#syntaks)
  * [Datatyper (de vigtigste)](#datatyper-de-vigtigste)
  * [Simple forespørgsler](#simple-forespørgsler)
  * [Operatorer](#operatorer)
    * [Matematiske operatorer](#matematiske-operatorer)
    * [Logiske operatorer](#logiske-operatorer)
  * [Funktioner](#funktioner)
  * [Flere forespørgsler](#flere-forespørgsler)
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

**_Genvejstast:_** 

`[CTRL]`+`[ENTER]` eksekverer forespørgslen. 

Det er muligt at gemme selve forespørgslen ved at trykke 

![billede](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/74da5771-7174-4137-bec3-3431883be264)

Hvis resultatet af forespørgslen skal bruges til visualisering, skal et (virtuelt) datasæt gemmes. Det gøres ved at trykke på pilen til højre for gem og vælge `Save dataset` 

![billede](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/78cb5ac3-471b-4c00-83b6-4ea4c3c99a76)

## SQL-kommandoer

### Syntaks
SQL er ikke case-sensitiv, men der er tradition for at skrive syntaks med stort.

Den eneste SQL-kommando, der kan køres i SQL Lab er `SELECT`. Hvis man forsøger andet, får man fejlbeskeden: 

![billede](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/83f8aaeb-d2a6-413e-b789-8483ec8bb4f0)

### Datatyper (de vigtigste)
|Datatype|Beskrivelse|
|:---|:---|
|_Streng_||
|`VARCHAR`| En streg med et variablet antal tegn. Kan indeholde bogstaver, tal og specialtegn.|
|_Numerisk_||
|`FLOAT`| Et decimaltal med et flydende antal decimaler.|
|`DECIMAL`| Et decimailtal med et eksakt antal decimaler.|
|`INTEGER`| Et heltal fra -2147483648 til 2147483647. |
|`BOOLEAN`| Sand/falsk. Nul betragtes som falsk, mens alle andre tal betragtes som sand.|
|_Dato_||
|`DATE`| Dato på formatet YYYY-MM-DD (År-Måned-Dato).|
|`TIME`| Tidspunkt på formatet hh:mm:ss (time:minuttal:sekund).|
|`DATETIME`| Dato og tidspunkt på formatet YYYY-MM-DD hh:mm:ss.|
|`TIMESTAMP`| Et tidsstempel for formatet YYYY-MM-DD hh:mm:ss opgjort som antal sekunder siden UNIX Epoch ('1970-01-01 00:00:00' UTC). |
|`YEAR`| Årstal på formatet YYYY. |

### Simple forespørgsel
Den mest simple forespørgsel der kan foretages har formen

`SELECT * FROM [tabel]`,

hvor `*` angiver, at alle kolonner fra tabel `[tabel]` ønskes vist. Hvis man blot ønsker en afgrænset mængde kolonner, kan specificeres ved  `[kolonne1, kolonne2, ... ]`, således forespørgslen bliver: 

`SELECT [kolonne11, kolonne12, ... ] FROM [tabel]`

Hvis der kun ønskes én række pr. muligt udfald for en given kolonne, skal `DISTINCT` specificeres foran kolonnenavnet. I dette tilfældes udtrækkes første række for alle mulige udfald af `kolonne11`. 

`SELECT DISTINCT kolonne11, [kolonne12, ... ] FROM [tabel]`. 

En kolonne, tabel eller forespørgsel kan tilknyttes et alias. 

---
**_Eksempel:_**

Det simpelt `SELECT * FROM dst_AREALDK` giver:

![image](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/d928b9f0-ef31-4735-ba90-18765a3401c6)

Hvis et tabel med forskellige arealtyper ønskes, da det findes ved:

`SELECT DISTINCT Arealtype FROM dst_AREALDK`

![image](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/0cda6d92-8922-4c19-aa42-b3f7790a13d6)

---


`AS`

`WHERE`

`LIMIT`

`ORDER BY [variabel1, variabel2, ... ] [ASC]|DESC`

`CASE`

`GROUP BY`

### Operatorer 
#### Matematiske operatorer
`+`, `-`, `*`, `/`, `%`
#### Logiske operatorer 
`AND`, `OR`, `NOT`

### Funktioner
`COUNT()`

`SUM()`

`AVG()`

`CONCAT()`

`LEFT()`

`RIGHT()`

`CAST()`

### Flere forespørgsler

### Common Table Expressions (CTE)
`WITH`

### Fletning
`INNER JOIN`
`LEFT JOIN`
`RIGHT JOIN`
`FULL OUTER JOIN`

`ON`








## Tips og tricks


## Gode ressourcer
* [w3schools.com/sql](https://www.w3schools.com/sql/default.asp)
