source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-archives"
  # version 3.0.0 leads to the following error when building the page:
  # Liquid Exception: undefined method `write?' for <Excerpt: /docs/default-locale-timezone#excerpt>:Jekyll::AsciiDoc::Excerpt in /_layouts/single.html
  # and we're not the only ones: https://github.com/asciidoctor/jekyll-asciidoc/issues/230
  # apparently, it has something to do with jemoji - run `jekyll build --trace` to see the call stack
  gem "jekyll-asciidoc"
  gem "jekyll-feed"
  gem "jekyll-gist"
  gem "jekyll-include-cache"
  gem "jekyll-sitemap"
  gem "pygments.rb"
end
