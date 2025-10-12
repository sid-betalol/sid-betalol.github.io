---
layout: page
title: Graph Neural Networks for Protein Inverse Folding
description: Improving ProteinMPNN through data augmentation and pre-training strategies
img: assets/img/projects/IPD-logo-UW-color-2025.png
importance: 3
category: research
---

> **IPD Summer Research Fellowship** | May - September 2022  
> Baker Lab, Institute for Protein Design, University of Washington  
> Under Nobel Laureate Dr. David Baker

## Project Overview

Investigated and improved graph neural network architectures for protein inverse folding, demonstrating enhanced performance through AlphaFold augmentation and BERT-style pre-training.

## Key Contributions

### Model Implementation & Benchmarking

- Reproduced results from **ProteinMPNN** (Science, 2022) through complete implementation from scratch
- Compared performance with state-of-the-art models: **MIF-ST** and **ESM**
- Validated model architecture and training procedures against published benchmarks
- Created tutorials to explore and try out ProteinMPNN and other plugins

### Performance Improvements

**Data Augmentation Strategy**:

- Augmented training set with **AlphaFold-predicted structures**
- Trained with **noisy backbone coordinates** to improve robustness
- Demonstrated **improved generalization** to unseen protein families

**Pre-training Approach**:

- Implemented **BERT-style pre-training** for ProteinMPNN
- Objective: reconstruct masked sequences given input structure
- Showed **competitive performance** with pre-trained models on downstream tasks

### Architectural Insights

- **Validated sparsity assumption**: Performance saturates with increasing edge connections in protein graphs
- Demonstrated efficiency of k-nearest neighbor graph construction over fully connected graphs
- Confirmed importance of local structural context over distant interactions

## Technical Details

**Architecture**: Message Passing Neural Network (MPNN) encoder with self-attention and feedforward layers for neighborhood aggregation, autoregressive decoder for sequence generation

**Key Techniques**:

- Graph construction from backbone coordinates
- Edge features from pairwise distances and orientations
- Autoregressive decoding with temperature sampling

**Frameworks**: PyTorch, PyTorch Geometric

## Impact

This research:

- Validated the effectiveness of ProteinMPNN architecture
- Introduced practical improvements through data augmentation
- Provided insights into graph sparsity and pre-training for protein design
