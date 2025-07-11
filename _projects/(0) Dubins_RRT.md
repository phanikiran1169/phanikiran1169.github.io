---
name: Planning using dubins and RRT*
tools: [Python, Trajectory Generation, RRT*, Dubins]
image: /assets/Img8.png
description: 3D planning algorithm that avoids obstacles while meeting minimum turning radius and boundary conditions

---

### Overview
The goal of the project was to develop a 3D planning algorithm that avoids static obstacles while meeting the minimum turning radius and boundary conditions. I achieved this by integrating Rapidly-Exploring Random Trees (RRT\*) with Dubins paths. RRT\* serves as the planning framework, while Dubins paths handle trajectory expansion between points, ensuring smooth and minimal-length paths under curvature constraints. The closed-form solution of Dubins paths reduces computation time during tree expansion.

The algorithm creates trajectories, checks for collisions with static obstacles, and adds valid paths to the planning tree. It has been tested with different configurations, obstacle placements, and curvature constraints. In 3D, the algorithm combines planar maneuvers to create feasible trajectories.

RRT\* provides asymptotic optimality, but simulation time limits lead to sub-optimal solutions. Challenges include slower 3D convergence due to larger state-space and difficulties in finding feasible paths for some configurations. Future improvements focus on faster convergence, handling dynamic environments/constraints.

### Pseudo-code for RRT*

1. **Initialization**  
   - Initialize the tree `T` with the initial state `Xinit`

2. **Main Loop**  
   For `k = 1` to `K` (number of iterations)  
   - Generate a random state `Xrand` using `RANDOM_STATE()`  
   - Find the nearest node `Xnear` in `T` using `NEAREST_NEIGHBOUR(Xrand, T)`  
   - Steer from `Xnear` towards `Xrand` to create a new state `Xnew` using `STEER(Xrand, Xnear)`  

   - If `Xnew` is collision-free
     - Identify nearby nodes `Lnear` within a radius `R` using `NEAR_NODES(T, Xnew, V)`
     - Choose the best parent for `Xnew` from `Lnear` using `CHOOSE_PARENT(T, Xnew, Lnear)`
     - Add `Xnew` to the tree `T` using `INSERT_NODE(Xnew)`
     - Rewire the tree within radius `R` to update parent connections using `REWIRE(T, Xnew, Lnear)`

3. **Output**  
   - Return the tree `T`


### Pseudo-code for 3D Dubins Path Planning

1. **Input Definitions**  
   - Define the initial point `(xi, yi, zi, θi, φi)` and the final point `(xf, yf, zf, θf, φf)`

2. **Coordinate Transformation**  
   - Translate and rotate the coordinate system to align the local frame with the initial point  
   - Define the local frame with `xt`-axis aligned to the velocity vector at the initial point

3. **Trajectory Planning**  
   - **T-plane Maneuver**  
     - Restrict motion to the horizontal plane `(xt, yt)`  
     - Compute the switching point where the trajectory intersects the P-plane tangentially  
     - Ensure that the flight path angle `φ` remains zero throughout this maneuver  

   - **P-plane Maneuver**  
     - Define a new local coordinate frame at the switching point  
     - Reduce the problem to a 2D Dubins path in the P-plane  
     - Divide the path into **CSC segments**  
        - **Segment 1**: An arc from the switching point to the start of the straight-line segment  
        - **Segment 2**: A straight-line segment  
        - **Segment 3**: An arc from the straight-line segment to the final point

4. **Path Generation**  
   - Compute the length of each segment  
   - Ensure curvature constraints are satisfied  

5. **Output**  
   - Combine the T-plane and P-plane paths to generate the final 3D Dubins path  
   - Return the 3D path


<img src="{{ site.url }}{{ site.baseurl }}/assets/Img1.png" alt="Dubins in 3D" width="400"/>

## Simulation Results

<div style="display: flex; flex-wrap: wrap; gap: 5px;">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Img2.png" alt="Description 2" width="420">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Img3.png" alt="Description 3" width="420">
</div>

<div style="display: flex; flex-wrap: wrap; gap: 5px;">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Img4.png" alt="Description 4" width="420">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Img5.png" alt="Description 5" width="420">
</div>

<div style="display: flex; flex-wrap: wrap; gap: 5px;">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Img6.png" alt="Description 6" width="420">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/Img7.png" alt="Description 7" width="420">
</div>

### References and Acknowledgment
1. Babaei AR and Mortazavi M. "Three-dimensional curvature-constrained trajectory planning based on in-flight waypoints." *Journal of Aircraft*, vol. 47, no. 4, 2010, pp. 1391–1398.

2. Dubins Lester E. "On curves of minimal length with a constraint on average curvature, and with prescribed initial and terminal positions and tangents." *American Journal of Mathematics*, vol. 79, no. 3, 1957, pp. 497–516.

3. Islam Fahad et al. "RRT*-Smart: Rapid convergence implementation of rrt* towards optimal solution." *2012 IEEE International Conference on Mechatronics and Automation*, IEEE, 2012, pp. 1651–1656.

4. Latombe Jean-Claude. *Robot Motion Planning*. Norwell, MA, USA: Kluwer Academic Publishers, 1991. ISBN: 079239206X.

5. LaValle Steven M and Kuffner Jr James J. "Randomized kinodynamic planning." *The International Journal of Robotics Research*, vol. 20, no. 5, 2001, pp. 378–400.

6. Shkel Andrei M and Lumelsky Vladimir. "Classification of the Dubins set." *Robotics and Autonomous Systems*, vol. 34, no. 4, 2001, pp. 179–202.

7. Karaman Sertac and Frazzoli Emilio. "Incremental sampling-based algorithms for optimal motion planning." *arXiv preprint arXiv:1005.0416*, 2010.

