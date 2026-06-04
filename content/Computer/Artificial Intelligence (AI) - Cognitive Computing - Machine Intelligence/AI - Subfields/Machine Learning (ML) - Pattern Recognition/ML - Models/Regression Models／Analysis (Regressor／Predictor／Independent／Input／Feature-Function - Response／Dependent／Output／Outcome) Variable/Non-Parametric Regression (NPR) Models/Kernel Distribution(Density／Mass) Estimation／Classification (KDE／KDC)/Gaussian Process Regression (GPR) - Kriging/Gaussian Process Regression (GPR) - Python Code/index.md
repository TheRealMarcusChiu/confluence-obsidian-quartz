---
title: "Gaussian Process Regression (GPR) - Python Code"
created: 2021-11-13T23:10:06.189-06:00
modified: 2021-11-13T23:30:14.781-06:00
parent: "[[Gaussian Process Regression (GPR) - Kriging]]"
children: []
---
This [[Python]] GPR implementation uses the following libraries
```
import numpy as np
import matplotlib.pyplot as plt
```

The [[Radial Basis "Kernel" Function (RBF)|squared-exponential function]] is used as its [[Covariance Function (i.e. Kernel Function)|covariance-function]]
```
def squared_exponential_covariance_function(x, y, params):
    return params[0] * np.exp(-0.5 * params[1] * np.subtract.outer(x, y) ** 2)
```

TODO
```
def conditional(x_new, x, y, params):
    B = squared_exponential_covariance_function(x_new, x, params)
    C = squared_exponential_covariance_function(x, x, params)
    A = squared_exponential_covariance_function(x_new, x_new, params)
    mu = np.linalg.inv(C).dot(B.T).T.dot(y)
    sigma = A - B.dot(np.linalg.inv(C).dot(B.T))
    return mu.squeeze(), sigma.squeeze()
```

TODO

![[Gaussian Process Regression (GPR) - Python Code/gaussian-process-regression-python-code-1.png]]
# Entire Code

> [!expand]- Click here to expand...
> ```py
> import numpy as np
> import matplotlib.pyplot as plt
>
> def squared_exponential_covariance_function(x, y, params):
>     return params[0] * np.exp(-0.5 * params[1] * np.subtract.outer(x, y) ** 2)
>
> def conditional(x_new, x, y, params):
>     B = squared_exponential_covariance_function(x_new, x, params)
>     C = squared_exponential_covariance_function(x, x, params)
>     A = squared_exponential_covariance_function(x_new, x_new, params)
>     mu = np.linalg.inv(C).dot(B.T).T.dot(y)
>     sigma = A - B.dot(np.linalg.inv(C).dot(B.T))
>     return mu.squeeze(), sigma.squeeze()
>
> def predict(x, data, kernel, params, sigma, t):
>     k = [kernel(x, y, params) for y in data]
>     Sinv = np.linalg.inv(sigma)
>     y_pred = np.dot(k, Sinv).dot(t)
>     sigma_new = kernel(x, x, params) - np.dot(k, Sinv).dot(k)
>     return y_pred, sigma_new
>
> covariance_function_parameters = [1, 10]
>
> training_x = [-2.2, -0.5, 0.1, 1.1, 1.9]
> training_y = [-1.5, 0.5, -0.2, 0.4, -1.3]
>
> covariance_matrix_training = squared_exponential_covariance_function(training_x, training_x, covariance_function_parameters)
>
> x_pred = np.linspace(-3, 3, 1000)
> predictions = [predict(i,
>                        training_x,
>                        squared_exponential_covariance_function,
>                        covariance_function_parameters,
>                        covariance_matrix_training,
>                        training_y)
>                for i in x_pred]
> y_pred, y_error_variance_pred = np.transpose(predictions)
>
> plt.errorbar(x_pred, y_pred, yerr=y_error_variance_pred, capsize=0)
> plt.plot(training_x, training_y, "ro")
> plt.show()
> ```
# Resources
- [https://blog.dominodatalab.com/fitting-gaussian-process-models-python](https://blog.dominodatalab.com/fitting-gaussian-process-models-python)
