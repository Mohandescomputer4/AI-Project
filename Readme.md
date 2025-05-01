# Piscifelis - AI Pathfinding Project

**Piscifelis** is a simple yet effective project for finding paths between two points in a coordinate system. It is designed to determine the shortest possible path—well, _maybe_!  
This project was developed as part of the **AI course at Shahed University** and is licensed under MIT, making it freely accessible to learners.

## Teaching Assistant:
- **Ehsan Ghafari Sadr**

## Implemented Pathfinding Algorithms:
This project supports several fundamental pathfinding algorithms:
- [Depth First Search (DFS)](https://en.wikipedia.org/wiki/Depth-first_search)
- [Breadth First Search (BFS)](https://en.wikipedia.org/wiki/Breadth-first_search)
- [Dijkstra's Algorithm](https://en.wikipedia.org/wiki/Dijkstra's_algorithm)
- [A\* Search Algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm)
  - [Manhattan Heuristic](http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html#diagonal-distance)
  - [Euclidean Heuristic](http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html#euclidean-distance-squared)

## How to Use

Piscifelis offers two execution modes:
1. **Manual Mode** - Define obstacles, start, and target points yourself.
2. **Random Mode** - Automatically generates obstacles and selects start and target points randomly.

### **Manual Mode Usage**
- Place obstacles anywhere on the grid; they will appear in black.
- Click **"Start Block"** to select the starting point.
- Click **"Target Block"** to define the target.
- If you prefer a completely randomized setup, click **"Create Block"**, then select **"Random Grid"** to let the system set obstacles and points automatically.

### **Algorithm Execution**
- Click **"Algorithm"** to view available search algorithms.
- Select an algorithm from the list.
- Click **"Visualize"** to execute the selected algorithm.
  - **Visited nodes** will be marked in **pink**.
  - **Final chosen path** will be shown sequentially in **blue**.

### **A\* Customization**
- Choose between **Manhattan** or **Euclidean heuristics** for A* search.
- Adjust the admissibility factor **(ε)** via **"Settings"** > **"ε admissible"**.

### **Grid Size Customization**
- Default settings are optimized for standard laptop screens.
- To modify row or column counts, access **"Settings"** and adjust grid parameters.

### **Reset and Clear Graph**
- **"Reset Graph"**: Clears the path and algorithm-related data while preserving obstacles.
- **"Clear Graph"**: Removes all obstacles, paths, start, and target points.

### **Performance Metrics**
- View total **visited nodes** and **algorithm execution time (ms)** on-screen.

## License
This project is licensed under the **MIT License**, making it open-source for learners and contributors.
