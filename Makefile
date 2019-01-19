theme-pull: .PHONY
	git fetch theme-hello-friend master
	git subtree pull --prefix themes/hello-friend theme-hello-friend master --squash

theme-push: .PHONY
	git subtree push --prefix=themes/hello-friend theme-hello-friend-pbar1 master
