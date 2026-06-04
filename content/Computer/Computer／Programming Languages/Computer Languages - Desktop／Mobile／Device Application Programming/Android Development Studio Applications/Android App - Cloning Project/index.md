---
title: "Android App - Cloning Project"
created: 2020-05-13T01:30:49.967-05:00
modified: 2020-06-30T22:19:14.628-05:00
parent: "[[Android Development Studio Applications]]"
children: []
---
1. Using Windows Explorer, navigate to the Android Studio projects directory select the project folder to be cloned;
2. Copy the selected folder; Paste the folder into the Android Studio (AS) projects directory;
3. Rename the pasted folder to be the new name of the cloned project, say 'ViewPager\_Shell';
4. Launch Android Studio; Select 'Open an existing Android Studio project';
5. Navigate to the AS projects directory; Select the folder 'ViewPager\_Shell';
6. Ensure that AS's explorer pane is visible on the left-hand-side of the AS main frame;
7. Select the 'Android' view for the explorer pane;
8. Open app -\> java;
9. the old package name should now be visible, e.g. 'com.hulme.owm';
10. Right-click on the old package name and select 'Refactor -\> Rename';
11. A dialog should now appear; left-click 'Rename Package';
12. In the pop-up dialog, replace the old package (e.g. 'owm') with the new package name (e.g. viewpager\_shell);
13. Left-click on the 'Refactor' button;
14. BEWARE!! ... A new 'Find Factoring Preview' pane should open in the lower-left of the AS main frame window; Select 'Do Refactor';
15. Using the AS explorer pane, navigate to 'Gradle Scripts -\> build.gradle(Module:app);
16. Double-click build.gradle(Module:app) to view its contents in the AS editor pane;
17. Change the defaultConfig 'applicationID' string to your new full package path (e.g. "com.hulme.viewpager\_shell");
18. Using the AS explorer pane, navigate to 'app -\> manifests -\> AndroidManifest.xml';
19. Double-click on 'AndroidManifest.xml' to view it in the AS editor pane;
20. Under the manifest tag, you should observe that the new package name (e.g. 'com.hulme.viewpager\_shell') now appears, as a result of the previous refactoring step; Under application tag, change android:label to a new name (e.g. "ViewPager Shell Demo") - this is the name that appears in the list of installed apps provided by Android's 'Settings -\> Application manager;
21. Under activity tag, change android:label to a new name (e.g. "VP Shell") - this is the name that appears under the app's icon and it is also the activity's default ActionBar title;
22. You should now be able to build and run the newly cloned project.

[http://stackoverflow.com/questions/29045964/android-studio-how-to-copy-a-project](http://stackoverflow.com/questions/29045964/android-studio-how-to-copy-a-project) 
\*\* EXTRA STEP NEEDED 
package\_name must match what's in your manifest file. you can find the google-services.json file if you look in the example photo below.
