---
name: DexNex Simulation
tools: [Python, Drake, ROS2, HITL, RL]
image: /assets/Gif7.gif
description: High-fidelity simulation of the DexNex bimanual teleoperation testbed
---

### DexNex

DexNex (Dexterity Nexus) is Northwestern’s bimanual teleoperation testbed composed of:
- ABB Gofa robotic arms
- UFactory xArm6 for neck articulation
- Shadow Hands for dexterous manipulation
- FLIR Blackfly cameras for visual input
- Biotac SynTouch tactile sensors for pressure sensing
- HaptX DK2 gloves for teleoperation and haptic feedback
- Varjo Aero HMD for immersive visual feedback

<img src="{{ site.url }}{{ site.baseurl }}/assets/Img32.png" alt="Dexnex" width="600"/>


### Overview

The goal of this project is to create a high-fidelity digital twin of the DexNex platform using the Drake simulator. This simulation will support:
- Development and testing of teleoperation and control strategies
- Simulation of new hardware and sensors before real-world deployment
- Application of machine learning techniques for dexterous control and autonomy

A major milestone involves performing Hardware-in-the-Loop (HITL) testing by teleoperating DexNex using HaptX gloves while receiving real-time haptic feedback. The user interacts with the simulated environment visually through the Varjo HMD, aiming to replicate the feel and responsiveness of the real robot.

### Progress so far

- Implemented a position controller in Drake that replicates real-world DexNex performance
- Simulated RGB and Depth camera feed and published at 60 Hz via ROS2
- Simulated Biotac tactile sensors and published pressure data at 100 Hz for both hands
- Published joint state data for all actuators at 100 Hz in ROS2

### Current Work

I am currently validating the simulator through HITL testing. In parallel, I am working on building a reinforcement learning pipeline to train policies for autonomous task execution using the digital twin.

More detailed updates will be shared as development progresses—stay tuned!