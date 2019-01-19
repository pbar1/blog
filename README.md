# Pierce's personal blog

My personal blog, built with Hugo and deployed with Netlify

## Styles of posts
- On _X_

## Working with Hugo themes as Git subtrees

Add theme as remote (basically an alias so commands aren't as long)
```sh
git remote add -f theme-hello-friend https://github.com/panr/hugo-theme-hello-friend.git
```

Add theme as subtree (using `--squash` to avoid storing entire project's history)
```sh
git subtree add --prefix themes/hello-friend theme-hello-friend master --squash
```

Pull latest changes (added to Makefile)
```sh
git fetch theme-hello-friend master
git subtree pull --prefix themes/hello-friend theme-hello-friend master --squash
```

Add forked theme as remote
```sh
git remote add theme-hello-friend-pbar1 ssh://git@github.com/pbar1/hugo-theme-hello-friend.git
```

Push changes to forked theme (added to Makefile)
```sh
git subtree push --prefix=themes/hello-friend theme-hello-friend-pbar1 master
```

Make sure to check yourself when adding files for commit when using subtrees!
