---
layout: blog
permalink: /blog/
lang: pt
---

# Últimas postagens

<ul class="blog-posts">
{% for post in site.posts  %}
	<li>
		<a href="{{ post.url }}">
			<span class="date">{{ post.date | date: "%d/%m/%Y" }}</span>
			{{ post.title }}
			<p>{{ post.excerpt | strip_html | strip_newlines | truncate: 180 }}</p>
		</a>
        <hr />
	</li>
{% endfor %}
</ul>