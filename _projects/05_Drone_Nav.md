---
name: Autonomous Drone Navigation in Dynamic Obstacle Environment  
tools: [PX4, Gazebo, Dronekit, Python, NetworkX, A*, Potential Field]  
image: /assets/Gif4.gif
description: Drone navigation using A*, Potential Field and PX4-SITL, simulated in Gazebo
---

### Overview

This project simulates a drone navigating autonomously in a 2D environment with static and dynamic obstacles. The drone uses a modified A* path planner to reach a target while avoiding collisions. The system is tested in real-time simulation using PX4 (SITL), Gazebo, and Dronekit.

<div style="display: flex; flex-wrap: wrap; gap: 5px;">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Img19.png" alt="High level arch" style="width: auto; max-width: 400px; height: auto;">
</div>


The simulation stack consists of:
- **PX4 Autopilot (SITL)** for flight control and waypoint tracking
- **Gazebo** to simulate the environment, obstacles, and sensor data
- **Dronekit (Python)** to send waypoints and interface with PX4
- **NetworkX** for grid-based A* planning
- **pygazebo** to provide sensor feedback from Gazebo to the planner

Sensor data is used to map the environment to a 2D occupancy grid. Obstacles—both static and moving—are marked on this grid. The planner continuously checks for changes in the environment and recomputes the path as needed.

<div style="display: flex; flex-wrap: wrap; gap: 5px;">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Img20.png" alt="Sequence Diagram" style="width: auto; max-width: 800px; height: auto;">
</div>

### Path Planning Logic

The drone uses a modified A* algorithm combined with a potential field-based cost function to improve obstacle avoidance.

Key ideas:
- Nodes near obstacles are assigned higher costs.
- Nodes inside an obstacle’s bounding box are marked with maximum cost.
- The heuristic encourages paths that keep a safe distance from obstacles.

This results in paths that are not only collision-free but also avoid regions close to obstacles. The drone is effectively attracted to the goal and repelled by obstacles.

To handle dynamic obstacles, the cost function also considers their predicted motion. If a moving obstacle is expected to intersect the current path, the planner triggers a replan using updated grid data.

<div style="text-align: center;">
  <video width="800" controls>
    <source src="{{ site.url }}{{ site.baseurl }}/assets/Vid5.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

### Simulation Results


<div style="text-align: center;">
  <video width="800" controls>
    <source src="{{ site.url }}{{ site.baseurl }}/assets/Vid6.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>
