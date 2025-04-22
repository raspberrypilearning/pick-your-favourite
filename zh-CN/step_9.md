## 升级你的项目

在此步骤中，你可以通过以下方式升级您的项目：

- 为内容插槽添加更多样式
- 向下拉菜单添加更多选项

你不必同时做这两件事。 选择一个你感兴趣并且时间允许的去做。

\--- collapse ---

---

## title: 为你的内容插槽添加更多样式

目前，你的内容插槽采用 `background-color` 和 `color` 样式。

你还可以添加样式来更改 `h1` 或任何其他元素的颜色。

要设置特定元素的样式，你可以在类选择器中添加一个元素选择器。

例如，**足球** 示例为每个类的 `h1` 元素添加了一种颜色：

## --- code ---

language: css
filename: style.css
---------------------------------------------------

\#slot-1.man-city {
background-color: var(--slot-1-man-city);

```
h1 {
    color: var(--slot-2-man-city);
}
```

}

\--- /code ---

你可以看到它使用另一个插槽中的颜色将网页连接在一起。

你可以为你的内容添加任何您想要的样式。 例如，**恐龙** 示例使用 `text-align` 属性来更改 **活动** 内容槽中的对齐方式。

## --- code ---

language: css
filename: style.css
---------------------------------------------------

\#slot-3.triceratops {
background-color: var(--slot-3-triceratops);
text-align: left;
color: white;
h1 {
color: var(--slot-2-triceratops);
text-align: center;
}
}

\--- /code ---

\--- /collapse ---

\--- collapse ---

---

## title: 添加另一个选项

如果你有更多时间，你可能希望在下拉菜单中添加更多选项供用户选择。

\--- task ---

打开 `default.css` 并为你的新选项添加新颜色：

- 身体
- 插槽 1
- 插槽 2
- 插槽 3

\--- /task ---

\--- task ---

打开 `style.css` 并为`<body>` 以及您的每个内容栏位创建新类。 使用你的新颜色来设计插槽的样式。

\--- /task ---

\--- task ---

打开 `scripts.js` 并创建一个名为 `option4()` 的新函数。

你可以复制以前的某个函数来让这个过程更容易。

应用你刚刚创建的类并更改内容以匹配你的新选项。

确保你还设置了 `choice` 变量以匹配函数末尾的新选项。

\--- /task ---

\--- task ---

打开 `index.html` 并在 `drop-down-options` `<div>` 中添加一个新的按钮。

添加 `onclick` 属性来调用将更改内容的新函数。

\--- /task ---

你可以重复上述步骤，将任意数量的选项添加到你的网页！

\--- /collapse ---
