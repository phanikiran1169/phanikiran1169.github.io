---
name: 2D Physics Engine
tools: [Python, Lagrangian/Impact Dynamics, Rigid Body Transformations]
image: /assets/Gif8.gif
description: Physics simulation of a jack bouncing inside a cup under gravity, with external forces acting on the cup
---

### Overview

This was my final project on the Machine Dynamics course and I chose to simualate a two-body dynamic system - a jack is shaken inside a cup using Lagrangian Mechanics and Impact Dynamics. This scenario invovles interaction between two rigid bodies with the cup experiencing external orces and torques that cause the jack to bounce within it. The entire system is subjected to gravity

### System Description

I began by defining the generalized coordinates of the system. These included the x and y positions and orientations (angles) of both the cup and the jack.

<div style="max-width: 600px; margin: 20px auto;">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Img33.png" alt="Picar Assembly" style="width: 100%; height: auto; border: 2px solid #fff; border-radius: 0px;">
</div>

<div style="max-width: 600px; margin: 20px auto;">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Img34.png" alt="Picar Assembly" style="width: 100%; height: auto; border: 2px solid #fff; border-radius: 0px;">
</div>


<p align="center">Coordinate Frame Definition</p>

The complete state of the system was represented using a 6-dimensional vector. Using these coordinates, I derived the Lagrangian of the system by calculating the total kinetic and potential energy. From there, I applied the Euler-Lagrange equations to obtain the equations of motion.

### Impact Evaulation
This was a key part of the project
- Impact updates are triggered whenever any of the 16 impact conditions undergo a sign change
- Upon detecting an impact, the simulation rewinds by one time step, and the velocities of the configuration variables are updated while keeping the positions unchanged
- In cases of simultaneous impacts, only the first detected impact is considered, and the system variables are updated accordingly
- An alternative approach involves randomly selecting one impact from the detected impacts for updating the system.

Symbolic computations were done using the sympy library to solve the equations of motions and get position and velocity trajectories.

### Observations and Improvements
- The simulation output behaves as expected, showing oscillation of the cup in the and directions. The cup does not fall due to gravity and tends to return to theta equals to 0
- The oscillation of the cup is imperfect (not sinusoidal in nature) due to impacts with the jack
- The jack's movement is accurate during single impacts, but during simultaneous impacts, the behavior becomes inaccurate. This is expected since only one impact is evaluated at a time
- The simulation is highly sensitive to parameters such as proportional gains, amplitude, frequency, and the simulation time step. Unrealistically high velocities may cause the jack to leave the cup and the simulation fails to recover
- This issue could be mitigated by reducing the simulation time step, but this significantly increases computation time. Additionally, the current strategy of considering only one impact during simultaneous impacts is suboptimal and could be improved

# Results

<div style="max-width: 600px; margin: 20px auto;">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Img35.png" alt="Picar Assembly" style="width: 100%; height: auto; border: 2px solid #fff; border-radius: 0px;">
</div>

<div style="max-width: 600px; margin: 20px auto;">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Img36.png" alt="Picar Assembly" style="width: 100%; height: auto; border: 2px solid #fff; border-radius: 0px;">
</div>

<div style="text-align: center;">
  <video width="650" controls>
    <source src="{{ site.url }}{{ site.baseurl }}/assets/Vid11.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>
<p align="center">Jack Bouncing in a Cup</p>
