# data-o-my-mug

Outil pour gérer une collection de mug.

Thecnologies utilisées:
- nodeJS v14
- Express
- Postgresql
- sqitch
  
## Comment lancer le projet ?

*Attention pour lancer le projet sur votre machine vous devez avoir intallé [la version 14 de NodeJS](https://nodejs.org/en/) une [Base de donnés PostgreSQL](https://www.postgresql.org/docs/9.3/tutorial-install.html) et [Sqitch](https://sqitch.org/).*

1. Créer un fichier .env et un fichier sqitch.conf a la racine du projet en vous basant sur les fichiers .example du même nom.

2. Créer la Database mug dans psql comme ceci

```bash
sudo -i -u postgres # devenir l'utilisateur linux postgresql
psql #se connecter a postgresql
CREATE ROLE mug WITH LOGIN ENCRYPTED PASSWORD 'password'; # créer le role mug propriétaire de notre bdd
CREATE DATABASE mug OWNER mug; #créer notre bdd

```

3. Dans un terminal a la racine du projet effectuer une à une les commandes suivantes

```bash
npm install
sqitch status #pour vérifier que sqitch est bien connecté
sqitch deploy
npm run start
```

