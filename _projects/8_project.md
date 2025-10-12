---
layout: page
title: Robotic Personal Assistant
description: Autonomous robot with computer vision, SLAM, and conversational AI capabilities
importance: 8
category: fun
---

> **Project Lead** | Robotics Club, IIT Madras | 2020 - 2021  
> **Team Size**: 8 members  
> **Hardware**: NVIDIA Jetson Nano, Arduino, ROS-compatible robot chassis

## Project Overview

Developed an autonomous robotic personal assistant capable of navigating indoor environments, recognizing objects and people, understanding natural language commands, and providing product recommendations. The system integrates computer vision, SLAM, conversational AI, and e-commerce APIs into a cohesive platform.

## Core Capabilities

### 1. Computer Vision Module

**Real-time Face & Emotion Detection**:
- Implemented using **OpenCV** with Haar feature-based cascade classifiers
- Detects multiple faces simultaneously in video stream
- Classifies emotions: happy, sad, angry, neutral, surprised
- Runs at 15-20 FPS on Jetson Nano

**Object Detection & Identification**:
- Deployed **YOLO (You Only Look Once)** for real-time object detection
- Custom training on household items and common objects
- **Anchor boxes** for optimal bounding box prediction
- **Non-maximum suppression (NMS)** to filter overlapping detections
- **Intersection over Union (IoU)** for accurate segmentation

### 2. Navigation & Mapping

**ORB-SLAM2 with Dynamic Environment Handling**:
- Integrated **ORB-SLAM2** for visual odometry and mapping
- Enhanced with **probabilistic deep learning model** to filter dynamic objects
- Maintains stable maps despite moving people and objects
- Achieves robust localization in challenging indoor scenarios

**ROS Integration**:
- Used **RViz** for real-time visualization of robot state and map
- Simulated and tested in **Gazebo** before hardware deployment
- Implemented path planning algorithms for autonomous navigation
- Multi-environment mapping: stores and switches between multiple saved maps

### 3. Conversational AI & Recommendations

**Intent-based Chatbot**:
- Natural language understanding for user commands
- Context-aware conversation management
- Integration with robot actions (navigation, object finding)
- Voice input/output for hands-free interaction

**Product Recommendation System**:
- **Web scraping** Amazon for product data (prices, reviews, ratings)
- Collaborative filtering for personalized recommendations
- Conversational interface: "Find me a good laptop under $1000"
- Real-time price comparison and deal alerts

## Technical Implementation

### Hardware Setup
- **Processing**: NVIDIA Jetson Nano (GPU acceleration for vision tasks)
- **Sensors**: RGB-D camera, IMU, wheel encoders
- **Actuators**: Differential drive motors controlled via Arduino
- **Power**: Custom battery management system

### Software Stack
- **Vision**: OpenCV, PyTorch (YOLO), TensorFlow
- **SLAM**: ORB-SLAM2, ROS Navigation Stack
- **Simulation**: Gazebo, RViz
- **ML Frameworks**: PyTorch, TensorFlow
- **Languages**: Python (primary), C++ (performance-critical components)

### Key Algorithms

**Dynamic Object Filtering**:
```python
# Probabilistic model for static vs. dynamic classification
def filter_dynamic_objects(features, motion_vectors):
    # Extract ORB features from current frame
    orb_features = extract_orb_features(frame)
    
    # Predict dynamic probability using trained model
    dynamic_probs = dl_model.predict(features)
    
    # Filter features with high dynamic probability
    static_features = features[dynamic_probs < threshold]
    
    return static_features
```

**Multi-Environment Mapping**:
- Save map on user command
- Load appropriate map based on GPS/WiFi fingerprinting
- Seamless switching without re-initialization

## Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| Dynamic environments confusing SLAM | Integrated DL model to identify and filter dynamic objects |
| Limited computational resources | Optimized models, used TensorRT for inference acceleration |
| Real-time performance requirements | Parallel processing pipelines, efficient data structures |
| Integration of multiple subsystems | Robust ROS architecture with well-defined interfaces |

## Demonstrations & Results

**Performance Metrics**:
- Face detection: 95% accuracy, 18 FPS
- Object detection: 88% mAP, 12 FPS
- SLAM localization error: < 5cm in typical indoor environment
- Navigation success rate: 92% (reaching target without collision)

**User Study**: 
- Tested with 25 users over 2 weeks
- 4.2/5 average satisfaction rating
- Most appreciated features: object finding, natural conversation

## Future Enhancements

- Integration of LLMs for more natural conversations
- Improved manipulation capabilities (robotic arm)
- Multi-robot coordination for larger spaces
- Cloud connectivity for expanded product database
- Privacy-preserving face recognition

## Impact

This project served as:
- **Educational platform** for Robotics Club members to learn ROS, computer vision, and system integration
- **Competition entry** at inter-college robotics competitions (2nd place at RoboFest 2021)
- **Foundation** for subsequent research in autonomous systems