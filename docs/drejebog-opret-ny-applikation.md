# :book: Drejebog
### Oprettelse af en ny applikation i prototypes.randers.dk

*Når der ligger fungerende og testet kode klar i et GitHub repository kan applikationen oprettes manuelt.*

- Gå til applikationens repository, vælg "commits" ![image](https://user-images.githubusercontent.com/80261692/216611622-7b1396d0-3a12-4509-93e4-99dabe35716e.png)
- Identificer hvilket commit-id der skal udrulles på prototypes.
- Kopier commit IDet ⬇️

> https://user-images.githubusercontent.com/80261692/216612590-8b1c0fae-91d0-4146-adad-6eaa4dab86fd.mp4

- Opret applikationen i https://github.com/Randers-Kommune-Digitalisering/kithosting-randers-kommune-apps ved at tage en kopi af en eksisterenede applikationsmappe og omdøbe den til applikationsnavnet

- Under denne nye mappe tilpasse values.yml
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

