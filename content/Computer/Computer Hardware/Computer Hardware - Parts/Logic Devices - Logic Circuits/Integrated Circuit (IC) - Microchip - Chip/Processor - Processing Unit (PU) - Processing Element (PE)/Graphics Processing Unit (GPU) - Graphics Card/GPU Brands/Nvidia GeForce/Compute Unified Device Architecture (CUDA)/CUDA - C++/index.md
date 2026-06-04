---
title: "CUDA - C++"
created: 2025-10-04T11:41:25.710-05:00
modified: 2025-10-04T11:47:26.508-05:00
parent: "[[Compute Unified Device Architecture (CUDA)]]"
children: []
---
# Introduction

CUDA core 3 abstractions:
- hierarchy of thread groups
- shared memories
- barrier synchronization

across blocks  - blocks solve sub-problems independently in parallel
within a block - threads solve a sub-problem cooperatively in parallel

Thread Hierarchy

The index of a thread and its thread ID:
- 1D Block of size (Dx) - the thread ID of a thread index (x) is (x)
- 2D Block of size (Dx, Dy) - the thread ID of a thread index (x, y) is (x + y Dx)
- 3D Block of size (Dx, Dy, Dz) - the thread ID of a thread index (x, y, z) is (x + y Dx + z Dx Dy)

Blocks per Streaming-Multiprocessor
- On older GPUs (like Fermi, compute 2.x): 8 blocks per SM max.
- On Kepler / Maxwell (3.x / 5.x): up to 16 blocks per SM.
- On Volta, Turing, Ampere, Hopper: up to 32 blocks per SM.

So the theoretical maximum is architecture-specific, but the real number of blocks per SM at runtime also depends on how much memory/registers each block needs.

Blocks are organized into a grid that is either:
- one-dimensional
- two-dimensional
- three-dimensional

<code><font style="color: rgb(122,134,154);">\<\<\<...\>\>\></font></code> syntax determines:
- the number of threads per block
- the number of blocks per grid

