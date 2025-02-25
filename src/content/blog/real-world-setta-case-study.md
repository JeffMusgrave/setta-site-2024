---
title: "Case Study: How Acme Corp Streamlined Their ML Pipeline with Setta"
description: "A deep dive into how a real team eliminated configuration complexity and improved collaboration using Setta. Learn from their journey and best practices."
date: 2024-02-15
tags: ["case-study", "machine-learning", "team-collaboration", "best-practices"]
---

At Setta, we love hearing how teams use our tools to solve real-world problems. Today, we're excited to share how Acme Corp's machine learning team transformed their workflow using Setta. This case study shows how they went from struggling with configuration management to having a streamlined, collaborative process.

## The Challenge

Acme's ML team faced several common challenges:

- **Configuration Sprawl**: Different team members had their own ways of handling configs
- **Collaboration Friction**: Sharing exact experimental configurations was difficult
- **Documentation Debt**: Config options were poorly documented
- **Reproducibility Issues**: Recreating specific experimental conditions was time-consuming

## The Solution

The team adopted Setta as their configuration management solution. Here's how they structured their project:

```
acme_ml/
├── configs/
│   ├── base_config.yaml
│   └── experiments/
├── src/
│   ├── training/
│   │   ├── train.py
│   │   └── validate.py
│   └── data/
│       └── preprocessing.py
└── notebooks/
    └── analysis.ipynb
```

Their main training configuration using Setta:

```python
from setta import configure, Depends
from typing import Literal, Optional
from pathlib import Path

class TrainingConfig:
    @configure
    def data_config(
        dataset_path: Path,
        val_split: float = 0.2,
        augmentations: list[str] = ["flip", "rotate"],
        cache_dir: Optional[Path] = None
    ):
        """Configure dataset and preprocessing options."""
        pass

    @configure
    def model_config(
        architecture: Literal["resnet", "vit", "custom"] = "resnet",
        pretrained: bool = True,
        custom_checkpoint: Optional[Path] = None
    ):
        """Configure model architecture and initialization."""
        pass

    @configure
    def train(
        data: dict = Depends(data_config),
        model: dict = Depends(model_config),
        batch_size: int = 32,
        epochs: int = 100,
        early_stopping: bool = True
    ):
        """Main training configuration."""
        pass
```

## Key Benefits

### 1. Improved Documentation

Setta automatically generated interactive documentation from their type hints and docstrings. New team members could quickly understand available options:

```python
@configure
def preprocess_batch(
    normalize: bool = True,
    normalize_method: Literal["standard", "minmax", "robust"] = "standard",
    clip_outliers: Optional[float] = None  # None or percentile threshold
):
    """Preprocess a batch of data.

    Args:
        normalize: Whether to normalize features
        normalize_method: Method of normalization
        clip_outliers: If set, clip values beyond this percentile
    """
    pass
```

### 2. Better Collaboration

Team members could easily share configurations:

```bash
# Export configuration
setta export my_experiment.yaml

# Share and reproduce
setta run train.py --config my_experiment.yaml
```

### 3. Experiment Tracking

Setta's integration with their experiment tracking system made it easy to log and compare runs:

```python
@configure
@log_experiment  # Custom decorator for their tracking system
def training_run(**config):
    metrics = train_model(**config)
    return metrics
```

## Results

After adopting Setta, the team saw:

- 60% reduction in time spent on configuration management
- 45% fewer configuration-related bugs
- 80% faster onboarding for new team members
- 100% reproducible experiments

## Lessons Learned

1. **Start Simple**: They began with basic configurations and gradually added complexity
2. **Document Everything**: They made full use of Python's type hints and docstrings
3. **Version Control**: They treated configurations as code and versioned them with git
4. **Automate Testing**: They added automated tests for their configurations:

```python
def test_config_validation():
    config = TrainingConfig.train()
    assert config.batch_size > 0
    assert 0 < config.data.val_split < 1
```

## Looking Forward

The team is now exploring advanced Setta features:

- Parameter sweep automation
- Distributed training configuration
- Custom UI components for specialized parameters

We're excited to see how they continue to evolve their workflow with Setta!

---

_Note: Some details have been modified to protect confidentiality, but the core learnings and patterns are real._
