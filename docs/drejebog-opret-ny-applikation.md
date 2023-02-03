# :book: Drejebog
### Oprettelse af en ny applikation i prototypes.randers.dk

*Når der ligger fungerende og testet kode klar i et GitHub repository kan applikationen oprettes manuelt.*

### :file_cabinet: Gå til applikationens repository

- Vælg "commits" ![image](https://user-images.githubusercontent.com/80261692/216611622-7b1396d0-3a12-4509-93e4-99dabe35716e.png)
- Identificer hvilket commit-id der skal udrulles på prototypes.
- Kopier commit IDet ⬇️

> https://user-images.githubusercontent.com/80261692/216612590-8b1c0fae-91d0-4146-adad-6eaa4dab86fd.mp4

### :file_cabinet: Gå til [kithosting-randers-kommune-apps](https://github.com/Randers-Kommune-Digitalisering/kithosting-randers-kommune-apps) repositoriet
- Tage en kopi af een af de eksisterenede applikationsmapper
- Indsæt og omdøb den nye mappe til det nye applikationsnavn.
 
### :pen: Tilpas values.yml

- Gå ind i den nye mappe og editer `values.yml`
- Under `repository:` erstattets repository navnet med den nye applikations navn
- Under `tag:` indsættes det kopierede commit id imellem anførselstegnene
```yaml
image:
    repository: ghcr.io/randers-kommune-digitalisering/*******
    tag: "*****"
```

- Den port applikationen skal forwarde indsættes under deployment og readinessprobe

```yaml
deployment:
    containerPort: ****
```

```yaml
readinessProbe:
      httpGet:
        path: /
        port: ****
```
- Tilpas de miljøvariable den nye applikation skal bruge under `enviroment:`

### :pen: Rediger [/apps/values-test-yaml](https://github.com/Randers-Kommune-Digitalisering/kithosting-randers-kommune-apps/blob/test/apps/values-test.yaml)
- En tidligere tilsvarende applikations versions konfiguration kopieres:
```yaml
  *******:
      path: *******
      targetRevision: test
      valueFiles:
        - values.yaml
        - values-test.yaml
```
- Den kopierede konfiguration sættes ind og repository / applikations navne tilrettes.

### :octopus: Log ind i ArgoCD og deploy applikationen til prototypes

- Gå i ArgoCD og tryk *refresh* indtil den nye app dukker op
- Tryk *sync* i ArgoCD
