# 0001 — Level-order sum (BFS with a level counter)

## Problem

Return a list holding the sum of every level of a binary tree, root first.

```
       1
      / \
     2   3
    / \   \
   4   5   6

→ [1, 5, 15]
```

## Solution

```python
from collections import deque
from typing import List, Optional


class Solution:
    def level_order_sum(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []

        res: List[int] = []
        queue = deque([root])

        while queue:
            # number of nodes at the current level
            level_size = len(queue)
            level_sum = 0

            for _ in range(level_size):
                cur = queue.popleft()
                level_sum += cur.val

                if cur.left:
                    queue.append(cur.left)
                if cur.right:
                    queue.append(cur.right)

            # sum of all nodes at the current level
            res.append(level_sum)

        return res
```

## The template

`level_size = len(queue)` **before** the inner loop is the whole trick. The queue holds the
current level followed by the next one; snapshotting the length freezes the boundary, so the
`for` loop consumes exactly one level and the children appended inside it land in the next
iteration. No sentinel, no second queue, no depth field.

That single line is what turns plain BFS into level-aware BFS. Without it you get a flat
traversal and have no idea where one level ends.

Two supporting choices:

- `deque`, not `list`. `list.pop(0)` is O(n) — it shifts the whole tail. `deque.popleft()`
  is O(1). Note `deque.pop()` pops from the **right**, so `popleft` is required for FIFO.
- Snapshot the length, don't recompute `len(queue)` in the loop condition. It grows as you
  append children, so an unsnapshotted loop would run past the level boundary.

## Review notes

- **`sum = 0` shadowed the builtin `sum`.** Renamed to `level_sum` (pylint `W0622`). Not a
  bug in this function because it never calls `sum()`, but it fails the moment you want a
  builtin in the same scope:

  ```python
  def f():
      sum = 0
      sum += 1
      return sum([1, 2, 3])   # TypeError: 'int' object is not callable
  ```

  This is a real interview-adjacent risk — it is exactly the kind of thing that gets flagged
  when someone reviews your code, and the fix costs nothing at write time.

## Verified

| Case | Result |
|---|---|
| 6-node tree above | `[1, 5, 15]` ✔ |
| `None` | `[]` ✔ |
| Single node | `[7]` ✔ |
| All negative (`-1 / -2,-3`) | `[-1, -5]` ✔ |
| 1001-deep left-skewed chain | 1001 levels, no recursion limit ✔ |

The left-skewed case matters: it confirms iterative BFS is immune to the recursion-depth
limit that would kill an equivalent DFS.

## Variants this template unlocks

Once the level boundary is available, most level-based problems are a small edit:

- Level **max** / **min** / **average** — same loop, different accumulator
- **Right-side view** — take the last node of each level
- **Zigzag order** — reverse the level buffer on odd levels
- **Max width** — track indices instead of values
- **Minimum depth** — stop at the first level with a leaf
- **Connect next-right pointers** — link adjacent nodes within a level

## When to use DFS instead

BFS wins when the answer is per-level or depth-shortest. DFS-with-depth wins when the answer
is per-root-to-leaf-path (path sums, root-to-leaf sequences) — there the level boundary is
irrelevant and the call stack carries the path for free.
