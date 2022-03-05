# CREATE PUB GIT WITH CONTENT IN FOLDER
# CREATING MICROSERVICES

# SETUP YOUR : ~/.config/hub.
# github.com:
# - user: xotosphere
#   oauth_token: {}
#   protocol: https

# CREATE GIT REPO
function serviceRepoCreate() {
	CURRENT=$(pwd)
	BASENAME=$(basename "$CURRENT")
	hub create xotomicro/${BASENAME}
	git init
	git remote add origin git@github.com:xotomicro/${BASENAME}.git
	git branch -m development
	git add . && git commit -m "🚀 blast off"
	echo "creating repo ${BASENAME}"
	hub create -d "${BASENAME}"
	git push origin development
}

# UPDATE ALL GIT REPOS
function monoRepoUpdate() {
	CUR_DIR=$(pwd)
	echo "Updating all repositories..."
	echo ""
	for i in $(find . -name ".git" | cut -c 3-); do
		echo ""
		echo "######################################"
		echo ""
		echo "$i"
		echo "--------------->"
		echo ""
		cd "$i"
		cd ..
		git add . && git commit -m "latest edit: gitu.all -> update"
		git push -u origin master
		cd "$CUR_DIR"
	done
	echo ""
	echo ""
	echo "Updating Complete! 🥞"
}

# PULLING FROM GIT
function monoRepoPull() {
	CUR_DIR=$(pwd)
	echo "Pulling in latest changes for all repositories..."
	for i in $(find . -name ".git" | cut -c 3-); do
		echo ""
		echo "$i"
		cd "$i"
		cd ..
		git pull origin master
		cd "$CUR_DIR"
	done
	echo "Complete!"
}

$1
