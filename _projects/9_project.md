---
layout: page
title: Automated PII De-Identification for Document Datasets
description: Large-scale pipeline for detecting and removing sensitive personal information from 400,000+ documents with synthetic data replacement
img: assets/img/publication_preview/deidentification.png
importance: 4
category: research
related_publications: larson2024deidentification
---

> **Collaboration**: Stefan Larson, Vanderbilt University | 2023 - 2024  
> **Published**: EMNLP 2024 (Main Conference)  
> **Scale**: 400,000+ documents across 5 datasets

## Overview

Developed a comprehensive automated pipeline for detecting and de-identifying sensitive Personally Identifiable Information (PII) in large-scale document image datasets derived from IIT-CDIP. The system combines OCR, regex pattern matching, Named Entity Recognition, and computer vision techniques to process over 400,000 documents while preserving dataset utility through intelligent pseudonymization.

## Problem Statement

Public document understanding datasets like RVL-CDIP, DocVQA, FUNSD, and Tobacco3482/800 contain alarming amounts of sensitive PII including:

- **2,428 US Social Security Numbers** across all datasets
- **13,101 birth dates** and **6,284 birth places**
- **4,192 home addresses** and **1,948 home phone numbers**
- Citizenship, marital status, religious affiliation, and health information

The presence of such data violates contemporary research ethics guidelines and exposes individuals to identity theft risks, necessitating immediate action.

## System Architecture

### 1. Large-Scale OCR Processing

**Amazon Textract Deployment**:

- Processed **417,738 document images** across 5 datasets (RVL-CDIP, DocVQA, FUNSD, Tobacco3482, Tobacco800)
- Extracted text with precise **bounding box coordinates** for spatial localization
- Achieved robust performance on diverse document types: resumes, forms, invoices, letters

**Infrastructure**:

- Batch processing pipeline for efficient large-scale operations
- Error handling for degraded or low-quality scanned documents
- Preservation of layout information for downstream processing

### 2. Multi-Modal PII Detection Pipeline

**Stage 1 - Regex Pattern Matching**:

- Detected structured PII with high precision:
  - **SSNs**: XXX-XX-XXXX format variations
  - **Phone numbers**: Multiple format patterns
  - **Dates**: MM/DD/YYYY and variations
  - **Email addresses** and structured identifiers
- **97% document-level recall** on SSN detection (Presidio analyzer)

**Stage 2 - Named Entity Recognition**:

- Integrated **spaCy and Transformer-based NER** models
- Detected unstructured PII:
  - Person names, locations, organizations
  - Citizenship and nationality references
  - Religious affiliations and demographic attributes
- Enhanced with **keyword-based contextual searches**

**Stage 3 - Manual Verification**:

- Team of 9 annotators with expert oversight
- **Fleiss' Kappa: 0.918** inter-annotator agreement
- Document-by-document inspection for smaller datasets
- Strategic sampling for RVL-CDIP's 400K documents

### 3. De-Identification Strategies

**Approach 1 - Basic Redaction**:

- Black/white pixel overlays on sensitive regions
- Simple but **reduces document utility** (8-12% classifier accuracy drop)

**Approach 2 - Pseudonymization with Synthetic Data** (Implemented):

**Data Generation**:

- **Faker library** for realistic synthetic replacements:
  - Valid SSN format patterns (e.g., 123-45-6789)
  - Contextually appropriate names and addresses
  - Realistic dates maintaining temporal consistency
- **Gazetteer sampling** for categorical data (nationalities, religions)

**Visual Integration**:

- **Pillow library** for text rendering with multiple font types
- **Augraphy** for document-specific augmentations:
  - InkMottling for print degradation effects
  - LowInkRandomLines for scanning artifacts
- **Albumentations** for rotation and noise augmentation
- **Font-aware rendering** preserving original document aesthetics

**Intelligent Inpainting**:

- **OpenCV inpainting** for seamless background reconstruction
- Telea and Navier-Stokes methods for texture preservation
- Maintained visual coherence around redacted regions

### 4. Font Detection Module (In Development)

- Custom CNN-based **font type classifier**
- Matches original document font characteristics
- Ensures **layout consistency**:
  - Font size matching
  - Character spacing preservation
  - Text alignment maintenance

