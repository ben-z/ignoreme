This repo is archived. I use [gitignore.io](https://docs.gitignore.io/install/command-line) now:

Setup:
```
echo "function gi() { curl -sL https://www.gitignore.io/api/\$@ ;}" >> \
~/.bash_profile && source ~/.bash_profile
```

Usage:
```
gi node >> .gitignore
```

Below is the original Readme.

# IgnoreMe

If you are like me, you'd do lots and lots of small projects to learn just about anything. Lots of projects means lots of boilerplates, and out of all the boilerplates, the one we have to create the most often is more or less the `.gitignore` file.

IgnoreMe makes the process of maintaining `.gitignore` files quick and easy.

# Get Started

```bash
$ yarn global add ignoreme # or npm i -g ignoreme
$ ignoreme vim node macos
# 3 gitignore(s) added: vim, node, macos
```

# Usage

To add ignores:
```bash
$ ignoreme add <language1, language2, editor1, ...>
```

To remove ignores:

```bash
$ ignoreme remove <language1, language2, editor1, ...>
```

To list ignores:

```bash
$ ignoreme list
```

# Examples

To ignore all `vim`, `node`, and `macos` temporary files:

```bash
$ ignoreme add vim node macos
# 3 gitignore(s) added: vim, node, macos

$ ignoreme list
# 3 complete gitignore(s):
#   |-- macos
#   |-- node
#   |-- vim
```

To un-ignore `node` temporary files

```bash
$ ignoreme remove node
# 1 gitignore(s) removed: node

$ ignoreme list
# 2 complete gitignore(s):
#   |-- macos
#   |-- vim
```

Let's say you forgot that you have `macos` ignores...

```bash
$ ignoreme add macos
# 1 gitignore(s) already exist(s): macos
```

...or that you misspelt `vim` (to be improved)

```bash
$ ignoreme add vym
# 1 gitignore(s) not found: vym
# Please refer to https://github.com/github/gitignore for a list of available gitignores
```

# Todo

This project is still WIP. Major things left to do:

- [x] `ignoreme add`
- [x] `ignoreme remove`
- [x] `ignoreme list`
- [x] avoid duplicate adds (recognize existing ignored files)
- [ ] tests
- [ ] a better UI (with colours and everything)
- [ ] automatically suggest possible typo fixes

# Contributing

[Issues](https://github.com/ben-z/ignoreme/issues), [PRs](https://github.com/ben-z/ignoreme/pulls). You know the drill.

# License

ISC
