---
layout: page
title: Revisiting RVL-CDIP
description: Fixing label errors and train-test overlap in document classification benchmark
img: assets/img/projects/rvl_cdip_cover.png
importance: 4
category: research
github: https://github.com/sid-betalol/Document-Classification-Models
---

> **Collaboration**: Stefan Larson (Vanderbilt University)  
> **Status**: Under ACL Rolling Review for EACL 2026  
> **Period**: 2023 - Present

## Problem Statement

RVL-CDIP is a widely-used document classification benchmark with 400,000 images across 16 classes. However, the dataset suffers from:
- Significant label errors affecting model evaluation
- Train-test overlap compromising benchmark integrity
- Lack of cleaned version for fair model comparison

## Our Solution

### 1. Label Error Detection & Correction

**Approach**: CLIP-based outlier detection
- Generated **CLIP embeddings** for all documents
- Computed class centroids in embedding space
- Identified outliers based on **distance from centroids**
- Manual verification and relabeling of suspicious samples

### 2. Train-Test Duplicate Detection

**Multi-stage pipeline**:

**Stage 1 - Feature Matching**:
- Employed **SuperGlue** pre-trained model for feature-based similarity assessment
- Matched keypoints between document pairs
- Identified potential duplicates based on match confidence

**Stage 2 - Efficient Similarity Search**:
- Applied **MinHash** and **Locality Sensitive Hashing (LSH)** for efficient grouping
- Scaled to 400K documents without exhaustive pairwise comparison
- Generated candidate duplicate groups

**Stage 3 - Refined Clustering**:
- Used **DBSCAN** on candidate groups for accurate deduplication
- Separated true duplicates from near-duplicates
- Maintained document diversity while removing overlaps

### 3. Model Evaluation on Cleaned Data

Designed comprehensive evaluation scripts for state-of-the-art models:
- **DiT** (Document Image Transformer)
- **Donut** (OCR-free document understanding)
- **LayoutLM** (multimodal document model)

Compared performance on original vs. cleaned dataset to quantify impact of data quality issues.

## Technical Stack

**Similarity & Embeddings**: OpenAI CLIP, SuperGlue  
**Hashing**: MinHash, LSH  
**Clustering**: DBSCAN  
**Models Evaluated**: DiT, Donut, LayoutLM  
**Frameworks**: PyTorch, Hugging Face Transformers, OpenCV

## Impact

- **Cleaned dataset** available for research community
- **Quantified impact** of data quality on model performance
- Established good practices for large-scale document dataset curation

<!-- ## Related Publications

{% cite larson2026rvl-cdip %} -->