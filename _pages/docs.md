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
For some of them you need to be quite familiar with JUnit 5, so make sure to read [its user guide](http://junit.org/junit5/docs/current/user-guide/) or [this article series](https://blog.codefx.org/libraries/junit-5-basics/).

<dl>
{% for item in site.docs %}
  <dt><a href="{{ item.url }}">{{ item.title }}</a></dt>
  <dd>{{ item.description }}</dd>
{% endfor %}
</dl>
