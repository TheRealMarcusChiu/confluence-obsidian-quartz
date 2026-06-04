---
title: "Sparse Voxels Rasterization (SVRaster)"
created: 2025-09-08T19:15:44.991-05:00
modified: 2025-09-08T19:52:00.064-05:00
parent: "[[3D Reconstruction]]"
children: []
---
###### Sparse Voxels Rasterization (SVRaster)
````excerpt
- is a novel framework for real-time, high-fidelity 3D [[Radiance Fields|radiance field]] rendering that represents a scene using a grid of adaptive sparse voxels
- it was developed by [[Nvidia]] and collaborating institutions
- provides a fast, neural-network-free alternative to traditional methods like [[Neural Radiance Fields (NeRFs)]] and [[3D Gaussian Splatting (3DGS)|Gaussian Splatting]]
````
^excerpt

# Tutorial

```merge-table
{
  "rows": [
    [
      "![](https://www.youtube.com/watch?v=H02PiGeW-yk)",
      "```bash\n# Create a Python environment for SVRaster\nconda create -n svraster python=3.9\nconda activate svraster\n\n# Install Dependencies\npip install torch==2.5.0 torchvision==0.20.0 torchaudio==2.5.0 --index-url https://download.pytorch.org/whl/cu124\nconda install -y -c \"nvidia/label/cuda-12.4.0\" cuda-toolkit\n\ngit clone https://github.com/NVlabs/svraster.git\ncd svraster\n\npip install -r requirements.txt\n\ncd cuda\npip install -e .\n\ncd ..\npip install viser\n\n# Setup \nchmod +x run_colmap.sh\n\nmkdir data\ncd data\n\n# create project under data directory\nsvraster/\n├── run_colmap.sh\n├── data/\n│   └── bonsai-1/\n│       ├── images/              # <-- Place input images here\n│       └──                      # database.db and colmap results will be generated here\n\n# Run Script\n./run_colmap.sh bonsai-1 --matcher exhaustive\n\n# Train Model\npython train.py --eval --source_path data/bonsai-1 --model_path result/bonsai-1 --lambda_T_inside 0.01 --lambda_normal_dmean 0.001 --lambda_normal_dmed 0.001 --lambda_sparse_depth 0.01\n\n# View Model\npython viz.py result/bonsai-1\n```"
    ]
  ]
}
```
# Resources
- [https://github.com/jonstephens85/svraster/](https://github.com/jonstephens85/svraster/)
