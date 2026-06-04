---
title: "Distance Covariance／Covariation - Java Code"
created: 2023-07-27T18:11:16.000-05:00
modified: 2023-07-27T18:11:53.990-05:00
parent: "[[Distance Covariance／Covariation]]"
children: []
---
[[Java]] code calculating [[Distance Covariance／Covariation|distance covariation]]
```
    private static double distanceCovariance(double[] x, double[] y) {
        int numSamples = x.length;

        double[][] a = new double[numSamples][numSamples];
        double[][] b = new double[numSamples][numSamples];
        for (int i = 0; i < numSamples; i++) {
            for (int j = 0; j < numSamples; j++) {
                a[i][j] = Math.abs(x[i] - x[j]);
                b[i][j] = Math.abs(y[i] - y[j]);
            }
        }

        double aMean = average(a);
        double bMean = average(b);
        double[] aRowMeans = new double[numSamples];
        double[] aColMeans = new double[numSamples];
        double[] bRowMeans = new double[numSamples];
        double[] bColMeans = new double[numSamples];
        for (int i = 0; i < numSamples; i++) {
            for (int j = 0; j < numSamples; j++) {
                aRowMeans[i] += a[i][j];
                aColMeans[i] += a[j][i];
                bRowMeans[i] += a[i][j];
                bColMeans[i] += a[j][i];
            }
        }
        for (int i = 0; i < numSamples; i++) {
            aRowMeans[i] /= numSamples;
            aColMeans[i] /= numSamples;
            bRowMeans[i] /= numSamples;
            bColMeans[i] /= numSamples;
        }

        double[][] A = new double[numSamples][numSamples];
        double[][] B = new double[numSamples][numSamples];
        for (int i = 0; i < numSamples; i++) {
            for (int j = 0; j < numSamples; j++) {
                A[i][j] = a[i][j] - aRowMeans[i] - aColMeans[j] + aMean;
                B[i][j] = b[i][j] - bRowMeans[i] - bColMeans[j] + bMean;
            }
        }

        double distanceCovariance = 0d;
        for (int i = 0; i < numSamples; i++) {
            for (int j = 0; j < numSamples; j++) {
                distanceCovariance += A[i][j] * B[i][j];
            }
        }

        return distanceCovariance / (numSamples * numSamples);
    }
```
