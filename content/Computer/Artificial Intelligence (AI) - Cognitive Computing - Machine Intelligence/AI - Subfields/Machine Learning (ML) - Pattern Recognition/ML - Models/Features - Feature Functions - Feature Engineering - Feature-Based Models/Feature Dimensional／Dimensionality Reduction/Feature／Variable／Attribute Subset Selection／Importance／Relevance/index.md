---
title: "Feature／Variable／Attribute Subset Selection／Importance／Relevance"
created: 2020-01-21T19:34:21.922-06:00
modified: 2022-02-12T20:32:39.443-06:00
parent: "[[Feature Dimensional／Dimensionality Reduction]]"
children: []
---
<strong>Feature Selection</strong> or <strong>Variable Selection</strong> or <strong>Attribute Selection</strong> or <strong>Variable Subset Selection</strong>
- <strong>selection</strong> - is the process of selecting a subset of relevant [[Features - Feature Functions - Feature Engineering - Feature-Based Models|features]] (variables, predictors) for use in model construction
- <strong>importance/relevance</strong> - refers to techniques that assign a score to input features based on how useful they are at predicting a target variable

# 3 Strategies
- filter strategy (e.g. information gain)
- wrapper strategy (e.g. search guided by accuracy)
- embedded strategy (selected features add or are removed while building the model based on prediction errors)

# Feature Importance - Map
![[Feature／Variable／Attribute Subset Selection／Importance／Relevance/feature-importance-map.png]]
# TODO

