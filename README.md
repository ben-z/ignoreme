# IgnoreIt

If you are like me, you'd do lots and lots of small projects to learn just about anything. Lots of projects means lots of boilerplates, and out of all the boilerplates, the one we have to create the most often is more or less the `.gitignore` file. IgnoreIt makes the process of maintaining `.gitignore` files a breeze.

# Installation

```bash
$ yarn global add ignoreit
```

or if you like the good ol' npm

```bash
$ npm install -g ignoreit
```

# Usage

To add ignores:
```bash
$ ignoreit add <language1, language2, editor1, ...>
```

To remove ignores:

```bash
$ ignoreit remove <language1, language2, editor1, ...>
```

To list ignores:

```bash
$ ignoreit list
```

# Examples

To ignore all `vim`, `node`, and `macos` temporary files:

```bash
$ ignoreit add vim node macos
# 3 gitignore(s) added: node, vim, macos

$ ignoreit list
# 3 complete gitignore(s):
#   |-- macos
#   |-- node
#   |-- vim
```

To un-ignore `node` temporary files

```bash
$ ignoreit remove node
# 1 gitignore(s) removed: node

$ ignoreit list
# 2 complete gitignore(s):
#   |-- macos
#   |-- vim
```

Let's say you forgot that you have `macos` ignores...

```bash
$ ignoreit add macos
# 1 gitignore(s) already exist(s): macos
```

...or that you misspelt `vim` (to be improved)

```bash
$ ignoreit add vym
# 1 gitignore(s) not found: vym
# Please refer to https://github.com/github/gitignore for a list of available gitignores
```

# Todo

This project is still WIP. Major things left to do:

- [x] `ignoreit add`
- [x] `ignoreit remove`
- [x] `ignoreit list`
- [x] avoid duplicate adds (recognize existing ignored files)
- [ ] tests
- [ ] a better UI (with colours and all that)
- [ ] automatically suggest possible typo fixes

# Contributing

[Issues](https://github.com/ben-z/ignoreit/issues), [PRs](https://github.com/ben-z/ignoreit/pulls). You know the drill.

# License

ISC
