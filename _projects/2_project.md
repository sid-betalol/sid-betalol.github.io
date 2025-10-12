---
layout: page
title: Deep Learning for Enzyme Activity Prediction
description: Sequence-to-function learning pipeline using protein language models
img: assets/img/projects/mitacs logo.png
importance: 2
category: research
---

> **MITACS Globalink Research Internship** | May - August 2023  
> Laboratory for Metabolic Systems Engineering, University of Toronto  
> Supervisor: Dr. Krishna Mahadevan

## Project Overview

Developed an end-to-end sequence-to-function learning pipeline for predicting enzyme activity from protein sequences, achieving state-of-the-art performance with R-Score of 0.71 on mutation datasets.

## Key Achievements

### Pipeline Development

- Designed **flexible, modular pipeline** supporting multiple Protein Language Models (PLMs)
- Implemented end-to-end workflow from data preprocessing to prediction with minimal configuration
- Enabled easy experimentation with different model architectures and hyperparameters

### Model Performance

- Employed **ESM-2** to generate high-quality sequence embeddings for three point-mutation datasets
- Benchmarked multiple architectures: **LSTM-VAEs, convolutional pooling, and self-attention mechanisms**
- Achieved **R-Score of 0.71** on enzyme activity prediction tasks

### Key Insights

- Identified **lack of structural information** as the primary bottleneck in predictive performance
- This insight motivated the thesis work on integrating structure with sequence via GNNs
- Demonstrated competitive performance of attention-based pooling at similar parameter sizes

## Technical Stack

**Models**: ESM-2, LSTM-VAE, Convolutional Networks, Self-Attention  
**Frameworks**: PyTorch, Hugging Face Transformers  
**Datasets**: Three enzyme point-mutation datasets with measured activity values

## Impact

This work laid the foundation for:
- Understanding the importance of structural information in protein function prediction
- Developing modular pipelines for protein ML research
- Subsequent thesis work on sequence-structure fusion