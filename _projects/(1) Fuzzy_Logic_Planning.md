---
name: Planning in 2D dynamic obstacle environemnt using fuzzy logic controller
tools: [Matlab, Navigation, Fuzzy Logic]
image: /assets/Gif1.gif
description: Real time planning in 2D while avoiding obstacles

---

### Overview

This project focuses on building a fuzzy logic controller (FLC) to guide a robot from a start position to a goal while avoiding static and dynamic obstacles. The controller is designed to work in real-time and is expected to handle uncertainities in input data.

The robot uses three key sensor readings: distances to obstacles in the Front, Front Left Diagonal, and Front Right Diagonal directions. These, along with additional inputs like Distance to Goal (straight-line distance to the goal), Angle to Goal (angle between the robot’s heading and the goal direction), and Turn (preferred turning direction), are processed by the FLC. The output of the controller is the steering angle that guides the robot.

<div style="display: flex; flex-wrap: wrap; gap: 5px;">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Img11.png" alt="Description 2" style="width: auto; max-width: 330px; height: auto;">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Img9.png" alt="Description 3" width="330">
</div>


The decision-making is based on a set of simple rules:
- If there are no nearby obstacles, the robot turns to face the goal.
- If a new obstacle is detected, it turns toward the goal.
- If the same obstacle as before is detected, the robot repeats the previous turn.

The controller uses the Mamdani approach, representing input and output variables as membership functions. The rule base is split into two parts: one for avoiding obstacles and another for moving toward the goal. For example:
- **Obstacle Avoidance Rule**: If Distance Front is Low AND Turn is Left, THEN Steer is More Left.
- **Goal-Reaching Rule**: If Angle Goal is Positive AND Distance Goal is Low, THEN Steer is More Right.

By combining these rules, the fuzzy logic controller effectively balances obstacle avoidance with goal-reaching behavior, ensuring smooth navigation even with noisy or imprecise sensor data.

<div style="display: flex; flex-wrap: wrap; gap: 5px;">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Img10.png" alt="Description 2" width="620">
</div>

## Simulation Results

<div style="display: flex; flex-wrap: wrap; gap: 5px;">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Img12.png" alt="Description 2" width="1000">
</div>

<div style="text-align: center;">
  <video width="450" controls>
    <source src="{{ site.url }}{{ site.baseurl }}/assets/Vid1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

### References and Acknowledgment

1. "Robot Navigation in Dynamic Environments using Fuzzy Logic and Trajectory Prediction Table", Cheng-Hsiung Chinag, Chiehyi Ding

2. "Time-optimal, collision-free navigation of a car-like mobile robot using neuro-fuzzy approaches", Nirmal Baran Hui, V. Mahendar, Dilip Kumar Pratihar

3. "A Method of Indoor Mobile Robot Navigation by Using Fuzzy Control", Shigeki Ishikawa