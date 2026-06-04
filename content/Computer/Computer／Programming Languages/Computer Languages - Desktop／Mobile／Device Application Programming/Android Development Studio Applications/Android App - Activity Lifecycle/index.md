---
title: "Android App - Activity Lifecycle"
created: 2020-06-30T22:14:10.945-05:00
modified: 2020-06-30T22:26:38.532-05:00
parent: "[[Android Development Studio Applications]]"
children: []
---
To navigate transitions between stages of the activity lifecycle, the Activity class provides a core set of six callbacks:
- <code>[onCreate()](https://developer.android.com/reference/android/app/Activity#onCreate(android.os.Bundle))</code>
- <code>[onStart()](https://developer.android.com/reference/android/app/Activity#onStart())</code>
- <code>[onResume()](https://developer.android.com/reference/android/app/Activity#onResume())</code>
- <code>[onPause()](https://developer.android.com/reference/android/app/Activity#onPause())</code>
- <code>[onStop()](https://developer.android.com/reference/android/app/Activity#onStop())</code>
- <code>[onDestroy()](https://developer.android.com/reference/android/app/Activity#onDestroy())</code>

### Example Metaphor
```
protected void onCreate(...) {
    openGarageDoor();
    unlockCarAndGetIn();
    closeCarDoorAndPutOnSeatBelt();
    putKeyInIgnition();
}

protected void onStart() {
    startEngine();
    changeRadioStation();
    switchOnLightsIfNeeded();
    switchOnWipersIfNeeded();
}

protected void onResume() {
    applyFootbrake();
    releaseHandbrake();
    putCarInGear();
    drive();
}

protected void onPause() {
    putCarInNeutral();
    applyHandbrake();
}

protected void onStop() {
    switchEveryThingOff();
    turnOffEngine();
    removeSeatBeltAndGetOutOfCar();
    lockCar();
}

protected void onDestroy() {
    enterOfficeBuilding();
}

protected void onReachedGroceryStore(...) {
    Intent i = new Intent(ACTION_GET_GROCERIES, ...,  this, GroceryStoreActivity.class);
}

protected void onRestart() {
    unlockCarAndGetIn();
    closeDoorAndPutOnSeatBelt();
    putKeyInIgnition();
}
```

![[Android App - Activity Lifecycle/android_activity_lifecycle.png|400]]
