---
layout: page
title: Enhancing Protein Fitness with Deep Learning
description: Dual Degree Thesis on sequence-structure fusion using LMs and GNNs for function prediction and generative sequence design
img: assets/img/publication_preview/protein_diffusion.png
importance: 1
category: research
related_publications: betala2024mlcb
---

> **Dual Degree Thesis** | August 2023 - June 2024  
> Guides: Dr. Radhakrishnan Mahadevan (University of Toronto), Dr. Nirav Bhatt (IIT Madras)  
> *Nominated for Best Thesis in Data Science Award*

## Overview

This thesis explores the fusion of sequence and structural information to predict protein function and generate novel sequences with enhanced properties using deep learning. The work demonstrates state-of-the-art performance on [PEER](https://openreview.net/forum?id=QgTZ56-zJou) and [FLIP](https://openreview.net/forum?id=p2dMLEwL8tF) benchmarks.

## Key Contributions

### 1. Sequence-to-Function Learning Pipeline

- Employed competitive **convolutional and attention-based pooling architectures** for sequence-to-function learning
- Utilized **OmegaFold** to predict structures for all sequences in curated datasets
- Created **structure-aware graphs** encoding dihedral angles, sidechains, and orientations as features
- Designed custom PyTorch data loaders for efficient processing of large-scale protein datasets

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/thesis_pipeline.jpeg" title="Sequence-to-function pipeline" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    End-to-end pipeline for protein function prediction using sequence and structure fusion.
</div>

### 2. Graph Neural Network Architecture

- Demonstrated **superior GNN performance** over sequence-only approaches through fusion of ESM-2 embeddings with structural information
- Implemented **parallel and cross-attention-based fusion** mechanisms for benchmarking
- Introduced a **vector gating mechanism** creating dependencies between scalar and vector features
- Achieved **state-of-the-art performance** on PEER and FLIP benchmarks

### 3. Generative Design Strategy

Our approach for designing enhanced protein variants:

1. **Masking**: Mask functional residues or active site domains of wildtype proteins
2. **Generation**: Use [EvoDiff's](https://www.biorxiv.org/content/10.1101/2023.09.11.556673v1) Order-Agnostic Diffusion Model (OADM) to generate novel sequences via inpainting
3. **Filtering**: Generate structures with OmegaFold and discard sequences with pLDDT < 70
4. **Screening**: Apply trained GNN to predict functional values and identify candidates with enhanced function

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/design_strategy.jpg" title="Generative design strategy" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Pipeline for generating and screening protein sequences with enhanced function over wildtype.
</div>

## Experimental Results

### β-lactamase (TEM-1)

- Generated **200 novel sequences** by inpainting masked functional regions (residues 103-105, 168-170, 238-241)
- **All 200 sequences** achieved pLDDT > 90 (average: 92.64), demonstrating EvoDiff's capability for structurally plausible generation
- **55 sequences** predicted to exhibit higher function than wildtype
- Identified **68 matches** with PEER benchmark test set, validating ESM-GNN's predictive efficacy

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/evodiff_blat.png" title="Generating and Screening Sequences for TEM-1 β-lactamase" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    ESM-GNN performance on β-lactamase: regression metrics and prediction quality on test set matches.
</div>

### GB1 Protein

- Generated **160 novel sequences** by masking 4 functional sites (V39, D40, G41, V54)
- All sequences achieved pLDDT > 70 (average: 80.11)
- **12 sequences** predicted to have higher function than wildtype
- Identified **17 matches** with test set; **successfully identified all 10** true enhanced-function candidates
- Demonstrated high reliability for preliminary screening before experimental validation

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/gb1_evodiff.drawio.png" title="Generating and Screening Sequences for GB1 protein" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    ESM-GNN screening results for GB1 protein showing accurate identification of enhanced variants.
</div>

## Technical Details

**Models**: ESM-2, OmegaFold, EvoDiff, Custom GNN with vector gating, GVP-GNN  
**Frameworks**: PyTorch, PyTorch Geometric  
**Benchmarks**: PEER, FLIP  
**Key Innovation**: Fusion of sequence embeddings with structure-aware graph representations

## Impact

This work demonstrates that combining protein language models with graph neural networks can:
- Accurately predict function from sequence and structure
- Generate novel sequences with enhanced properties
- Significantly reduce experimental validation costs through computational screening

This research was presented at [Machine Learning in Computational Biology (MLCB)](https://sites.google.com/cs.washington.edu/mlcb2024/) 2024:

{% cite betala2024mlcb %}
