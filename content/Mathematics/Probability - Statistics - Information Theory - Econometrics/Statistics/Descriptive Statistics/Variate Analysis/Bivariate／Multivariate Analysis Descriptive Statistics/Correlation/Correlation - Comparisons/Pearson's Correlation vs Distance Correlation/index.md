---
title: "Pearson's Correlation vs Distance Correlation"
created: 2021-11-11T23:56:10.386-06:00
modified: 2021-11-12T01:30:37.432-06:00
parent: "[[Correlation - Comparisons]]"
children: []
---
comparing:
- [[Pearson's Correlation Coefficient (R)]]
- [[Distance Correlation Coefficient]]

![[Pearson's Correlation vs Distance Correlation/pearsons-correlation-vs-distance-correlation.png|900]]
# Java Code
```
import java.util.function.Function;

public class SandboxMain2 {

    private static double function(double x, Function<Double, Double> function) {
        return function.apply(x);
    }

    private static double[] functionVectored(double[] x, Function<Double, Double> function) {
        double[] y = new double[x.length];
        for (int i = 0; i < x.length; i++) {
            y[i] = function(x[i], function);
        }
        return y;
    }

    public static void main(String[] args) {
        double[] x = {-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5};
        double[] y = functionVectored(x, d -> d * d);
        System.out.println("Distance Correlation: " + distanceCorrelation(x, y));
        System.out.println("Pearson's Correlation: " + pearsonsCorrelation(x, y));

        double[] xx = {-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5};
        double[] yy = functionVectored(xx, d -> d);
        System.out.println("Distance Correlation: " + distanceCorrelation(xx, yy));
        System.out.println("Pearson's Correlation: " + pearsonsCorrelation(xx, yy));

		// OUTPUTS
		// Distance Correlation: 0.24751528928983874
		// Pearson's Correlation: 0.0
		// Distance Correlation: 1.0
		// Pearson's Correlation: 1.0
    }

    private static double pearsonsCorrelation(double[] x, double[] y) {
        double covariance = covariance(x, y);
        double varianceX = covariance(x, x);
        double varianceY = covariance(y, y);
        return covariance / Math.sqrt(varianceX * varianceY);
    }

    private static double distanceCorrelation(double[] x, double[] y) {
        double distanceCovariance = distanceCovariance(x, y);
        double distanceVarianceX = distanceCovariance(x, x);
        double distanceVarianceY = distanceCovariance(y, y);
        return distanceCovariance / Math.sqrt(distanceVarianceX * distanceVarianceY);
    }

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

    private static double average(double[][] x) {
        double sum = 0;

        for (double[] doubles : x) {
            for (int j = 0; j < x.length; j++) {
                sum += doubles[j];
            }
        }

        return sum / (x.length * x.length);
    }

    private static double average(double[] x) {
        double average = 0d;
        for (double v : x) {
            average += v;
        }
        return average / x.length;
    }

    private static double covariance(double[] x, double[] y) {
        // 𝐶𝑜𝑣'(𝑋,𝑌) = [𝛴1≤𝑖≤𝑛(𝑥𝑖 - 𝑥̅)(𝑦𝑖 - 𝑦̅)] / (𝑛 - 1)
        double covariance = 0;
        double xMean = average(x);
        double yMean = average(y);
        for (int i = 0; i < x.length; i++) {
            covariance += (x[i] - xMean) * (y[i] - yMean);
        }
        return covariance / x.length;
    }
}
```
