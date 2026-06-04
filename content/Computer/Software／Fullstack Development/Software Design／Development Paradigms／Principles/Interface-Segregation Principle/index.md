---
title: "Interface-Segregation Principle"
created: 2022-02-14T18:18:44.876-06:00
modified: 2022-02-14T18:19:20.062-06:00
parent: "[[Software Design／Development Paradigms／Principles]]"
children: []
---
# Not This
```
public interface BearKeeper {
    void washTheBear();
    void feedTheBear();
    void petTheBear();
}
```
# But This
```
public interface BearCleaner {
    void washTheBear();
}

public interface BearFeeder {
    void feedTheBear();
}

public interface BearPetter {
    void petTheBear();
}
```