<code><font style="color: rgb(122,134,154);">blockIdx</font></code> - identifies a block within a grid by a 1D, 2D, or 3D unique index
<code><font style="color: rgb(122,134,154);">blockDim</font></code> - identifies the dimension size of the thread block
# 1 Hello World Example
```
#include <stdio.h>

// Kernel function that runs on the GPU
__global__ void hello_cuda() {
    // Calculate thread ID
    int thread_id = threadIdx.x;
    int block_id = blockIdx.x;
    
    printf("Hello from thread %d in block %d!\n", thread_id, block_id);
}

int main() {
    // Launch kernel with 2 blocks, each with 3 threads
    hello_cuda<<<2, 3>>>();
    
    // Wait for GPU to finish
    cudaDeviceSynchronize();
    
    printf("CPU: Kernel execution complete!\n");
    return 0;
}
```
```
nvcc first_cuda.cu -o first_cuda
./first_cuda
```
# 2 Memory Management
```
#include <stdio.h>
#include <cuda_runtime.h>

__global__ void vector_add(int *a, int *b, int *c, int n) {
    int idx = threadIdx.x + blockIdx.x * blockDim.x;
    
    if (idx < n) {
        c[idx] = a[idx] + b[idx];
    }
}

int main() {
    const int n = 100;
    size_t size = n * sizeof(int);
    
    // Host pointers
    int *h_a, *h_b, *h_c;
    
    // Device pointers
    int *d_a, *d_b, *d_c;
    
    // Allocate host memory
    h_a = (int*)malloc(size);
    h_b = (int*)malloc(size);
    h_c = (int*)malloc(size);
    
    // Allocate device memory
    cudaMalloc(&d_a, size);
    cudaMalloc(&d_b, size);
    cudaMalloc(&d_c, size);
    
    // Initialize host arrays
    for (int i = 0; i < n; i++) {
        h_a[i] = i;
        h_b[i] = i * 2;
    }
    
    // Copy data from host to device
    cudaMemcpy(d_a, h_a, size, cudaMemcpyHostToDevice);
    cudaMemcpy(d_b, h_b, size, cudaMemcpyHostToDevice);
    
    // Launch kernel
    int block_size = 256;
    int grid_size = (n + block_size - 1) / block_size;
    
    vector_add<<<grid_size, block_size>>>(d_a, d_b, d_c, n);
    
    // Copy result back to host
    cudaMemcpy(h_c, d_c, size, cudaMemcpyDeviceToHost);
    
    // Verify results
    printf("Results (first 10 elements):\n");
    for (int i = 0; i < 10; i++) {
        printf("%d + %d = %d\n", h_a[i], h_b[i], h_c[i]);
    }
    
    // Free memory
    free(h_a); free(h_b); free(h_c);
    cudaFree(d_a); cudaFree(d_b); cudaFree(d_c);
    
    return 0;
}
```
# 3 Thread Hierarchy and Indexing
```
#include <stdio.h>

__global__ void thread_info() {
    // Various thread and block indices
    int thread_id = threadIdx.x;
    int block_id = blockIdx.x;
    int block_dim = blockDim.x;
    int grid_dim = gridDim.x;
    
    // Global thread ID
    int global_id = threadIdx.x + blockIdx.x * blockDim.x;
    
    // Calculate total threads
    int total_threads = blockDim.x * gridDim.x;
    
    printf("Thread %d (Block %d) - Global ID: %d/%d\n", 
           thread_id, block_id, global_id, total_threads);
}

int main() {
    // Launch with 3 blocks, 4 threads each
    dim3 blocks(3);     // 3 blocks in x-dimension
    dim3 threads(4);    // 4 threads per block
    
    thread_info<<<blocks, threads>>>();
    cudaDeviceSynchronize();
    
    return 0;
}
```
# 4 2D Grid Example
```
#include <stdio.h>

__global__ void matrix_info() {
    // 2D thread and block indices
    int row = threadIdx.y + blockIdx.y * blockDim.y;
    int col = threadIdx.x + blockIdx.x * blockDim.x;
    
    printf("Thread (%d, %d) in block (%d, %d)\n", 
           threadIdx.x, threadIdx.y, blockIdx.x, blockIdx.y);
}

int main() {
    // 2D grid: 2x3 blocks, each with 2x2 threads
    dim3 blocks(2, 3);      // 2 blocks in x, 3 in y
    dim3 threads(2, 2);     // 2 threads in x, 2 in y per block
    
    matrix_info<<<blocks, threads>>>();
    cudaDeviceSynchronize();
    
    return 0;
}
```
# 5 Matrix Multiplication Example
```
#include <stdio.h>
#include <cuda_runtime.h>

// Simple matrix multiplication kernel
__global__ void matrix_multiply(int *a, int *b, int *c, int n) {
    int row = blockIdx.y * blockDim.y + threadIdx.y;
    int col = blockIdx.x * blockDim.x + threadIdx.x;
    
    if (row < n && col < n) {
        int sum = 0;
        for (int k = 0; k < n; k++) {
            sum += a[row * n + k] * b[k * n + col];
        }
        c[row * n + col] = sum;
    }
}

void initialize_matrix(int *matrix, int n) {
    for (int i = 0; i < n * n; i++) {
        matrix[i] = rand() % 10;
    }
}

void print_matrix(int *matrix, int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            printf("%d ", matrix[i * n + j]);
        }
        printf("\n");
    }
}

int main() {
    const int n = 4;
    size_t size = n * n * sizeof(int);
    
    // Host matrices
    int *h_a = (int*)malloc(size);
    int *h_b = (int*)malloc(size);
    int *h_c = (int*)malloc(size);
    
    // Device matrices
    int *d_a, *d_b, *d_c;
    cudaMalloc(&d_a, size);
    cudaMalloc(&d_b, size);
    cudaMalloc(&d_c, size);
    
    // Initialize matrices
    initialize_matrix(h_a, n);
    initialize_matrix(h_b, n);
    
    // Copy to device
    cudaMemcpy(d_a, h_a, size, cudaMemcpyHostToDevice);
    cudaMemcpy(d_b, h_b, size, cudaMemcpyHostToDevice);
    
    // Launch kernel
    dim3 blocks(2, 2);      // For 4x4 matrix with 2x2 threads per block
    dim3 threads(2, 2);
    
    matrix_multiply<<<blocks, threads>>>(d_a, d_b, d_c, n);
    
    // Copy result back
    cudaMemcpy(h_c, d_c, size, cudaMemcpyDeviceToHost);
    
    // Print results
    printf("Matrix A:\n");
    print_matrix(h_a, n);
    
    printf("\nMatrix B:\n");
    print_matrix(h_b, n);
    
    printf("\nResult C:\n");
    print_matrix(h_c, n);
    
    // Cleanup
    free(h_a); free(h_b); free(h_c);
    cudaFree(d_a); cudaFree(d_b); cudaFree(d_c);
    
    return 0;
}
```
# 5a Matrix Addition
```
// Kernel definition
__global__ void MatAdd(float A[N][N], float B[N][N],
float C[N][N])
{
    int i = blockIdx.x * blockDim.x + threadIdx.x;
    int j = blockIdx.y * blockDim.y + threadIdx.y;
    if (i < N && j < N)
        C[i][j] = A[i][j] + B[i][j];
}

int main()
{
    ...
    // Kernel invocation
    dim3 threadsPerBlock(16, 16);
    dim3 numBlocks(N / threadsPerBlock.x, N / threadsPerBlock.y);
    MatAdd<<<numBlocks, threadsPerBlock>>>(A, B, C);
    ...
}
```
# 6 Shared Memory Example
```
__global__ void shared_memory_example(int *input, int *output) {
    __shared__ int shared_data[256];
    
    int tid = threadIdx.x;
    shared_data[tid] = input[tid];
    
    __syncthreads();  // Synchronize threads in block
    
    // Process data in shared memory
    output[tid] = shared_data[255 - tid];  // Reverse order
}
```
# 7 Error Handling
```
#include <stdio.h>

#define CUDA_CHECK(call) \
    do { \
        cudaError_t error = call; \
        if (error != cudaSuccess) { \
            printf("CUDA error: %s at %s:%d\n", \
                   cudaGetErrorString(error), __FILE__, __LINE__); \
            exit(1); \
        } \
    } while(0)

__global__ void kernel() {
    // Kernel code
}

int main() {
    // Safe memory allocation
    int *d_array;
    CUDA_CHECK(cudaMalloc(&d_array, 100 * sizeof(int)));
    
    // Safe kernel launch
    kernel<<<1, 1>>>();
    CUDA_CHECK(cudaGetLastError());
    CUDA_CHECK(cudaDeviceSynchronize());
    
    // Safe memory free
    CUDA_CHECK(cudaFree(d_array));
    
    return 0;
}
```
