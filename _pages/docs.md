---
layout: single
permalink: /docs/
header: { overlay_image: assets/images/site/type-writer.jpg }
title: Documentation
description: Documentation of JUnit Pioneer's feature set
sidebar:
  nav: "docs"
---

Here's a list of all the features that you can expect from JUnit Pioneer.
It's split into extensions from the _junit-pioneer_ artifact and features from _test-reports_.

## JUnit Pioneer

For some of these features you need to be quite familiar with JUnit 5, so make sure to read [its user guide](https://junit.org/junit5/docs/current/user-guide/) or [this article series](https://blog.codefx.org/libraries/junit-5-basics/).

<dl>
{% for item in site.docs %}
  {% if item.path contains '/xp/' and item.unlist != true %}
    <dt><a href="{{ item.url }}">{{ item.title }}</a></dt>
    <dd>{{ item.description }}</dd>
  {% endif %}
{% endfor %}
</dl>

For details on how to start with JUnit Pioneer, check [this site](/junit-pioneer).

## Test Reports

And here's how to make good use of the test reports:

<dl>
{% for item in site.docs %}
  {% if item.path contains '/tr/' %}
    <dt><a href="{{ item.url }}">{{ item.title }}</a></dt>
    <dd>{{ item.description }}</dd>
  {% endif %}
{% endfor %}
</dl>

For details on how to start with Test Reports, check [this site](/test-reports).
