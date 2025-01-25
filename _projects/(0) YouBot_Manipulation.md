---
name: Planning using Dubins and RRT*
tools: [Python]
image: 
description: 3D planning algorithm that avoids obstacles while meeting minimum turning radius and boundary point constraints

---

### Overview
This project focuses on developing a 3D obstacle avoidance algorithm by integrating Rapidly-Exploring Random Trees (RRT*) with Dubins paths. RRT* serves as the planning framework, while Dubins paths handle trajectory expansion between points, ensuring smooth and minimal-length paths under curvature constraints. The closed-form solution of Dubins paths reduces computation time during tree expansion.

The algorithm generates trajectories, checks for collisions with static obstacles, and integrates valid paths into the planning tree. It has been tested in various scenarios with different initial and final configurations, obstacle placements, and curvature constraints. In 3D environments, the algorithm uses a combination of planar maneuvers to construct a feasible trajectory.

While RRT* guarantees asymptotic optimality, the constraints on simulation time result in sub-optimal solutions. Challenges include slower convergence in 3D due to increased state-space dimensions and the inability to find feasible trajectories in certain configurations. Future enhancements aim to improve convergence rates, extend the method to dynamic environments, and incorporate dynamic constraints for real-world applications.


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


### Results

### References and Acknowledgment