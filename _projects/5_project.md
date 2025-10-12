---
layout: page
title: AI for Green Finance
description: 3rd place solution at Temenos Encryptcon hackathon evaluating climate projects
# img: assets/img/projects/temenos_cover.jpg
importance: 5
category: hackathon
---

> **Temenos Encryptcon Hackathon** | January 2024  
> **Achievement**: 3rd place out of 340 teams across India  
> **Prize**: $7,500 (Rs. 600,000)

## Challenge

Build an AI platform to evaluate investment potential of green finance projects using Project Design Documents (PDDs), enabling investors to make data-driven decisions on climate initiatives.

## Solution Architecture

### 1. Multimodal Document Processing

**OCR-Free Parsing with Donut**:
- Processed PDDs containing text, tables, and plots without traditional OCR
- Enabled **rapid computation** and **semantic understanding**
- Handled diverse document layouts and formats

**Document Embedding Generation**:
- Created rich representations capturing project characteristics
- Enabled similarity-based project comparison
- Facilitated downstream prediction tasks

### 2. Predictive Analytics

**Carbon Credit Prediction**:
- Integrated document embeddings with **time series data**
- Fine-tuned **FLAN-T5** for multi-horizon forecasting
- Predicted quantity of carbon credits generated over project lifetime
- Forecasted carbon credit prices for upcoming years

**Risk Assessment**:
- Developed heuristic comparing new projects against top performers
- Quantified project risk based on historical success patterns
- Provided confidence scores for investment decisions

### 3. Retrieval-Augmented Generation (RAG)

**Intelligent Project Filtering**:
- Implemented RAG for natural language queries
- Filtered projects based on user preferences (geography, technology, scale)
- Presented **top 3 gainers and losers** based on predicted returns

**Interactive Q&A**:
- Enabled users to ask questions about specific projects
- Retrieved relevant information from PDD corpus
- Provided evidence-based answers with source citations

## Key Features

✅ **Upload & Analysis**: Instant evaluation of new PDDs  
✅ **Comparative Analytics**: Benchmark against successful projects  
✅ **Time Series Forecasting**: Predict returns over 5-10 year horizon  
✅ **Risk Scoring**: Quantified investment risk metrics  
✅ **Natural Language Interface**: Query projects conversationally

## Technical Stack

**Document Understanding**: Donut (OCR-free)  
**Language Model**: FLAN-T5  
**RAG Framework**: LangChain  
**Experiment Tracking**: Weights & Biases  
**Frontend**: Gradio  
**Backend**: Python, PyTorch, Hugging Face

## Impact

- Reduced due diligence time from days to minutes
- Democratized access to green finance analytics
- Enabled data-driven investment decisions in climate tech


## Team Insights

> "The key challenge was handling multimodal PDDs with inconsistent formats. Donut's transformer-based approach eliminated brittle OCR pipelines, while FLAN-T5's instruction-following capability made it ideal for integrating diverse data sources."