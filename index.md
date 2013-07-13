---
layout: page
---
{% include JB/setup %}

<div class="blog-index">  
  {% for post in site.posts limit:10 %}
	  {% assign content = post.content %}
	  {% include post_detail.html %}
  {% endfor %}
</div>

## Recent Posts

<ul>
  {% for post in site.posts limit:5 %}
  <li><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

## All Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

