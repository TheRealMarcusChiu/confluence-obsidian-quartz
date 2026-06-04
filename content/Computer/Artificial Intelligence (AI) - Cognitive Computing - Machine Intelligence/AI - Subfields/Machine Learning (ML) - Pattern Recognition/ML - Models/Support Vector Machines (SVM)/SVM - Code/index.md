---
title: "SVM - Code"
created: 2020-11-09T11:45:52.780-06:00
modified: 2020-11-09T11:52:39.192-06:00
parent: "[[Support Vector Machines (SVM)]]"
children: []
---
### SVM Classifier - Python
```py
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn import metrics

# Dataset Load
cancer = datasets.load_breat_cancer()

# Dataset See
print("Features: ", cancer.feature_names)
print("Labels: "  , cancer.target_names)
print("Data Shape: ", cancer.data.shape)
print(cancer.data[0:1])
print(cancer.target)

# Dataset Split
X_train, X_test, y_train, y_test = train_test_split(cancer.data, cancer.target, test_size=0.3, random_state=109)

# Model Build/Train
clf = svm.SVC(kernel='linear') # Linear Kernel
clf.fit(X_train, y_train)
y_pred = clf.predict(X_test)

# Model Evaluation
print("Accuracy: ", metrics.accuracy_score(y_test, y_pred))
print("Precision: ", metrics.precision_score(y_test, y_pred))
print("Recall: ", metrics.recall_score(y_test, y_pred))
```
