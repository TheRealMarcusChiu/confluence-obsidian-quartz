---
title: "Maven - settings.xml"
created: 2021-05-10T11:46:04.551-05:00
modified: 2021-05-10T11:48:58.108-05:00
parent: "[[Apache - Maven]]"
children: []
---
# Resources
- [https://maven.apache.org/settings.html](https://maven.apache.org/settings.html)

# Overview

The <code>settings</code> element in the <code>settings.xml</code> file contains elements used to define values which configure Maven execution in various ways, like the <code>pom.xml</code>, but should not be bundled to any specific project, or distributed to an audience. These include values such as the local repository location, alternate remote repository servers, and authentication information.

There are two locations where a <code>settings.xml</code> file may live:
- The Maven install: <code>\${maven.home}/conf/settings.xml</code>
- A user’s install: <code>\${user.home}/.m2/settings.xml</code>

The former <code>settings.xml</code> are also called global settings, the latter <code>settings.xml</code> are referred to as user settings. If both files exists, their contents gets merged, with the user-specific <code>settings.xml</code> being dominant.

Tip: If you need to create user-specific settings from scratch, it’s easiest to copy the global settings from your Maven installation to your <code>\${user.home}/.m2</code> directory. Maven’s default <code>settings.xml</code> is a template with comments and examples so you can quickly tweak it to match your needs.

Here is an overview of the top elements under <code>settings</code>:
```
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" 
		  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 https://maven.apache.org/xsd/settings-1.0.0.xsd">
	<localRepository/>
	<interactiveMode/>
	<offline/>
	<pluginGroups/>
	<servers/>
	<mirrors/>
	<proxies/>
	<profiles/>
	<activeProfiles/>
</settings>
```

The contents of the <code>settings.xml</code> can be interpolated using the following expressions:
1. <code>\${user.home}</code> and all other system properties <em>(since Maven 3.0)</em>
2. <code>\${env.HOME}</code> etc. for environment variables

Note that properties defined in profiles within the <code>settings.xml</code> cannot be used for interpolation
