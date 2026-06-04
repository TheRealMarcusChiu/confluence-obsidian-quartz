---
title: "Radarr - Sonarr - Lidarr"
created: 2025-12-04T21:58:48.715-06:00
modified: 2025-12-04T22:49:04.655-06:00
parent: "[[Servers Stuff To Run]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Sonarr",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Radarr",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Lidarr",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Media Type",
        "bg": "#F4F5F7"
      },
      "TV Shows",
      "Movies",
      "Music"
    ],
    [
      {
        "content": "Primary Function",
        "bg": "#F4F5F7"
      },
      "Manages and downloads new TV show episodes",
      "Manages and downloads movies",
      "Manages and downloads music albums"
    ],
    [
      {
        "content": "Key Features",
        "bg": "#F4F5F7"
      },
      "Monitors RSS feeds for new episodes, handles sorting and renaming, and can upgrade existing files to better quality formats",
      "Monitors RSS feeds for new movies, handles sorting and renaming",
      "Monitors RSS feeds for new albums, handles sorting and renaming"
    ],
    [
      {
        "content": "Underlying Technology",
        "bg": "#F4F5F7"
      },
      "A fork of Sonarr's code, forked to create Radarr",
      "Based on Sonarr's code",
      "A fork of Sonarr's code"
    ]
  ]
}
```
###### Indexer Hubs
- [Jackett](https://github.com/Jackett/Jackett) - meta indexer for torrent sites (old)
- [Prowlarr](https://prowlarr.com/) - is a proxy indexer manager for Usenet and BitTorrent (new)

###### Indexers
- [Radarr](https://github.com/Radarr/Radarr) (Movies)
- [Sonarr](https://github.com/Sonarr/Sonarr) (TV Series)
- [Lidarr](https://github.com/lidarr/Lidarr) (Music)
- [Bazarr](https://github.com/morpheus65535/bazarr) (Subtitles)
- [Readarr](https://github.com/Readarr/Readarr) (Books)
- [Ombi](https://github.com/tidusjar/Ombi) (Requests) - user requests for media with Radarr/Sonarr/Lidarr integration
- [seerr](https://github.com/seerr-team/seerr) (Requests) - request and discovery manager for Jellyfin, Plex, and Emby
	- [Overseerr](https://overseerr.dev/) (Requets) - is a request management and media discovery tool built to work with your existing Plex ecosystem
	- Jellyseerr (Requests) - is a request management and media discovery tool built to work with your existing Jellyfin ecosystem
- [Bobarr](https://github.com/iam4x/bobarr) - the all-in-one alternative for Sonarr, Radarr, Jackett... with a VPN and running in docker
- [Bonarr](https://github.com/bonarr/Bonarr) (X-rated)
- [Whisparr](https://github.com/Whisparr/Whisparr/) (X-rated)

###### Utilities
- [Maintainerr](https://github.com/Maintainerr/Maintainerr) - no longer will you have to worry about your precious hard drive space being taken up by media, that isn't even being watched
- [Cleanuparr](https://github.com/Cleanuparr/Cleanuparr) - automating the cleanup of unwanted or blocked files in Sonarr, Radarr, and supported download clients like qBittorrent, Deluge and Transmission
- [Huntarr](https://github.com/plexguide/Huntarr.io) -continually searches your media libraries for missing content and items that need quality upgrades. It automatically triggers searches for both missing items and those below your quality cutoff. It's designed to run continuously while being gentle on your indexers, helping you gradually complete your media collection with the best available quality
- [Tdarr](https://github.com/HaveAGitGat/Tdarr) - automating media transcode/remux management and making sure your files are exactly how you need them to be in terms of codecs/streams/containers
- [Syncarr](https://github.com/syncarr/syncarr) - ayncs two Radarr/Sonarr/Lidarr instances
- [Traktarr](https://github.com/l3uddz/traktarr) - add content to Radarr/Sonarr from [Trakt.tv](http://Trakt.tv)
- [Organizr](https://github.com/causefx/Organizr) - feature rich landingpage
- [Listrr](https://github.com/TheUltimateC0der/Listrr) - with listrr.pro, you can create personalized [trakt.tv](http://trakt.tv) lists for tv shows and movies with a variety of different filters, and use them with your ultimate PLEX setup.
- [Mylar3](https://github.com/mylar3/mylar3) - manages your comic library
- [Wantarr](https://github.com/l3uddz/wantarr) - CLI tool for Radarr/Sonarr
- [Requestrr](https://github.com/darkalfx/requestrr) - chatbot used to simplify using services like Sonarr/Radarr/Ombi via the use of chat!
- [Lazy Librarian](https://lazylibrarian.gitlab.io/) - Books and Audiobooks manager and automation
- [NzbHydra](https://github.com/theotherp/nzbhydra2) - meta search for newznab indexers and torznab trackers
- [Pulsarr](https://github.com/roboticsound/Pulsarr) - browser extension for adding movies to Radarr or Series to Sonarr while browsing IMDB or TVDB.
- [Invitarr](https://github.com/Sleepingpirates/Invitarr) - chatbot that invites discord users to plex
- [Gaps](https://github.com/JasonHHouse/gaps) - gaps searches through your Plex Server or local folders for all movies, then queries for known movies in the same collection
- [Tautulli](https://github.com/Tautulli/Tautulli) - application for monitoring, analytics and notifications for [Plex Media Server](https://plex.tv/)
- [Unpackerr](https://github.com/davidnewhall/unpackerr) - it checks for completed downloads and extracts them so Radarr and/or Sonarr and/or Lidarr may import them
- [mdblist.com](https://mdblist.com/) - listrr.pro alternative with scrapped movie ratings from imdb, tmdb, trakt, letterboxd, rottentomatoes and metacritics
- [Doplarr](https://github.com/kiranshila/Doplarr) - an \*arr request bot for Discord
<br>
- [Recyclarr](https://github.com/recyclarr/recyclarr) - automatically sync TRaSH Guides to your Sonarr and Radarr instances
- [Notifiarr](https://notifiarr.wiki/) -
- [Configarr](https://configarr.de/) - simplified configuration management for your Arr applications like Sonarr, Radarr and more