## Key Findings

### PII Distribution Analysis

| Dataset     | Size    | SSNs  | Birth Dates | Home Addresses | Total PII Documents |
| ----------- | ------- | ----- | ----------- | -------------- | ------------------- |
| RVL-CDIP    | 400,000 | 2,342 | 12,800      | 3,908          | 15,956 (4.0%)       |
| DocVQA      | 12,767  | 70    | 232         | 276            | 360 (2.8%)          |
| Tobacco3482 | 3,482   | 9     | 62          | 6              | 66 (1.9%)           |
| Tobacco800  | 1,290   | 5     | 7           | 1              | 12 (0.9%)           |
| FUNSD       | 199     | 2     | 0           | 1              | 2 (1.0%)            |

**Overall**: 16,396 documents (3.9%) contain sensitive PII

### Detection Performance

**Automated Tool Comparison** (Document-level recall on SSNs):

| Tool         | Recall | Notes                         |
| ------------ | ------ | ----------------------------- |
| **Presidio** | 0.97   | Best performance              |
| Google DLP   | 0.93   | Strong performance            |
| Azure        | 0.70   | Limited context window issues |
| Amazon       | 0.77   | Missing context keywords      |

**Limitation**: 7 out of 11 PII types **not supported** by existing tools, necessitating manual annotation.

### Impact on Model Performance

**Document Similarity** (CLIP ViT-32 embeddings):

- **Black redactions**: Significant dissimilarity (mean cosine sim: 0.964)
- **White redactions**: Moderate dissimilarity (mean cosine sim: 0.989)
- **Pseudonymization**: Highest similarity (mean cosine sim: 0.997)
- Synthetic replacement **61.6% more similar** than white redaction

**Classification Performance** (DiT-base on RVL-CDIP):

- **Zero label flips**: All 445 test documents maintained correct class predictions
- **Minimal confidence impact**: Mean confidence difference 0.0024 (pseudonymization)
- **Preserved utility**: <2% accuracy degradation vs. 8-12% for naive redaction

**Key Insight**: Pseudonymization with synthetic data **preserves semantic meaning** while removing privacy risks.

## Technical Implementation

**OCR & Text Extraction**: Amazon Textract  
**Pattern Matching**: Python regex, Presidio  
**NER**: spaCy, Hugging Face Transformers  
**Synthetic Data**: Faker library, custom gazetteers  
**Image Processing**: OpenCV (inpainting), Pillow (text rendering)  
**Augmentation**: Augraphy (document-specific), Albumentations  
**Font Detection**: Custom CNN (PyTorch)  
**Classification Evaluation**: DiT-base (Microsoft), CLIP ViT-32

## Broader Impact

### Privacy Protection

- **Removed 2,428 SSNs** from public datasets
- **Minimized exposure** of 16,000+ documents with sensitive PII
- Aligned datasets with **NeurIPS and ACL ethics guidelines**

### Dataset Utility Preservation

- Maintained **document semantics** for ML research
- Enabled continued use for:
  - Document classification benchmarking
  - Information extraction tasks
  - Visual question answering
  - Multimodal model training

### Research Contribution

- **First comprehensive audit** of PII in IIT-CDIP-derived datasets
- **Novel pseudonymization approach** for document images
- **Public release** of de-identified datasets for research community
- **Best practices** for large-scale document dataset curation

## Ethical Considerations

- **Immediate action**: Coordinated with Hugging Face to disable dataset previews
- **Responsible disclosure**: Contacted dataset hosts before publication
- **Limited annotator exposure**: Small team with expert oversight to minimize PII spread
- **Manual verification**: Ensured high-quality detection despite

computational cost

## Future Directions

- **Font style transfer methods** for improved visual fidelity (e.g., GANs, style transfer networks)
- **Automated font detection** at scale using deep learning
- **Extension to born-digital documents** (PDFs, Word documents)
- **Privacy-preserving embeddings** for training without exposing raw data
- **Differential privacy** integration for formal privacy guarantees

## Publication

This work was published at EMNLP 2024 (Main Conference):

{% cite larson2024deidentification %}