resources: [https://towardsdatascience.com/6-types-of-feature-importance-any-data-scientist-should-master-1bfd566f21c9](https://towardsdatascience.com/6-types-of-feature-importance-any-data-scientist-should-master-1bfd566f21c9)

> [!expand]- Click here to expand...
> Feature importance is a fundamental concept for Machine Learning practitioners.
>
> Due to its simplicity and intuitiveness, this indicator is not only constantly monitored by data scientists, but <strong>often communicated to the non-technical stakeholders of a predictive model</strong>.
>
> But, despite being intuitive, the idea of “feature importance” is also somewhat vague. In fact, there are many different ways to calculate it. So it’s important to know them, along with their pros and cons, to make sure that we are answering exactly the question that we want to answer.
>
> The purpose of this article is to shed some light on the various approaches that may be taken to calculate feature importance.
> # But what do we mean by “feature importance”?
>
> Before delving into the topic, it’s advisable that we agree upon what do we mean by “feature importance”.
>
> Suppose that we have a dataframe— called <em>X </em>— where each row represents an “observation” and each column represents a characteristic (or “feature”). We also have a phenomenon (or “target variable”) that we would like to predict about each observation.
>
> Feature importance is <strong>a score between 0 and 100</strong> assigned to each column (or feature), telling <strong>how powerful is that feature in predicting the target variable</strong>.
>
> Note that we also require that <strong>the sum of all features should be 100</strong>. So we are implicitly assuming that we have observed all the characteristics that may be useful to explain the target variable.
> # A taxonomy of feature importance
>
> Let’s start with a conceptual map of the types of feature importance.
>
> A conceptual map of feature importance categories.
>
> ![[Feature／Variable／Attribute Subset Selection／Importance／Relevance/feature-importance-map.png]]
>
> The first distinction that we encounter is between univariate and multivariate importance. The difference between the two is that:
> - <strong>Univariate </strong>importance considers each feature <strong>individually</strong>.
> - <strong>Multivariate </strong>importance measures the contribution of each feature <strong>conditionally to all the other features</strong>.
>
> These two types of importance convey a very different meaning, we could say “orthogonal”, to each other. This is why I personally prefer to <strong>provide 2 types of importance: one univariate and one multivariate</strong>. In this way, the final user can get a more complete picture.
> # 1. Univariate
>
> The goal of univariate importance is to get <strong>a score of how much the target variable depends from each feature, ignoring all the other features</strong>. The score can be obtained from a closed formula (e.g. Pearson correlation) or from a predictive model (e.g. curve under ROC curve of a random forest). Then, the scores of all the features are normalized to sum 100.
>
> In general, these are the main pros and cons of univariate importance:
> - <strong>Pros</strong>: It is easy to grasp, since we humans tend to reason in univariate terms. Moreover, it doesn’t suffer from correlated features.
> - <strong>Cons</strong>: It may oversimplify the reality. In fact, it doesn’t take into account how the features interplay among them.
>
> Let me explain what I mean when I say that univariate importance doesn’t suffer from correlated features.
>
> Suppose you have 2 features, height and age, and you use a random forest to predict your target variable. This is their importance:
>
> ![[Feature／Variable／Attribute Subset Selection／Importance／Relevance/Feature importance (2 features).png|400]]
>
> Feature importance (2 features)
>
> They are equally important, both close to 50%.
>
> However, what happens if you have <strong>features that are highly correlated among them</strong>? If, for instance, you have not only age in years, but also age in days and age in months and you try to calculate multivariate importance, this is what you get:
>
> ![[Feature／Variable／Attribute Subset Selection／Importance／Relevance/Multivariate feature importance.png|400]]
>
> Multivariate feature importance
>
> Since the 3 features about age carry the same information, the overall importance of age (roughly 50%) is practically shared among them.
>
> But if we used univariate importance, we get a different picture, namely all features get approximately the same level of importance, which reflects more accurately the truth:
>
> ![[Feature／Variable／Attribute Subset Selection／Importance／Relevance/Univariate feature importance.png|400]]
>
> Univariate feature importance
>
> Now that we have seen the pros and cons of univariate importance, let’s see some methods that belong to this category. Many algorithms can be used, but, as an example, we will see 3 relevant methods implemented in Python.
> ## <strong>- F-statistic</strong>
>
> The simplest type of univariate importance is given by [F-statistic](https://en.wikipedia.org/wiki/F-test) (also called ANOVA) for categorical target variables. In this case, you want to predict a target variable consisting of 2 or more classes, based on the value of a numeric feature. Then, F-statistic is calculated as the <strong>ratio between-group-variability and the within-group-variability of the feature</strong>.
>
> Note that, <strong>for a continuous target variable</strong>,<strong> this is equivalent to using Pearson correlation</strong>, since correlation can be “converted” to F-statistic through a [simple formula](https://stats.stackexchange.com/questions/56881/whats-the-relationship-between-r2-and-f-test).
>
> Scikit-learn has two functions for handling both the categorical and the continuous case, respectively <code>f\_classif</code> and <code>f\_regression</code> , so you can use it through:
> <span style="white-space: pre-wrap"><code>from sklearn.feature\_selection import f\_classiff = pd.Series(f\_classif(X, y)\[0\], index = X.columns)</code><br><code>fimpo = f / f.sum() \* 100</code></span>
>
> if <code>y</code> is categorical, or
> <span style="white-space: pre-wrap"><code>from sklearn.feature\_selection import f\_regressionf = pd.Series(f\_regression(X, y)\[0\], index = X.columns)</code><br><code>fimpo = f / f.sum() \* 100</code></span>
>
> if <code>y</code> is continuous.
> ## - Maximal Information Coefficient
>
> F-statistic or Pearson correlation are very simple. In fact, the first one addresses only differences between means and the second one only linear relationships.
>
> A more robust approach would be to use [Mutual Information](http://www.scholarpedia.org/article/Mutual_information), which can be thought as the reduction in uncertainty about one random variable given knowledge of another. Note that this accounts also for <strong>non-linear relationships</strong>.
>
> However, the main drawback of MI is that it requires the feature to be discrete, which often is not the case. [Maximal Information Coefficient](https://en.wikipedia.org/wiki/Maximal_information_coefficient#:~:text=In%20statistics%2C%20the%20maximal%20information,(MINE)%20class%20of%20statistics.) is designed to overcome this issue, because it automatically bins the continuous features for us, in a way such that the MI between them is maximal.
>
> In Python, you can find an implementation of MIC in the library Minepy (which you can install through <code>pip install minepy</code> ). Supposing that <code>X</code> is a Pandas Dataframe and <code>y</code> is a Pandas Series, you can obtain the MIC of each feature with:
> <span style="white-space: pre-wrap"><code>from minepy import MINEdef get\_mic(x, y):</code><br><code>    mine = MINE()</code><br><code>    mine.compute\_score(x, y)</code><br><code>    return mine.mic()f = X.apply(lambda feature: get\_mic(feature, y))</code><br><code>fimpo = f / f.sum() \* 100</code></span>
>
> ## - Predictive Power Score
>
> Since we want to estimate the relationship between one feature and one target variable, why not fitting a predictive model, such as a decision tree, on that single feature? This is the idea behind Predictive Power Score (PPS), which was first presented in [this Towards Data Science article](https://towardsdatascience.com/rip-correlation-introducing-the-predictive-power-score-3d90808b9598).
>
> The trick is that the model is non-linear, so it is able to catch also <strong>non linear relationships</strong>. Moreover, PPS has some other convenient properties, such as being not symmetrical, and being implemented for each possible combination of categorical/numerical feature/target.
>
> The dedicated Python library can be installed via <code>pip install ppscore</code>.
> <span style="white-space: pre-wrap"><code>import ppscoref = ppscore.predictors(pd.concat(\[X, y\], axis = 1),</code><br><code>  column\_target).set\_index(‘x’)\[‘ppscore’\]</code><br><code>fimpo = f / f.sum() \* 100</code></span>
>
> # 2. Multivariate
>
> Multivariate importance seeks to answer the question: what is the overall importance of a feature, <strong>considering also what we know about all the other features</strong>? In other words, it considers also interactions among features.
>
> Let’s see the pros and cons of multivariate importance.
> - <strong>Pros</strong>: It is more complete, because it takes into account interactions. Moreover, it is useful to demistify predictive models.
> - <strong>Cons</strong>: As shown in the paragraph above, it may be misleading when features are highly correlated.
>
> Let’s borrow an example from [this paper by Lawrence Hamilton](https://www.researchgate.net/publication/240776010_Who_Cares_about_Polar_Regions_Results_from_a_Survey_of_US_Public_Opinion) to explain why interactions are important. Education level may not say much about how worried a person is about rising sea level. But, if you combine this feature with political ideology, it suddenly becomes relevant. Therefore, the univariate importance of education level for this topic is low, whereas its multivariate importance is high.
>
> ![[Feature／Variable／Attribute Subset Selection／Importance／Relevance/An example of interaction between features (education and political ideology) in predicting concern about sea level rise.png|500]]
>
> An example of interaction between features (education and political ideology) in predicting concern about sea level rise. \[[Hamilton, Who Cares about Polar Regions? Results from a Survey of U.S. Public Opinion, 2008](https://www.researchgate.net/publication/240776010_Who_Cares_about_Polar_Regions_Results_from_a_Survey_of_US_Public_Opinion)\]
>
> Within multivariate importance, one can differentiate between two sub-categories:
> - <strong>Fit-time</strong>: Feature importance is available as soon as the model is trained.
> - <strong>Predict-time</strong>: Feature importance is available only after the model has scored on some data.
>
> Let’s see each of them separately.
> # <strong>3. Fit-time</strong>
>
> In fit-time, feature importance can be computed at the end of the training phase. So, <strong>it reflects what the model has learnt on training data</strong>. Simplifying a bit, the more one feature has been used during the training phase, the more important is the feature.
>
> This is also called “intrinsic” importance, because the calculation method is model-specific.
> - <strong>Pros</strong>: It is fast, since it can be extrapolated directly from the trained model, so nothing is required besides training the model. It is also convenient because it is built-in in some Python models. For instance, in Scikit-learn, it’s enough to call <code>model.feature\_importances\_</code>.
> - <strong>Cons</strong>: It may assign a high importance to features that do not work well on unseen data. Moreover, it is model dependent: for some models it is difficult, if not impossible, to calculate. Moreover, impurity-based feature importance for trees are strongly biased in favor of high cardinality features (see [Scikit-learn documentation](https://scikit-learn.org/stable/modules/permutation_importance.html)).
>
> Since fit-time importance is model-dependent, we will see just examples of methods that are valid for tree-based models, such as random forest or gradient boosting, which are the most popular ones.
> ## - Impurity Reduction
>
> In decision trees, splits are chosen in order to reduce a measure of impurity (such as Gini, Entropy or MSE) within groups of observations. Therefore, it is natural to consider the features that are responsible for a greatest decrease in impurity as the most important ones.
>
> Thus, the importance of feature <em>f</em> is calculated as the average impurity decrease of all nodes that split on <em>f</em> (weighted by the number of observations that are in that node).
>
> This is the default importance that you get calling <code>model.feature\_importances\_</code> for Scikit-learn models.
>
> For instance,
> <span style="white-space: pre-wrap"><code>from sklearn.ensemble import RandomForestClassifierrf = RandomForestClassifier().fit(X, y)</code><br><code>fimpo = pd.Series(rf.feature\_importances\_ \* 100, index = X.columns)</code></span>
>
> ## - Split Count
>
> Another approach, described [here](https://proceedings.neurips.cc/paper/2019/file/702cafa3bb4c9c86e4a3b6834b45aedd-Paper.pdf), is simply to count the number of times a feature has been used to split across all the trees. Intuitively, a feature that has been used 10 times is twice as important as a feature that has been used only 5 times.
>
> This method is natively available in the XGBoost library:
> <span style="white-space: pre-wrap"><code>from xgboost import XGBClassifierxgb = XGBClassifier().fit(X, y)</code><br><code>f = pd.Series(xgb.get\_booster().get\_score(importance\_type='weight'))</code><br><code>fimpo = f / f.sum() \* 100</code></span>
>
> ## - Coverage
>
> Counting the number of splits may be misleading. For instance, some splits may concern just few observations, so they are not actually that relevant. To overcome this issue, one can weight each split by its coverage, that is the number of observations affected by the split.
>
> This method is natively available in the XGBoost library:
> <span style="white-space: pre-wrap"><code>from xgboost import XGBClassifierf = pd.Series(xgb.get\_booster().get\_score(importance\_type='cover'))</code><br><code>fimpo = f / f.sum() \* 100</code></span>
>
> # 4. Predict-time
>
> The main drawback of fit-time importance is that it’s model-dependent. Thus, for some models, such as logistic regression or neural network, it would be very troublesome to calculate.
>
> To overcome this issue, there exists a set of methods that can be calculated at predict-time, i.e. <strong>after the model has completed the training phase</strong>. This also implies that these methods <strong>can be applied on datasets other than the training dataset</strong>.
> - <strong>Pros</strong>: It is model-agnostic. Moreover, since it is done at predict-time, it can be calculated for different datasets, which proves very useful in real applications.
> - <strong>Cons</strong>: It can be slow to compute, because it may require to make iterations (permutation importance) or to employ complex methods (SHAP).
>
> Within the category of Predict-time methods, there are two main types of algorithms:
> - <strong>Target required</strong>, besides the input data for the model, you also need to know the target variable;
> - <strong>Target not required</strong>: you can use these methods even if you don’t know the target variable.
>
> Let’s see each of them separately.
> # 5. Target required
>
> Within this category, the main algorithm is “Permutation Importance”. These are its pros and cons:
> - <strong>Pros</strong>: It is model-agnostic. Moreover, since it is done at predict-time, it can be calculated for different datasets, which proves very useful in real applications.
> - <strong>Cons</strong>: It cannot be used when the target variable is not available. It suffers from highly correlated features, in fact when you randomly shuffle a feature, the model will still use the other features that are correlated with the one you have shuffled. This will result in an underestimate of the importance of all the correlated features.
>
> ## - Permutation Importance
>
> Suppose you have already trained a predictive model <em>M</em>.
>
> As the name implies, this algorithm randomly shuffles one feature at a time, and makes the prediction of model <em>M</em> on the dataset containing the shuffled column. Then, it calculates the performance score (for instance, the area under the ROC curve) on the prediction.
>
> This is repeated for all the features in the dataset. The idea is that the worsening in the performance score (compared to the performance of <em>M</em> on the “unspoilt” dataset) is proportional to the importance of the feature. Note that this procedure is carried out on the test dataset, not on the dataset on which the model was trained on.
>
> Why shuffling the feature and not, for instance, imputing a fixed value? Because permutation allows to preserve the original distribution. And this is safer since we want to exploit a model that has been on the original feature.
>
> Permutation importance is readily available in Scikit-learn:
> <span style="white-space: pre-wrap"><code>from sklearn.inspection import permutation\_importancef = permutation\_importance(model, X, y)\[‘importances\_mean’\]</code><br><code>fimpo = f / f.sum() \* 100</code></span>
>
> # 6. Target not required
>
> In real applications, the whole point of machine learning is to make predictions on instances for which we still haven’t observed the target variable. So, it is particularly useful to calculate feature importance on these instances. This is the main characteristic of this set of methods.
> - <strong>Pros</strong>: It can be applied also to datasets for which we don’t have the target variable. This is vital for real-world applications, when we want to compute feature importance for latest data on which we are making predictions.
> - <strong>Cons</strong>: It may be very slow to compute.
>
> The methods that we will see are based on Shap values. Shap can be calculated through homonymous Python library. Supposing that you have already trained a model, this is how you can get the respective Shap values:
> <span style="white-space: pre-wrap"><code>import shapexplainer <strong>=</strong> shap.Explainer(model)</code><br><code>shap\_values <strong>=</strong> pd.DataFrame(explainer(X).values, columns <strong>=</strong> X.columns)</code></span>
>
> ## - Absolute Importance
>
> Since each Shap value tells how much that feature’s value “moves” the final prediction up or down, the sum of all the Shap values of a feature is the ideal proxy of the relevance of that feature on the chosen dataset. Of course, before summing them up, Shap values must be taken in absolute value because negative effects are as important as positive effects.
> <span style="white-space: pre-wrap"><code>f = shap\_values.abs().sum()</code><br><code>fimpo = f / f.sum() \* 100</code></span>
>
> ## - Main Factor
>
> Rather than the overall effects, we may be interested to know what is the single most relevant feature for each observation. This approach is interesting, because feature importance can be interpreted directly as a percentage, so it is much easier to understand. For example, if the importance of “Age” was 25%, this would mean that for 25% of the observations “Age” was the most important feature.
>
> To obtain this quantity is enough to take the highest Shap value by row, and then count the value. Supposing that Shap values are contained into a Pandas Dataframe:
> <span style="white-space: pre-wrap"><code>fimpo = shap\_values.abs().idxmax(axis = 1).value\_counts(normalize=True) \* 100</code></span>
>
> ## - Main Factor with Sign
>
> As we have seen, Shap values may be positive or negative. Positive values contribute to increase the final prediction, while negative values contribute to lower the final prediction. Thus, it is sometimes interesting to know which features impact most in either of the two directions.
>
> This corresponds to calculating “Main Factor” importance that we have seen in the previous paragraph, just after having removed negative or positive values, depending on which sign you are interested in.
>
> For example, if you want to know which features are most relevant in raising the final prediction, then you should put a floor at 0:
> <span style="white-space: pre-wrap"><code>fimpo = shap\_values.clip(lower = 0).abs().idxmax(axis = 1).value\_counts(normalize = True) \* 100</code></span>
>
> On the contrary, if you want to know which features are most relevant in lowering the final prediction, then you should put a cap at 0:
> <span style="white-space: pre-wrap"><code>fimpo = shap\_values.clip(upper = 0).abs().idxmax(axis = 1).value\_counts(normalize = True) \* 100</code></span>
>
> # Comparing importance
>
> Let’s see the outcome of the methods we have seen above on [the most well-known dataset of all times](https://www.kaggle.com/c/titanic):
>
> ![[Feature／Variable／Attribute Subset Selection／Importance／Relevance/Feature importance methods compared on Titanic dataset.png]]
>
> Feature importance methods compared on Titanic dataset. \[Image by Author\]
>
> As you can see, the estimates are pretty different across the various methods.
>
> Sex is surprisingly high in permutation and main-factor importance, consistently higher than all the univariate methods. This suggests that Sex has probably many interactions with the other features.
>
> It is also interesting to notice how different “main factor positive” and “main factor negative” are from “main factor”. For example, looking at Sex, the fact that “main factor negative” is higher than “main factor positive” suggests that Sex is more often a decisive factor in “condemning” a passenger’s life, rather than saving it.
>
> In general, the takeaway is that it is useful to compare different types of importance (generally at least one univariate and one multivariate) to get insights about both the phenomenon and the predictive model.
