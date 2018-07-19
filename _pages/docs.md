---
layout: single
permalink: /docs/
header: { overlay_image: assets/images/site/type-writer.jpg }
title: Documentation
description: Documentation of JUnit Pioneer's feature set
sidebar:
  nav: "docs-xp"
---

Here's a list of all the features that you can expect from JUnit Pioneer.
For some of them you need to be quite familiar with JUnit 5, so make sure to read [its user guide](https://junit.org/junit5/docs/current/user-guide/) or [this article series](https://blog.codefx.org/libraries/junit-5-basics/).

<dl>
{% for item in site.docs %}
  <dt><a href="{{ item.url }}">{{ item.title }}</a></dt>
  <dd>{{ item.description }}</dd>
{% endfor %}
</dl>

To start using JUnit Pioneer, determine the latest version (e.g. on [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.junit-pioneer%22%20a%3A%22junit-pioneer%22)) and add `org.junit-pioneer : junit-pioneer` as a test dependency.
