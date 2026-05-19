# mon-premier-service

Mon premier service DxP (Lite)

## Stack
- Langage : nodejs
- CI/CD : Tekton → Harbor → ArgoCD
- Plateforme : DxP

## Démarrage rapide
```bash
# Cloner le repo
git clone <repo-url>
cd mon-premier-service

# Lancer en local
docker build -t mon-premier-service .
docker run -p 8080:8080 mon-premier-service
```
