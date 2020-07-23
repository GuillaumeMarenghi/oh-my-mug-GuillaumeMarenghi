# data-o-my-mug

Outil pour gérer une collection de mug.

Utilise :
- nodeJS v14
- Express
- Postgresql
- sqitch
  
## Comment lancer le projet ?

1. Créer votre fichier .env et votre fichier sqitch.conf a la racine du projet en vous basant sur les fichier du même nom en .example

```bash
npm install
sqitch status #pour vérifier que sqitch est bien connecté
sqitch deploy
npm run start
```

