# CREATE PUB GIT WITH CONTENT IN FOLDER
# CREATING MICROSERVICES

# SETUP YOUR : ~/.config/hub.
# github.com:
# - user: xotosphere
#   oauth_token: {}
#   protocol: https

# function baStart() {
# 	CURRENT=$(pwd)
# 	BASENAME=$(basename "$CURRENT")
# 	hub create xotomicro/${BASENAME}
# 	git init
# 	git remote add -f origin git@github.com:xotomicro/${BASENAME}.git
# 	git branch -m development
# 	git add . && git commit -m "🚀 blast off"
# 	echo "creating repo ${BASENAME}"
# 	hub create -d "${BASENAME}"
# 	git push origin development
# }

cd ./xotomicro-frontend/packages/system/hooksystem
CURRENT=$(pwd)
BASENAME=$(basename "$CURRENT")
hub create xotomicro/${BASENAME}
git init
git remote add -f origin git@github.com:xotomicro/${BASENAME}.git
git branch -m development
git add . && git commit -m "🚀 blast off"
echo "creating repo ${BASENAME}"
hub create -d "${BASENAME}"
git push origin development

cd ./xotomicro-frontend/packages/system/shellsystem
CURRENT=$(pwd)
BASENAME=$(basename "$CURRENT")
hub create xotomicro/${BASENAME}
git init
git remote add -f origin git@github.com:xotomicro/${BASENAME}.git
git branch -m development
git add . && git commit -m "🚀 blast off"
echo "creating repo ${BASENAME}"
hub create -d "${BASENAME}"
git push origin development

# cd ./xotomicro-frontend/packages/web/authweb;
#  baStart();

# cd ./xotomicro-frontend/packages/web/eventweb;
#  baStart();

# cd ./xotomicro-frontend/packages/web/orderweb;
#  baStart();

# cd ./xotomicro-frontend/packages/web/productweb;
#  baStart();

# cd ./xotomicro-frontend/packages/web/userweb;
#  baStart();

# cd ./xotomicro-backend/packages/system/shellsystem;
#  baStart();

# cd ./xotomicro-backend/packages/service/authservice;
#  baStart();

# cd ./xotomicro-backend/packages/service/eurekaserver;
#  baStart();

# cd ./xotomicro-backend/packages/service/eventservice;
#  baStart();

# cd ./xotomicro-backend/packages/service/gatewayservice;
#  baStart();

# cd ./xotomicro-backend/packages/service/orderservice;
#  baStart();

# cd ./xotomicro-backend/packages/service/productservice;
#  baStart();

# cd ./xotomicro-backend/packages/service/userservice;
#  baStart();
