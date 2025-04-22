## 为各个部分添加动画

在此步骤中，你将制作**三个**交叉观察器，它们将检测你的插槽何时进入视口并对其应用动画。

### 创建第一个观察器

--- task ---

打开 `scripts.js` 并找到`// 观察器`注释。

--- /task ---

--- task ---

为常量 `slot1observer` 创建一个新的 `IntersectionOberver` 实例。

添加 entries 数组和 `if` 语句，检查条目是否具有交叉性。

对于这些观察者，你希望**整个**目标位于视口中，因此将 `threshold` 设置为 `1`。

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2-9
---

// 观察器
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      
    }
  },
  { threshold: 1 }
);

--- /code ---

--- /task ---

--- task ---

在 `if` 语句中，编写向 `slot1` 添加类的代码。 暂时将 `""` 留空。

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 5
---

// 观察器
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("");
    }
  },
  { threshold: 1 }
);

--- /code ---

--- /task ---

--- task ---

**选择**你想要在第一个插槽中使用的动画。

在 **style.css** 中已经为你预先定义了 5 种动画：

1. `fade-in`
2. `grow-in`
3. `rise-in`
4. `slide-left`
5. `slide-right`

将动画的名称放在观察器的 `""` 里面。

如果你想使用其他的，你随时可以更改它。

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_number_start: 5
---
// 观察器
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("rise-in");
    }
  },
  { threshold: 1 }
);

--- /code ---

--- /task ---

--- task ---

现在，你需要设置你的 `IntersectionObserver` 来监视页面。

添加调用。

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 10
---

// 观察器
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("");
    }
  },
  { threshold: 1 }
);
slot1observer.observe(slot1);

--- /code ---

--- /task ---

--- task ---

**点击运行**

- 选择一个选项并向下滚动，你应该会看到第一个插槽出现然后播放动画。

--- collapse ---

---
title: 我的内容很长，动画不起作用
---

如果你的插槽中有很多内容， 它可能永远不会完全出现在视图中，并且由于你的 `threshold` 已设置为 `1` (元素的100%),，您的动画将不会触发。

为了解决这个问题，你可能想要完全删除阈值，像这样：

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 10
---

// 观察器
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("");
    }
  }
);
slot1observer.observe(slot1);

--- /code ---

或者你可以减少触发动画所需的元素数量。 例如，这需要一半的元素来触发......

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 10
---

// 观察器
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("");
    }
  },
  { threshold: 0.5 }
);
slot1observer.observe(slot1);

--- /code ---

--- /collapse ---

--- /task ---

在插槽出现之前显示动画看起来不太好，所以你要在设置动画之前让你的内容插槽隐藏。

--- task ---

打开 `style.css` 并找到 `.content` 选择器。

添加一个 `opacity` 属性，并将其设置为 `0` 。

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_number_start: 103
line_highlights: 110
---

.content {
  width: 100%;
  border-radius: 5px;
  box-shadow: 5px 5px black;
  padding: 5px;
  font-size: 32px;
  opacity: 0;
}

--- /code ---

**点击运行**

- 滚动即可再次查看动画。 该插槽应该不会在动画之前出现。

--- /task ---

### 为另外两个插槽添加观察器

--- task ---

打开 `scripts.js`。

复制你的第一个观察器。

--- /task ---

--- task ---

把它粘贴在下面。

将所有`slot1`的引用更改为 `slot2`。

你可以使用相同的动画或选择另一个动画。

--- collapse ---

---
title: 动画
---

有 5 种动画可供选择：

1. `fade-in`
2. `grow-in`
3. `rise-in`
4. `slide-left`
5. `slide-right`

--- /collapse ---

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2, 5, 10
---

// 观察器
const slot2observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot2.classList.add("slide-left");
    }
  },
  { threshold: 1 }
);
slot2observer.observe(slot2);

--- /code ---

**点击运行**

- 测试你的第二个动画。

--- /task ---

--- task ---

再次复制观察器并它粘贴到下面。

--- /task ---

--- task ---

更改所有引用，使它们显示`slot3`，也可能选择一个不同的动画。

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2, 5, 10
---

// 观察器
const slot3observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot3.classList.add("grow-in");
    }
  },
  { threshold: 1 }
);
slot3observer.observe(slot3);

--- /code ---

**点击运行**

- 测试你的第三个动画。

--- /task ---

接下来，你将使用 `localStorage` 让用户的选择永久保存！
