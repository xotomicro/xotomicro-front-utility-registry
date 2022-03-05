# CREATE PUB GIT WITH CONTENT IN FOLDER
# CREATING MICROSERVICES

# SETUP YOUR : ~/.config/hub.
# github.com:
# - user: xotosphere
#   oauth_token: {}
#   protocol: https

function baStart() {
	# CURRENT=$(pwd)
	# BASENAME=$(basename "$CURRENT")
	hub create xotomicro/$1
	git init
	git remote add -f origin git@github.com:xotomicro/$1.git
	git branch -m development
	git add . && git commit -m "🚀 blast off"
	echo "creating repo $1"
	hub create -d "$1"
	git push origin development
}

cd /xotomicro-frontend/packages/system/hooksystem
baStart hooksystem

cd /xotomicro-frontend/packages/system/shellsystem
baStart shellsystem

# cd xotomicro-frontend/packages/web/authweb
# baStart

# cd xotomicro-frontend/packages/web/eventweb
# baStart

# cd xotomicro-frontend/packages/web/orderweb
# baStart

# cd xotomicro-frontend/packages/web/productweb
# baStart

# cd xotomicro-frontend/packages/web/userweb
# baStart

# cd xotomicro-backend/packages/system/shellsystem
# baStart

# cd xotomicro-backend/packages/service/authservice
# baStart

# cd xotomicro-backend/packages/service/eurekaserver
# baStart

# cd xotomicro-backend/packages/service/eventservice
# baStart

# cd xotomicro-backend/packages/service/gatewayservice
# baStart

# cd xotomicro-backend/packages/service/orderservice
# baStart

# cd xotomicro-backend/packages/service/productservice
# baStart

# cd xotomicro-backend/packages/service/userservice
# baStart
