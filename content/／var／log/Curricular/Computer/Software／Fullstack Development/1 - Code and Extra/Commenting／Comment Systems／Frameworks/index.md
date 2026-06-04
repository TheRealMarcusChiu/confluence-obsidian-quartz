---
title: "Commenting／Comment Systems／Frameworks"
created: 2025-06-18T15:38:18.490-05:00
modified: 2025-06-18T15:49:01.080-05:00
parent: "[[1 - Code and Extra]]"
children: []
---
###### Commenting/Comment Systems/Frameworks
````excerpt
- is a feature on websites that allows users to post and respond to messages (comments) related to specific content, fostering interaction and community building
````
^excerpt

# Types
1. Integrated third-party
2. Off-site hosting
3. Self-hosted
4. GitHub
5. IndieWeb and Fediverse
6. Manual process
7. No comments

# Integrated Third Party
- [Disqus](https://disqus.com/). Probably the most popular comment hosting service. It offers a basic ads-supported plan, but it comes with some privacy, security and performance [problems](https://notes.ayushsharma.in/2017/09/im-killing-disqus-comments-on-my-blog-heres-why).
- [Facebook comments](https://developers.facebook.com/docs/plugins/comments). Another established provider with similar privacy concerns as Disqus.
- [Muut](https://muut.com/). Small and ad-free, but I was unable to find a free tier. Starts at \$16/month, which may not be worth it for a small blog.
- [Remarkbox](https://www.remarkbox.com/). Offered as a "[pay what you can](https://www.remarkbox.com/remarkbox-is-now-pay-what-you-can.html)" service.
- [JustComments](https://just-comments.com/). A pay-as-you-go service, so your monthly expenses depend on your page views. Starts at \$5/month. A [basic version](https://github.com/JustComments) can be self-hosted.
- [CommentBox](https://commentbox.io/). Offers a free plan with 100 comments per month. The pricing for unlimited comments starts at \$10/month.
- [HyperComments](https://www.hypercomments.com/). Another page-view-based service. Starts at \$2/month for a single site.
- [GraphComments](https://graphcomment.com/). Starts with a generous free tier with 1M page views per month. However, a Facebook script is injected, which leads to privacy concerns.
- [FastComments](https://fastcomments.com/). No free tier, starts at \$5/month.
- [Hyvor Talk](https://talk.hyvor.com/). Premium only, starts at \$5 per month.
- [ReplyBox](https://getreplybox.com/). Starts at \$6/month for 20.000 monthly page views.
- [Caint](https://www.caint.casa/). A free [open-source](https://sr.ht/~jpgleeson/caint/) comment service.
- [Cusdis](https://cusdis.com/). A lightweight, privacy-first and [open-source](https://github.com/djyde/cusdis) project. A Pro plan costs \$5/month.
- [Chirpy](https://chirpy.dev/). A privacy-friendly, customizable and open-source service. Public beta as of April 2022.
- [ConvoComet](https://convocomet.dev/). An [open-source](https://github.com/AsyncBanana/convocomet) service with a free tier for up to 2500 monthly page loads.

# Off-Site Hosting
- [Mastodon](https://joinmastodon.org/). For every blog post, include a link back to your social media post, where people can leave their comments.
- [Reddit](https://www.reddit.com/). Create your own subreddit and post a link to every new blog article. As a bonus, your posts can be voted on, so you get a nice popularity overview.
- [Hacker News](https://news.ycombinator.com/). Similar to Reddit, but aimed towards a more technical audience. You can't create a dedicated space for your links, but it's possible to view [all posts per domain](https://news.ycombinator.com/from?site=darekkay.com). There's also [hn-comments-drawer](https://github.com/prakhar897/hn-comments-drawer) to embed Hacker News comments within a static website

# Self-Hosting
- [Discourse](https://www.discourse.org/). It's a whole discussion platform, mostly used to replace classic discussion boards. It can also be used to host comments, as used by the co-founder Jeff Atwood on their [static blog](https://blog.codinghorror.com/).
- [Talkyard](https://www.talkyard.io/blog-comments). Similar to Discourse. It combines a forum, Q&A, chat and blog comments. Talkyard also comes with affordable hosted plans starting at 0.5 €/month.
- [Coral / Talk](https://github.com/coralproject/talk). Built by Mozilla and some leading news websites.
- [Cactus Comments](https://cactus.chat/). Federated comment system, based on the Matrix protocol.
- [Isso](https://posativ.org/isso/). Exists since 2013 and with 4400+ GitHub stars, it's one of the most popular "indie" projects, i.e., not backed by a major organization. Unfortunately, I had some problems getting it to run in 2016.
- [Juvia](https://github.com/phusion/juvia). One of the oldest (2011) yet still maintained open-source commenting systems.
- [Commento](https://github.com/adtac/commento). A self-called "privacy-focused Disqus alternative". Created in November 2017, with 3500+ GitHub stars. A [hosted version](https://commento.io/) is available.
- [Schnack](https://github.com/schn4ck/schnack). Another self-hosted option, with 1700+ stars on GitHub. Offers moderation and comments import from Disqus and WordPress.
- [Remark42](https://github.com/umputun/remark42). With 2.8k+ stars, it's a popular alternative that's actively maintained and extended.
- [Comntr](https://comntr.github.io/). A new open source project. It's an integrated third-party tool that can be run like a self-hosted solution.
- [Glosa](https://github.com/glosa). An underrated open source project. Offers importing comments from Disqus.
- [Komento](https://komento.host/). A decentralized comment hosting powered by IPFS. As of April 2021, it's in Beta phase.
- [HashOver](https://www.barkdull.org/software/hashover). A free and open source PHP comment system designed for fully anonymous comments with custom themes.

Given all the options, there's probably no need to reinvent the wheel. But if existing tools don't match your requirements, you can implement your own solution. Here are some DIY write-ups for inspiration:
- [Static HTML comments](https://sive.rs/shc), by Derek Sivers
- [My 16-step system for adding comments to my static site](https://rachsmith.com/static-blog-comments/) by Rach Smith
- [Deriving comments from web server logs](https://news.ycombinator.com/item?id=34376934)

# Github

If you're targeting software developers, consider using GitHub for comments. Create a GitHub issue for each blog post and [load the issue comments on your site](http://donw.io/post/github-comments/). Here are some related open-source tools:
- [Utterances](https://utteranc.es/). A lightweight comments widget built on GitHub issues. Actively maintained as of May 2021.
- [Giscus](https://giscus.app/). A comment system powered by GitHub discussions. Heavily inspired by Utterances and actively maintained.
- [Gitment](https://github.com/imsun/gitment). A comment system based on GitHub issues. Not maintained since 2018.

For a broader audience, you can still use GitHub without a required account. [Staticman](https://staticman.net/) first turns comments into a format like JSON or YAML. Then, it either commits them automatically into your git repository, or it creates a pull request (if you prefer comment moderation).
# IndieWeb and Fediverse

As part of the IndieWeb community, [webmentions](https://indieweb.org/Webmention) are a federated/decentralized way to share comments, likes and other human interactions. It's rather a technical topic, so check out Sebastian De Deyne's [blog post](https://sebastiandedeyne.com/adding-webmentions-to-my-blog/) for more information.

Another approach is to connect your site to the Fediverse. For example, you can fetch and display Mastodon comments, as described by [Carl Schwan](https://carlschwan.eu/2020/12/29/adding-comments-to-your-static-blog-with-mastodon/), [David Revoy](https://www.davidrevoy.com/article981/i-may-have-found-an-alternative-solution-to-my-blogs-comment-system), [Cassidy James](https://cassidyjames.com/blog/fediverse-blog-comments-mastodon/) and [Joseph Szymborski](https://jszym.com/blog/mastodon_blog_comments/).

Consider the [ethical](https://shkspr.mobi/blog/2022/12/the-ethics-of-syndicating-comments-using-webmentions/) and [privacy](https://sebastiangreger.net/2018/05/indieweb-privacy-challenge-webmentions-backfeeds-gdpr/) challenges when including other people's content on your own website without their permission.
# Manual Process

If you don't get a lot of comments, think about [adding them manually](https://blog.joeldare.com/how-i-implemented-comments-on-a-static-site/). Let your readers email you via a form or a link at the end of every post. You get fully static comments without JavaScript, some kind of moderation and maybe even spam protection (depending on your email provider). This comes at a cost of manual work.
# No comments

Removing comments altogether is another valid option. I agree with Jon Henshaw's [issues with blog comments](https://coywolf.blog/the-case-against-comments/): useless or promotional comments, negativity, moderation effort and the potential impact on site performance. In 2020, I replaced the comment section with a note to contact me via email or social media. I haven't noticed a difference in the valuable comments and questions that people send me.

Jeff Atwood claims that [a blog without comments isn't a blog](https://blog.codinghorror.com/a-blog-without-comments-is-not-a-blog/). Sure, he gets hundreds of comments, and he's built a big community around it. However, this doesn't apply to most bloggers. Leo Babauta from Zen Habits [turned off comments](https://zenhabits.net/faq/), so he could spend more time creating content than moderating comment spam.
