---
name: Design and Control of Robotic Hand
tools: [Python, C++, Control, Kinematics, CAN, SPI, UART, SEA]
image: /assets/Gif5.gif
description: Robotic hand featuring a wrist, dexterous and power fingers, and a palm for compliant grasping
---

### Overview

This was a two-quarter course project focused on designing and controlling a robotic hand. The work was carried out in two phases. In the first milestone, three teams (each with 6–7 members) were tasked with building and controlling a 2-DOF tendon-driven finger within 3 weeks. In the second milestone, all 20 students came together to build a complete robotic hand consisting of:

- A 2-DOF wrist (pitch and yaw)
- A forearm housing all the motors and series elastic actuators
- A 4-DOF dexterous finger
- A 1-DOF power finger

### Milestone 1 – Finger Prototype

I was part of the N team, where we had to design a 2-DOF finger using an **N-routing** scheme — the number of actuators matched the number of independently controlled joints.

#### Key Components

- **Motors**: Brushless outrunners with 22.6:1 gear ratio, controlled via ODrive  
- **Encoders**: AS5147 magnetic encoders  
- **Finger**: Tendon-driven with modular routing  
- **Microcontroller**: Teensy 4.x (CAN for motor control, SPI for encoder feedback)  
- **Interface**: USB connection to a host PC for command input and data visualization  

#### My Contributions

- Set up all electrical connections  
- Controlled motors using ODrive over CAN via Teensy  
- Implemented finger kinematics and encoder integration using SPI  
- Tuned PID gains for smooth joint control  

### Code

The code for milestone 1 is available at [https://github.com/NU-RDS/team-n-testbench](https://github.com/NU-RDS/team-n-testbench)

### Results

<img src="{{ site.url }}{{ site.baseurl }}/assets/Img26.png" alt="SW Architecture" width="650"/>
<p align="center">Team N robot finger</p>

<div style="text-align: center;">
  <video width="650" controls>
    <source src="{{ site.url }}{{ site.baseurl }}/assets/Vid12.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>
<p align="center">Finger max force test</p>

### Milestone 2 – Full Hand Integration

In the second milestone, all teams worked together to build the full robotic hand. This included the integration of the wrist, fingers, palm, and forearm along with a custom embedded control stack.

#### Key Components

- **Dexterous Finger**: N+1 configuration (3 DOF + passively actuated MCP joint)

- **Power Finger**: Underactuated mechanism using 2 × 5-bar linkages  
- **Wrist**: 2 DOF (pitch and yaw), supports routing of seven tendons  
- **Palm**: Provides a compliant surface and connects wrist and fingers  
- **Forearm**: Houses multiple SEA modules (motor + torsional spring + encoder) for backdrivable actuation  

#### Software Architecture

- **User Interface**: GUI for sending commands, tuning PID gains, and real-time plotting/logging  
- **High-Level MCU**: Parses commands, handles kinematics, and runs position PID control  
- **Low-Level MCU**: Runs force control loop using SEA data and sends torque/current commands to motors via ODrive Pro  
- **Palm/Sensor Boards**: Collect joint and force data and pass it to the high-level controller  
- **Communication Library**: Custom CAN protocol ([rds25-comms](https://github.com/NU-RDS/rds25-comms)) for communication across all MCUs  

<img src="{{ site.url }}{{ site.baseurl }}/assets/Img23.png" alt="SW Architecture" width="650"/>
<p align="center">High level software architecture</p>

#### My Contributions

- Helped design the full software architecture  
- Worked out the kinematics for the full hand  
- Developed both position and force PID control  
- Integrated AS5147 encoders via SPI and load cells via UART with the MCU  
- Characterized the torsional springs in the SEA modules  
- Handled motor communication with the ODrives using CAN on Teensy 4.0/4.1

### Code
The code for milestone 2 is available at [https://github.com/NU-RDS/rds25-project](https://github.com/NU-RDS/rds25-project)

### Results

<img src="{{ site.url }}{{ site.baseurl }}/assets/Img24.png" alt="SW Architecture" width="650"/>
<p align="center">Robot hand holding a tool</p>

<div style="text-align: center;">
  <video width="650" controls>
    <source src="{{ site.url }}{{ site.baseurl }}/assets/Vid7.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>
<p align="center">Yaw Control</p>

<div style="text-align: center;">
  <video width="650" controls>
    <source src="{{ site.url }}{{ site.baseurl }}/assets/Vid8.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>
<p align="center">Pitch Control</p>

### Team

<img src="{{ site.url }}{{ site.baseurl }}/assets/Img25.jpg" alt="Team" width="650"/>
