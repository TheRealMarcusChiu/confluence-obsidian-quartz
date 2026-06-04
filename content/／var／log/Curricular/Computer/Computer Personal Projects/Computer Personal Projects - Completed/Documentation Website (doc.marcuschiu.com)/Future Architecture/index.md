---
title: "Future Architecture"
created: 2019-07-10T00:08:09.354-05:00
modified: 2019-07-10T00:08:19.926-05:00
parent: "[[Documentation Website (doc.marcuschiu.com)]]"
children: []
---
- remove ip address from links
	- example request: [http://core.marcuschiu.com/api/log/the-getter?sort=metadata.created,desc&logDisplayType=TILE&page=0&size=1&ancestryLogID=5b0cca5e4d6d353b6576486c&createdBefore=1548519514277](http://core.marcuschiu.com/api/log/the-getter?sort=metadata.created,desc&logDisplayType=TILE&page=0&size=1&ancestryLogID=5b0cca5e4d6d353b6576486c&createdBefore=1548519514277)
- remove <em>parentLogModels</em> and <em>childLogModels</em> from <em>displayType = TILE</em>
	- example request: [http://core.marcuschiu.com/api/log/the-getter?sort=metadata.created,desc&logDisplayType=TILE&page=0&size=1&ancestryLogID=5b0cca5e4d6d353b6576486c&createdBefore=1548519514277](http://core.marcuschiu.com/api/log/the-getter?sort=metadata.created,desc&logDisplayType=TILE&page=0&size=1&ancestryLogID=5b0cca5e4d6d353b6576486c&createdBefore=1548519514277)
- pass updated date in HTTP headers, to prevent outdated posts from being used
- does not load in order when scrolling most recent post in home page
- allow each page has (multiple queries to other sub pages), allowing to filter by tags, etc, (OR & AND combinations)
	- each page is allowed multiple filter queries to define the its sub pages (by tags and/or direct children). and allow array of sub page exemptions to not be shown within current page.
	- sort by is default latest to oldest, but on browser user is allowed to change sort by.
		- or override sort by and have admin user define ordering of sub pages, which prob means no need for filter queries.
	- while user is allowed to change the sort by, he or she is also allowed to filter to already existing sub pages.
	- allow page to filter have a filter option (on existing tags) for further filtering for users
- tile display
	- allow picture and text design, with and without date and/or tags.
	- when tile hover show details
- allow parent LogContentComponent to pass CSS attributes to ChildComponent
- images
	- allow search for images by "tags"
	- allow image creation with tags
	- allow image editing and deletion
	- allow crop and rotation
- youtube videos
	- save titles and other details so when video is taken down it will display the details so one can still refer to it.
- allow minimize/maximize sub-content within main content
	- allow write in
	- or log id reference
	- allow other contents to be nested here
- ROOT\_LOG
	- should navigate back homepage
	- change display of ROOT\_LOG to some other descent phrase
- find ways to custom change color, transparency of header div for each log-page
- navigating to pages should go back to top, not at same relative position as previous page
- allow tables to be created (markdown tables don't work with current library)
- change the way we edit and create post to a longer pass
- /log-page/id/title-old would always go to correct page and update to new title /log-page/id/title-new
- given a page that has several children, allow current page to filter what children is displayed. Either by tags, something new such as new field in Tile MetaData? This is probably a repeat from above...

<strong>Not Necessary - But Helpful</strong>
- breadcrumbs dropdown
- find way to auto redirect to private ip-address with same relative path
