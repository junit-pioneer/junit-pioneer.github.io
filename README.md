# JUnit Pioneer Site

The site for the [JUnit Pioneer organization][pioneer-org] and all its projects.
There is currently only one (also called [JUnit Pioneer][pioneer]) but this repository is set up to host many more.


## Structure

Branches:

* `grandmaster`: contains all branches (as [worktrees](https://git-scm.com/docs/git-worktree)) and projects (as [submodules](https://git-scm.com/docs/git-submodule))
* `master`: the HTML content hosted under [junit-pioneer.org](http://junit-pioneer.org)
* `site-source`: the site in source form

The directory structure in `grandmaster` must be as follows:

* `site`: worktree of branch `master`
* `site-source`: worktree of branch `site-source`
* `junit-pioneer`: submodule of the project [JUnit Pioneer][pioneer] (`master` branch)


## Requirements

These are requirements for the infrastructure behind the site in rough order of importance:

. PRs must be able to include code side by side with its documentation, which implies that the docs can not live in a specific branch (e.g. `gh-pages`)
. to make sure relevant documentation is easily found it must be amenable to search engine indexing, which particularly implies that it can not all end up on a single page
. the project should be able to publish announcements, blog posts, and the like
. links to the documentation should not include the project name, so moving features into new projects does not break links

Stretch goals:

* the project folders containing the documentation are easy to understand, so they should not are not cluttered with "unrelated" files (e.g. an entire Jekyll page)
* to make sure code samples work, they should be executed as part of the regular build process but repeating that when building the site wouldn't hurt
* the project and documentation should look similar
* documentation should be able to use Asciidoc


[pioneer-org]: https://github.com/junit-pioneer
[pioneer]: https://github.com/junit-pioneer/junit-pioneer


## Properties

Some properties of the current solution:

* the documentation is organized as a [collection][TODO]
* the _jekyll-feed_ plugin does not include collections, so the documentation does not show up in feeds
* the _jekyll-archives_ plugin does not include collections, so the documentation do not show up in archive pages for categories and tags; as a consequence docs should use neither to avoid confusion
