# Introduction.

Dans ce projet nous devions créer des pipelines CI-CD (continuous integration, continuous deployement).

Durant ce projet de 2 semaines nous avons vu comment utiliser un fichier YML lié à Github Action, Docker ainsi que faire un front afin de pouvoir jouer aux deux jeux présents dans notre projet.


# Prérequis.

Installer git :
```sudo apt install git```

Installer Docker : 

```
# Add Docker's official GPG key:
sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/docker.asc
EOF

sudo apt update
```
Installer les paquets de Docker :
```sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin```

Si tout s'est bien passé, utiliser cette commande : 
```sudo docker run hello-world```, Il devrait s'afficher "Hello from Docker".

# Comment jouer aux jeux.

- Utiliser la commande Git Clone pour cloner le projet.
- Placer vous via votre terminal dans le dossier racine du projet.
- Utiliser la commande ```docker compose up``` afin de lancer les différents conteneurs Docker.
- Aller sur le lien Github pages suivant : https://limbolf.github.io/jeuVideOps/ 
- Vous pouvez jouer aux deux jeux présents sur ce projet. 