# IgnoreIt

Automatically ignore files for you.

# Installation

```bash
$ yarn global add ignoreit
```

or if you like the good ol' npm

```bash
$ npm install -g ignoreit
```

# Usage

```bash
$ ignoreit add <language1, language2, editor1, ...>
```

*Example* To ignore all `vim` and `node` temporary files:

```bash
$ ignoreit add vim node
```

# Todo

This project is still WIP. Major things left to do:

- [x] `ignoreit add`
- [ ] `ignoreit remove`
- [ ] avoid duplicate adds (recognize existing ignored files)
- [ ] tests

# Contributing

[Issues](https://github.com/ben-z/ignoreit/issues), [PRs](https://github.com/ben-z/ignoreit/pulls). You know the drill.

# License

ISC
