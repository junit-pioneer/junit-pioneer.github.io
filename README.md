# JUnit Pioneer Site

The site for the [JUnit Pioneer organization][pioneer-org] and all its projects.
There is currently only one (also called [JUnit Pioneer][pioneer]) but this repository is set up to host many more.

[pioneer-org]: https://github.com/junit-pioneer
[pioneer]: https://github.com/junit-pioneer/junit-pioneer


## Structure

This project depends on Java, Gradle, Ruby, and Bundler.
Acceptable version ranges were not thoroughly tested - these versions were used to set the project up and are hence known to work:

* Java 1.8.0_131
* Gradle 3.5
* Ruby 2.3.4p301
* Bundler 1.14.3

This repository consists of three branches:

* `grandmaster`: contains all branches (as [worktrees][git-worktree]) and projects (as [submodules][git-submodule] - it is the default branch)
* `master`: the HTML content hosted under [junit-pioneer.org](http://junit-pioneer.org) as required by [GitHub organization pages][gh-org-pages]
* `site-source`: the site in source form without project-specific content

The directory structure in `grandmaster` must be as follows:

* `site`: worktree of branch `master`
* `site-source`: worktree of branch `site-source`
* `junit-pioneer`: `master` branch of [JUnit Pioneer][Pioneer]

[git-worktree]: https://git-scm.com/docs/git-worktree
[git-submodule]: https://git-scm.com/docs/git-submodule
[gh-org-pages]: https://help.github.com/articles/user-organization-and-project-pages/#user--organization-pages


## Setup

Besides creating the correct folder structure, `bundle install` must be executed in `site-source` to initialize Jekyll.

If you're on Linux, all of this can be done by calling `gradle setup`.
On Windows, you may have to run `git-setup.sh` (these are all Git commands) and then `bundle install` in `site-source`.


## Site-Building

After everything has been setup, running `gradle buildSite` builds the site and `gradle buildAll` includes each project's Javadoc.
With the correct credentials, `gradle pushSite` pushes the changes in `site-source` to the tracked remote branch.

For local experimentation with the site layout, it makes sense to first run `gradle buildSite` and then manually launch Jekyll in `site-source` with `bundle exec jekyll serve`.
Note the `serve`, which launches a server on localhost (Jekyll messages list the port) and also watches the `site-source` directory for further changes.


## Background

This setup is somewhat complex and arguably overly so.
Here's a documentation of some nooks and crannies as well as my justification for why it ended up that way.

### Requirements

These are requirements for the infrastructure behind the site in rough order of importance:

* everything is automated as much as possible; consequences:
    * no WordPress et al.
    * static site hosted on GitHub, built by a build tool, updated by a CI server is the obvious approach
* documentation is high-quality and code snippets are guaranteed to be correct; consequences:
    * this can best be achieved with Asciidoctor and includes of real sources, that are compiled and maybe even tested during the build
* PRs can include production code side by side with its documentation; consequences:
    * docs live in the same repo as the code they pertain to
    * docs should contain as little unrelated files as possible, so e.g. not an entire Jekyll site
    * docs can not live in a specific branch (e.g. `gh-pages`)
    * some kind of build step is required to get from sources to a publishable site
* to make sure relevant documentation is easily found it is amenable to search engine indexing and sharing; consequences:
    * instead of a single page documentation, each topic should get its own page
    * for usability, these should be bound together by an index page, ToC, or similar
    * having meta tags for social media would be helpful
    * default Asciidoctor is not particularly good at this, Jekyll performs better
* the project needs to publish announcements, blog posts, and the like; consequences:
    * beyond the documentation, the project needs a real site
    * it should integrate well with the documentation
    * default Asciidoctor is not particularly well-suited for a blog-like environment, Jekyll does a much better job here

Furthermore, JUnit Pioneer is not only a project but envisioned as a roof over various JUnit-related projects, which brings a few extra requirements:

* it is easy to incorporate new projects; the less setup the better
* it is easy to move documentation between projects (because features might)
    * links to the documentation should not include the project name, so links do not break
    * this eliminates the option to have each project host its own documentation on its own [project pages][gh-project-pages]

[gh-project-pages]: https://help.github.com/articles/user-organization-and-project-pages/#project-pages

### Implementation

The requirements speak for the following solution:

* single site containing the documentation for all projects (even though there is currently only one)
* mixture of Jekyll and Asciidoc, which fortunately is pretty easy thanks to _[jekyll-asciidoc]_
* Git and build tool support to organize required branches and projects to make it easy to update the site

Some properties of the current solution:

* the documentation is organized as a [collection][jekyll-collections]
* the _jekyll-feed_ plugin does not include collections, so the documentation does not show up in feeds
* the _jekyll-archives_ plugin does not include collections, so the documentation pages do not show up in archive pages for categories and tags; as a consequence docs should use neither to avoid confusion
* I found no Gradle Git plugin that would cooperate with worktrees, so I fell back to a (Linux) command line script
* I found no Gradle Bundle or Jekyll plugin so I fell back to calling commands
* the `junit-pioneer` directory is not a submodule because that would require a new commit on `grandmaster` every time the site is built

[jekyll-asciidoc]: https://github.com/asciidoctor/jekyll-asciidoc
[jekyll-collections]: https://jekyllrb.com/docs/collections/
