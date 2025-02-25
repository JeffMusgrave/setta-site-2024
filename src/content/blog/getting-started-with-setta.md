---
title: "Getting Started with Setta: A Quick Guide to Configuration UIs"
description: "Learn how to transform your Python functions into interactive UIs with Setta in under 5 minutes. No frontend experience required."
date: 2024-02-23
tags: ["tutorial", "getting-started", "python", "ui"]
---

If you're tired of writing boilerplate code for configuration parsing and building frontend interfaces, Setta is here to help. In this quick guide, we'll show you how to transform your Python functions into interactive UIs with just a few lines of code.

## Installation

First, let's get Setta installed. You can use pip:

```bash
pip install setta
```

## Your First Setta UI

Let's start with a simple machine learning training script:

```python
from setta import configure

@configure
def train_model(
    learning_rate: float = 0.001,
    batch_size: int = 32,
    epochs: int = 100,
    model_type: str = "resnet18"
):
    """Train a neural network model.

    Args:
        learning_rate: Learning rate for optimization
        batch_size: Number of samples per batch
        epochs: Number of training epochs
        model_type: Type of model architecture to use
    """
    # Your training code here
    print(f"Training {model_type} for {epochs} epochs...")
```

That's it! The `@configure` decorator automatically creates an interactive UI for your function. Run your script:

```bash
python train.py
```

Setta will automatically:

1. Launch a local server
2. Open your browser to the UI
3. Provide interactive controls for all parameters
4. Handle validation and type checking
5. Generate documentation from your docstrings

## Advanced Features

You can also use type hints to create more sophisticated UIs:

```python
from typing import Literal, List
from pathlib import Path

@configure
def preprocess_data(
    input_path: Path,
    output_format: Literal["csv", "parquet", "json"] = "csv",
    columns: List[str] = ["id", "features", "label"],
    normalize: bool = True
):
    """Preprocess your dataset with configurable options."""
    pass
```

Setta automatically creates appropriate UI controls based on your type hints:

- `Path` becomes a file picker
- `Literal` becomes a dropdown
- `List` becomes a dynamic list input
- `bool` becomes a toggle switch

Stay tuned for more tutorials on advanced Setta features!
