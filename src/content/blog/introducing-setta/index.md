---
title: "Introducing Setta: Python Without The Donkeywork"
description: "We're excited to announce the launch of Setta, an open-source tool that lets you expose Python functions as flexible UIs without writing boilerplate parsers or frontend code."
date: 2024-02-28
tags: ["launch", "python", "configuration", "ui", "developer-tools"]
author: "Setta Team"
# featuredImage:
#   src: "setta-launch.jpg"
#   alt: "Setta interface showing Python configuration UI"
---

# Introducing Setta: Python Without The Donkeywork

We're thrilled to announce the launch of Setta, an open-source tool created by Kevin Musgrave and Jeff Musgrave that transforms how developers work with Python configurations and interfaces. Say goodbye to tedious boilerplate and hello to a streamlined Python development experience!

## What is Setta?

Setta is a general-purpose developer tool that streamlines Python coding, configuration, UI creation, and onboarding. At its core, Setta embraces a simple but powerful philosophy: your config is your UI.

With Setta, you can:

- Skip the boilerplate parsers and frontend code - No more writing YAML parsers or building UI components from scratch
- Effortlessly expose your Python functions as a flexible UI - Turn any Python function into an interactive interface with just a decorator
- Configure, interact, and share with ease - Create intuitive interfaces for both technical and non-technical stakeholders

Whether you're fine-tuning large AI models or writing small Python scripts, Setta can transform them into usable interfaces without special integrations or deep frontend knowledge.

## Why Setta is Betta

As machine learning engineers and developers, we were tired of the repetitive workflow:

- Write Python functions with parameters
- Create config files (YAML, JSON, etc.)
- Build parsers to interpret these configs
- Develop a separate frontend to adjust parameters
- Rebuild everything when parameters change

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

That's it! The @configure decorator automatically creates an interactive UI for your function. Just run your script with Setta, and a browser opens with controls for all your parameters, including:

- Type-appropriate inputs (sliders, dropdowns, text fields)
- Validation based on Python type hints
- Documentation generated from your docstrings
- Visual organization of related parameters

## Boost Your Productivity

Setta transforms your development process by:

- Simplifying Workflow: Write your code in Setta or your favorite IDE, set configs with autocompletions and type-checking, and run your project—no extra steps required.
- Saving Time: By auto-generating the UI from your config, Setta cuts out repetitive frontend work.
- Enhancing Flexibility: With support for various input types, Setta adapts to a wide range of use cases.
- Supporting Collaboration: Projects auto-export in a Git-friendly YAML format, making version control and sharing seamless.

## Exciting Examples You Can Try Today

The best way to experience Setta's potential is to try it yourself! We've prepared several examples to showcase what you can build:

- Stream Diffusion Image-to-Image: A real-time drawing interface that creates multiple AI-enhanced images as you sketch in parallel.
- TRL Language Model Finetuning: Try different training configurations using the Hugging Face Transformer Reinforcement Learning (TRL) library.
- Transformers Sequence Classification: Train text classification models using the Hugging Face Transformers library.
- PyTorch Metric Learning: Finetune embedding models using different metric learning algorithms.

You can find all these examples in our examples repository. Each example comes with simple setup instructions—just clone the repo, follow the instructions, and see Setta in action!

## Getting Started in Minutes

Getting started with Setta is incredibly easy:

```
# Install Setta
pip install setta

# Create a new project
mkdir my_project
cd my_project

# Start Setta
setta
```

The Setta UI will be available at http://127.0.0.1:8000/. From there, you can create a new configuration, add sections and parameters, and run your code.

## What's Next?

We're actively developing Setta with new features and improvements. In our latest releases, we've added:

- Support for chat interfaces through a new "Chat" section type
- CLI command enhancements
- Artifact management improvements
- Bug fixes for cross-platform compatibility

## Join the Setta Community

Setta was brought to life by Kevin Musgrave, a full-stack developer, and Jeff Musgrave, a UI/UX and frontend expert. Together, they're passionate about making Python development more accessible and efficient for everyone.

As an open-source project available on GitHub, Setta thrives on community input. We welcome contributions, feedback, and feature requests:

- Check out our documentation
- Join our Discord community
- Star us on GitHub
- Follow us on Twitter

We're excited to see what you'll build with Setta! Happy coding!
