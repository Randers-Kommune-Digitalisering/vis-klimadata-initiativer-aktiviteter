# SQL Lab i Superset
Formålet med denne guide er at give ne kort introduktion til SQL Lab i Apache Superset samt SQL generelt. 

__Indhold__
* [Brugergrænseflade](#brugergrænseflade)
* [SQL-kommandoer](#sql-kommandoer)
  * [Syntaks](#syntaks)
  * [Datatyper (de vigtigste)](#datatyper-de-vigtigste)
  * [Simple forespørgsler](#simple-forespørgsler)
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

I højre side af billedet vises øvers selve SQL-editoren og nederst resultatet af ens forespørgsler. En forespørgsel eksekveres ved at trykke

![image](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/27d4a680-ad00-4eb8-bbd3-79a23648dcd4)

**_Genvejstast:_** `[CTRL]`+`[ENTER]` er en genvejstast til at eksekvere forespørgslen. 

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

### Simple forespørgsler
Den mest simple forespørgsel der kan foretages har formen

`SELECT * FROM [tabel]`,

hvor `*` angiver, at alle kolonner fra tabel `[tabel]` ønskes vist. Hvis man blot ønsker en afgrænset mængde kolonner, kan specificeres ved  `[kolonne1, kolonne2, ... ]`, således forespørgslen bliver: 

`SELECT [kolonne11, kolonne12, ... ] FROM [tabel]`

Hvis der kun ønskes én række pr. muligt udfald for en given kolonne, skal `DISTINCT` specificeres foran kolonnenavnet. I dette tilfældes udtrækkes første række for alle mulige udfald af `kolonne11`. 

`SELECT DISTINCT kolonne11, [kolonne12, ... ] FROM [tabel]`. 

---
**_Eksempel:_** Simpelt udtræk

Det simpelt `SELECT * FROM dst_AREALDK` giver:

![image](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/d928b9f0-ef31-4735-ba90-18765a3401c6)

Hvis et tabel med forskellige arealtyper ønskes, da det findes ved:

`SELECT DISTINCT Arealtype FROM dst_AREALDK`

![image](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/0cda6d92-8922-4c19-aa42-b3f7790a13d6)

---

En kolonne, tabel eller forespørgsel kan tilknyttes et alias. For en kolonnes vedkomne svarer det til at omdøbe kolonneoverskriften. Det gøres ved:  

`AS`

Det er desuden muligt at sortere et udtræk ved en eller flere kolonner ved at specifcere 

`ORDER BY [variabel1, variabel2, ... ] [ASC]|DESC`

`[ASC]` (ascending/stigende) er default og behøves ikke specificeres, mens `DESC` (descending/faldende) skal specificeres hvis det ønskes. 

Hvis det begrænset antal rækkes ønsket udtrukket, kan forespørgsmålet tilføjes en øvre grænse med 

`LIMIT`

Bemærk at SQL Lab i frontend automatisk begrænser antallet af udtrukne rækker til 1000:

![image](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/8202529f-e64f-48fb-ba37-6e026ecede2a)

---
**_Eksempel:_** Afgrænset udtræk

Udtræk de to rækker med størst areal (uafhængigh af type) og omdøb kolonnen til "areal"

`SELECT Areal_km2 AS areal FROM dst_AREALDK ORDER BY areal_km2 DESC LIMIT 2`

![image](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/da215dc1-3c9c-48dd-ac07-60dd063d98a6)



Ofte er det nødvendigt at afgrænse forespørgslen på baggrund af forskellige kolonneværdier. Her anvedes 

`WHERE`

sammen med diverse [operatorer](https://www.w3schools.com/sql/sql_operators.asp). 

---
**_Eksempel:_** Forskellige brug af `WHERE`

`SELECT Arealtype, Areal_km2 FROM dst_AREALDK WHERE Arealtype = "Enge, moser og anden våd natur"`

![image](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/ea7dc2e8-e534-4f6d-a303-a801cdfa8494)

`SELECT Arealtype, Areal_km2 FROM dst_AREALDK WHERE Arealtype <> "Enge, moser og anden våd natur"`

![image](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/b48224e4-6b14-4498-b703-55c84e47ea54)

`SELECT Måned, Arealtype, Areal_km2 FROM dst_AREALDK WHERE måned>"2017-01-01"`

![image](https://github.com/Randers-Kommune-Digitalisering/vis-klimadata-initiativer-aktiviteter/assets/122357806/135c800c-ba89-4c8f-a8d5-f6bba18884cf)

---

### Funktioner
`CAST()`

`COUNT()`

`SUM()`

`AVG()`

`CONCAT()`

`LEFT()`

`RIGHT()`



### Flere forespørgsler

`CASE`

`GROUP BY`


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
