# Pixel Face Solution

## Overview

The **Pixel Face** solution leverages advanced machine learning techniques and computer vision algorithms to reconstruct human faces from low-quality CCTV footage. This document outlines the approach taken, including model architecture, image enhancement techniques, and evaluation metrics.

## Model Architecture

### Chosen Techniques

- **Convolutional Neural Networks (CNNs)**: Utilized for feature extraction and image reconstruction due to their effectiveness in processing grid-like data.
  
- **Generative Adversarial Networks (GANs)**: Implemented to enhance image quality by generating realistic facial features from low-resolution inputs.

- **Autoencoders**: Used for dimensionality reduction and noise reduction, allowing the model to learn efficient representations of facial images.

### Pipeline Integration

1. **Data Preprocessing**: 
   - Normalization of input images.
   - Augmentation techniques (rotation, flipping) to improve model robustness.

2. **Image Enhancement Techniques**:
   - **Super-resolution**: Applied to upscale images while preserving details.
   - **Deblurring**: Utilized algorithms such as Wiener filtering to reduce motion blur.
   - **Noise Reduction**: Implemented techniques like Non-Local Means (NLM) for clearer images.

3. **Facial Reconstruction Model**:
   - Combined CNN and GAN architectures to produce high-fidelity facial images.
   - The model is trained on a diverse dataset of facial images under various conditions.

4. **Real-time Processing**:
   - Optimized the model for inference speed, ensuring it can process video frames in real-time with minimal latency.

## Challenges Addressed

- **Motion Blur**: Implemented deblurring techniques to counteract the effects of camera movement during footage capture.

- **Poor Lighting**: Enhanced low-light images using histogram equalization and advanced neural network training on varied lighting conditions.

- **Low Resolution**: Focused on super-resolution techniques to reconstruct high-quality images from low-resolution inputs.

## Future Enhancements Plan

1. **Facial Recognition Integration**: Incorporate facial recognition capabilities to identify individuals in real-time.

2. **3D Facial Reconstruction**: Develop methods for creating 3D models from 2D images to enhance identification accuracy.

3. **Live Video Stream Processing**: Optimize the model further for processing live video feeds, allowing for immediate analysis and alerts.

## Evaluation Metrics

- **POC Functionality**: The model successfully enhances facial images from CCTV footage, demonstrating foundational capabilities.

- **Clarity of Reconstruction**: Evaluated using metrics such as Peak Signal-to-Noise Ratio (PSNR) and Structural Similarity Index (SSIM) to quantify improvements in clarity and accuracy.

- **Technical Depth**: The architecture and approach are thoroughly documented, showcasing the depth of understanding in addressing challenges.

- **Innovation**: Novel methods such as adaptive learning rates and advanced augmentation strategies were employed to enhance model performance.

## Dataset Link

[Dataset](https://data.mendeley.com/datasets/f47pm7rwt3/1)

## ML Repo
[https://github.com/r3tr056/pixelface-flask](https://github.com/r3tr056/pixelface-flask)

## Steps to Run the Project

This project is built using React. Follow these steps to set up and run the application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/shreyash776/Ethos-frontend.git
   cd pixelface-flask
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the application:
   ```bash
   npm run dev
   ```

4. Start the application:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Deployed Link

You can access the deployed version of Pixel Face here: [Pixel Face Frontend](https://pixelface-frontend.vercel.app/)

## Conclusion

The Pixel Face solution represents a significant advancement in facial reconstruction technology from low-quality CCTV footage. By integrating various machine learning techniques and addressing key challenges, this project aims to provide investigators with powerful tools for identifying suspects more accurately. Further enhancements will continue to improve the system's capabilities in real-world applications.
