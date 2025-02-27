---
title: "Introducing Setta: Python Without The Donkeywork"
description: "We're excited to announce the launch of Setta, an open-source tool that lets you expose Python functions as flexible UIs without writing boilerplate parsers or frontend code."
date: 2024-02-24
tags: ["launch", "python", "configuration", "ui", "developer-tools"]
author: "Setta Team"
# featuredImage:
#   src: "setta-launch.jpg"
#   alt: "Setta interface showing Python configuration UI"
---

# Introducing Setta: Python Without The Donkeywork

We're thrilled to announce the launch of Setta, an open-source tool created by Kevin Musgrave and Jeff Musgrave that transforms how developers work with Python configurations and interfaces. Say goodbye to tedious boilerplate and hello to a streamlined Python development experience!

## What is Setta?

Setta is a general-purpose developer tool that streamlines Python coding, configuration, UI creation, and onboarding. At its core, Setta embraces a simple but powerful philosophy: **your config is your UI**.

With Setta, you can:

- **Skip the boilerplate parsers and frontend code** - No more writing YAML parsers or building UI components from scratch
- **Effortlessly expose your Python functions as a flexible UI** - Turn any Python function into an interactive interface with just a decorator
- **Configure, interact, and share with ease** - Create intuitive interfaces for both technical and non-technical stakeholders

Whether you're fine-tuning large AI models or writing small Python scripts, Setta can transform them into usable interfaces without special integrations or deep frontend knowledge.

## Why Setta is Betta

As machine learning engineers and developers, we were tired of the repetitive workflow:

1. Write Python functions with parameters
2. Create config files (YAML, JSON, etc.)
3. Build parsers to interpret these configs
4. Develop a separate frontend to adjust parameters
5. Rebuild everything when parameters change

This cycle wastes valuable time and creates unnecessary complexity. Setta eliminates these pain points by automatically generating UI components directly from your Python functions and their type annotations.

By tying configuration and UI together, Setta lets you focus on what matters most—your code, not the infrastructure around it.

## How Setta Works

Setta's magic happens through a simple decorator that transforms Python functions into interactive UIs:

```python
from setta import configure

@configure
def train_model(
    learning_rate: float = 0.001,
    batch_size: int = 32,
    epochs: int = 100,
    model_type: str = "resnet18"
):
    """Train a neural network model."""
    # Your training code here
    print(f"Training {model_type} for {epochs} epochs...")
```
