theme-pull:
	git fetch theme-hello-friend master
	git subtree pull --prefix themes/hello-friend theme-hello-friend master --squash

theme-push:
	git subtree push --prefix=themes/hello-friend theme-hello-friend-pbar1 master

server:
	hugo server

.PHONY: theme-pull theme-push server
