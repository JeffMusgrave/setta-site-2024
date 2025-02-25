---
title: "Efficient Parameter Sweeps with Setta: From Manual Testing to Automated Exploration"
description: "Learn how to use Setta's parameter sweep features to automate your experimentation workflow and discover optimal configurations."
date: 2024-02-20
tags: ["parameter-sweep", "automation", "machine-learning", "advanced"]
---

Parameter sweeps are essential for finding optimal configurations, but they often require custom scripts and lots of boilerplate code. Setta makes this process painless with built-in sweep support. Let's explore how.

## Understanding Parameter Sweeps

Before diving into the code, let's understand what a parameter sweep is. When you're tuning a system (whether it's a machine learning model, an image processing pipeline, or any other configurable system), you often need to try multiple combinations of parameters to find the best configuration.

For example, in machine learning, you might want to try:

- Different learning rates: 0.1, 0.01, 0.001
- Different batch sizes: 16, 32, 64
- Different optimizers: Adam, SGD, RMSprop

Manually testing all combinations would be time-consuming and error-prone.

## Implementing Sweeps in Setta

Here's how you can implement a parameter sweep using Setta:

```python
from setta import configure, sweep
from typing import Literal

@configure
@sweep(n_jobs=-1)  # Use all available CPU cores
def train_model(
    learning_rate: float = sweep([0.1, 0.01, 0.001]),
    batch_size: int = sweep([16, 32, 64]),
    optimizer: Literal["adam", "sgd", "rmsprop"] = sweep(["adam", "sgd"]),
    epochs: int = 10
) -> float:
    """Train model and return validation accuracy."""
    # Your training code here
    return validation_accuracy

# Setta will automatically:
# 1. Run all combinations (3 x 3 x 2 = 18 total runs)
# 2. Track results
# 3. Visualize the outcomes
```

## Visualizing Results

Setta automatically generates interactive visualizations of your sweep results:

- Parallel coordinates plots for understanding parameter relationships
- Surface plots for pairwise parameter interactions
- Bar charts for individual parameter effects
- Automatic identification of best configurations

## Best Practices

When running parameter sweeps:

1. **Start Broad, Then Refine**: Begin with a wide range of values, then zoom in on promising regions
2. **Monitor Resource Usage**: Setta provides built-in resource monitoring
3. **Use Asynchronous Execution**: For long-running sweeps, use Setta's async support:

```python
@configure
@sweep(async_run=True)
async def long_running_sweep(...):
    pass
```

## Saving and Sharing Results

Setta automatically saves sweep results in a git-friendly format:

```yaml
# sweep_results.yaml
best_config:
  learning_rate: 0.001
  batch_size: 32
  optimizer: adam
  validation_accuracy: 0.945

all_runs:
  - config: { ... }
    result: 0.923
  - config: { ... }
    result: 0.945
```

This makes it easy to version control your experiments and share results with your team.

Stay tuned for more advanced Setta tutorials!
