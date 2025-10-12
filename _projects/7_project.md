---
layout: page
title: Neural Collapse in Hierarchical Loss Functions
description: Investigating neural collapse phenomena and hierarchical loss functions in deep classification networks
importance: 7
category: research
github: https://github.com/sid-betalol/Neural-Collapse-and-Class-Hierarchy
---

> **Course Project**: EE5179 - Deep Learning for Imaging | December 2023  
> **Team**: Siddharth Betala, Ruban Vishnu Pandian, Nikhil Anand  
> **Institution**: IIT Madras

## Problem Statement

Neural Collapse (NC) is a recently discovered phenomenon occurring in the terminal phase of training (TPT) where deep neural networks exhibit four key characteristics:

1. **Collapse of variability**: Training samples converge to their class means
2. **Simplex ETF formation**: Class means form an equiangular tight frame
3. **Self-dual alignment**: Last layer weights align with class means
4. **Nearest class-mean decoding**: Classification reduces to finding the nearest class mean

While NC correlates with good generalization, it may not be optimal for hierarchically structured data where mistake severity varies (e.g., confusing a dog with a cat is less severe than confusing a dog with a car).

## Research Objectives

1. **Validation**: Replicate neural collapse findings across different architectures and loss functions
2. **Extension**: Investigate whether hierarchical loss functions modify NC characteristics
3. **Evaluation**: Assess if hierarchical approaches can maintain accuracy while encoding semantic class relationships

## Theoretical Framework

### Neural Collapse Metrics

We employ four quantitative metrics to measure NC emergence:

**NC1 (Variability Collapse)**: Measures ratio of within-class to between-class covariance

$$NC1 = \frac{1}{K} tr(\Sigma_w \Sigma_b^\dagger)$$

**NC2 (Simplex ETF)**: Quantifies deviation from ideal simplex geometry

$$NC2 = \left\|\frac{MM^T}{\|MM^T\|_F} - \frac{1}{\sqrt{K-1}}\left(I_K - \frac{1}{K}1_K1_K^T\right)\right\|_F$$

**NC3 (Self-Dual Alignment)**: Measures alignment between weights and class means

$$NC3 = \left\|\frac{AM^T}{\|AM^T\|_F} - \frac{1}{\sqrt{K-1}}\left(I_K - \frac{1}{K}1_K1_K^T\right)\right\|_F$$

**NC4 (Nearest Class-Mean)**: Fraction of samples not classified by nearest mean rule

$$NC4 = \frac{1}{Kn} \sum_{i=1}^{Kn} \mathbb{I}(c_i \neq \arg\min_k \|f_i - \mu_k\|_2)$$

### Hierarchical Loss Formulations

We explored two main approaches to incorporate class hierarchy:

#### 1. Hierarchical Cross-Entropy (HXE)

Computes conditional probabilities along the hierarchy path, weighting them based on tree height:

$$\mathcal{L}_{HXE}(p, C) = -\sum_{l=0}^{h-1} \lambda(C^{(l)}) \log p(C^{(l)}|C^{(l+1)})$$

where $$\lambda(C) = \exp(-\alpha h(C))$$

#### 2. Soft Labels

Replaces one-hot encodings with soft labels weighted by hierarchical distance:

$$\mathcal{L}_{soft} = -\sum_{A \in \mathcal{C}} y_A^{soft}(C) \log p(A)$$

where

$$y_A^{soft}(C) = \frac{\exp(-\beta d(A,C))}{\sum_{B \in \mathcal{C}} \exp(-\beta d(B,C))}$$

$$d(A,C) = \frac{height(LCA)}{height(tree)}$$

## Experimental Setup

**Baseline Validation**:

- Datasets: MNIST, CIFAR-10
- Architectures: MLP, ResNet18
- Loss Functions: MSE Loss, Cross-Entropy Loss
- Goal: Replicate NC emergence patterns from literature

**Hierarchical Extension**:

- Constructed semantic hierarchy for CIFAR-10 classes
- Implemented both HXE and soft label approaches
- Compared NC metrics against standard training

## Key Concepts

### Hierarchical Neural Networks

The goal is to not only minimize classification errors but also minimize their severity. Key definitions:

- **Top-k prediction**: The predictions with the k highest probabilities
- **Hierarchical distance**: Mean height of the Least Common Ancestor (LCA) between ground truth and predicted class
- **Hierarchical Average Top-k Error**: Mean LCA height between ground truth and k most likely classes

### Three Approaches to Incorporate Hierarchy

1. **Label embeddings $$y^H$$**: Embeddings where cosine similarity is proportional to hierarchical distance
2. **Hierarchical loss function $$\mathcal{L}^H$$**: Modified loss with penalties based on mistake severity
3. **Hierarchical architecture $$\phi^H$$**: Generic distinctions in early layers, fine-grained distinctions in later layers

## Current Status & Findings

### Baseline Replication ✓

Successfully replicated NC emergence patterns consistent with literature:

- All four NC metrics converge toward zero during extended training
- Behavior consistent across MLP and ResNet18 architectures
- Both MSE and Cross-Entropy losses exhibit NC characteristics

### Hierarchical Loss Investigation (In Progress)

The hierarchical loss experiments are under active development. Initial implementation complete for:

- Class hierarchy construction for CIFAR-10
- HXE and soft label loss functions
- Integrated training pipeline

**Pending Work**:

- Complete training runs for hierarchical models
- Compute NC metrics for hierarchical loss functions
- Statistical comparison of NC emergence patterns
- Analysis of hierarchical distance of mistakes

## Expected Contributions

1. **Empirical Validation**: Comprehensive replication of NC across multiple settings
2. **Novel Investigation**: First systematic study of NC under hierarchical loss functions
3. **Practical Insights**: Understanding trade-offs between NC properties and semantic structure

## Technical Implementation

**Framework**: PyTorch

**Key Components**:

- Custom NC metric computation (NC1-NC4)
- Hierarchical loss implementations (HXE, Soft Labels)
- Class hierarchy construction utilities
- Visualization tools for feature space geometry

## Future Directions

- Complete hierarchical loss experimental runs
- Extend to ImageNet with richer hierarchical structure
- Investigate NC in modern architectures (Vision Transformers)
- Theoretical analysis of NC under hierarchical constraints
- Study interaction with few-shot and continual learning

## References

[1] Kothapalli, V., Rasromani, E., & Awatramani, V. (2023). Neural Collapse: A Review on Modelling Principles and Generalization. _Trans. Mach. Learn. Res._

[2] Bertinetto, L., et al. (2020). Making Better Mistakes: Leveraging Class Hierarchies With Deep Networks. _CVPR_, 12503-12512.

## Code & Documentation

📂 **GitHub**: [Neural Collapse and Class Hierarchy](https://github.com/sid-betalol/Neural-Collapse-and-Class-Hierarchy)  
📄 **Report**: Detailed mathematical formulations and theoretical background
