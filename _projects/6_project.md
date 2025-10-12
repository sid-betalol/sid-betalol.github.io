---
layout: page
title: Optimized Implementation of GPT-2
description: Enhanced GPT-2 with modern attention mechanisms and efficient training
# img: assets/img/projects/gpt2_cover.jpg
importance: 6
category: fun
github: https://github.com/sid-betalol/GPT2-optimization-task
---

> **Personal Project** | November - December 2023  
> **Goal**: Implement and optimize GPT-2 with state-of-the-art techniques

## Project Overview

Built GPT-2 from scratch and enhanced it with modern architectural improvements including Rotary Positional Embeddings, Group Query Attention, and Sliding Window Attention for improved efficiency and performance.

## Implementation Details

### Core GPT-2 Architecture

**Implemented from scratch**:

- Multi-head self-attention mechanism
- Position-wise feedforward networks
- Layer normalization and residual connections
- Absolute positional encodings
- Autoregressive language modeling objective

### Architectural Enhancements

**1. Rotary Positional Embeddings (RoPE)**

- Replaced absolute positional encodings with **rotational embeddings**
- Improved length extrapolation capabilities
- Better handling of relative positions

**2. Group Query Attention (GQA)**

- Reduced memory footprint vs. Multi-Head Attention
- Maintained model quality with fewer parameters
- Enabled larger context windows with same memory budget

**3. Sliding Window Attention**

- Limited attention to local context window
- Improved computational efficiency for long sequences
- Reduced O(n²) complexity for attention computation

## Training Infrastructure

### Efficient Training Pipeline

**Multi-GPU Support**:

- Integrated **Hugging Face Accelerate** for distributed training
- Seamless CPU/GPU switching without code changes
- Mixed precision training for faster computation

**Experiment Tracking**:

- Weights & Biases integration for experiment logging
- Real-time training metrics visualization
- Hyperparameter sweep support

**Flexible Data Loading**:

- Custom data loaders for various text formats
- Efficient tokenization and batching
- Support for streaming large datasets

## Performance Results

### Efficiency Gains

| Configuration    | Memory (GB) | Throughput (tok/s) | Perplexity |
| ---------------- | ----------- | ------------------ | ---------- |
| Standard GPT-2   | 12.4        | 8.2K               | 24.3       |
| + RoPE           | 12.4        | 8.1K               | 23.8       |
| + GQA            | 9.2         | 10.5K              | 24.1       |
| + Sliding Window | 7.8         | 12.3K              | 24.5       |

### Key Takeaways

✅ **GQA reduced memory** by 25% with negligible quality loss  
✅ **Sliding Window** improved throughput by 50% on long contexts  
✅ **RoPE enhanced** length extrapolation without accuracy degradation

## Technical Stack

**Framework**: PyTorch, Hugging Face Transformers  
**Training**: Accelerate (multi-GPU), Mixed Precision  
**Monitoring**: Weights & Biases  
**Tokenization**: Byte-Pair Encoding (GPT-2 tokenizer)

## Code Highlights

```python
class GroupQueryAttention(nn.Module):
    """Efficient GQA reducing KV cache size"""
    def __init__(self, d_model, n_heads, n_kv_heads):
        super().__init__()
        self.n_heads = n_heads
        self.n_kv_heads = n_kv_heads
        self.head_dim = d_model // n_heads
        # ... implementation

class RotaryEmbedding(nn.Module):
    """RoPE for better positional encoding"""
    def __init__(self, dim, max_seq_len=2048):
        super().__init__()
        # ... implementation
```

## Future Work

- Implement FlashAttention for further speedups
- Experiment with mixture-of-experts (MoE) layers
- Add inference optimization (KV caching, speculative decoding)

## Resources

📂 **Code**: [GitHub Repository](https://github.com/sid-betalol/GPT2-optimization-task)
