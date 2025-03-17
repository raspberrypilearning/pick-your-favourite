## 回顾与思考

做得好，你学到了很多东西！ 现在是时候静下心来想一想了——思考我们学过的东西是很重要的，因为这能帮助我们更好地理解和记住新知识。

回答以下三个问题来帮助自己回顾并思考所学的内容。

每完成一个问题，点击提交。 我们会引导你找到正确答案。 你可以根据需要多次尝试。

玩得开心！

\--- question ---

---

## legend: 问题 1/3

当创建新变量来存储颜色和字体时，你的 CSS 可能看起来像这样...

## --- code ---

language: css
filename: default.css
line_numbers: false
--------------------------------------------------------

:root {
/\* 字体变量 \*/
\--main-font: 'sans-serif';

/\* 基本颜色 \*/
\--body-background: #FFFFFF;
\--body-text-colour: #000000;
\--nav-bar: #FFFFFF;
}

\--- /code ---

Which of these would allow you to **use** the `--body-background` variable in another CSS selector?

\--- choices ---

- ( ) `background-color: --body-background;` ()

  \--- feedback ---

  You need to tell CSS that you are using a variable.

  \--- /feedback ---

- (x) `background-color: var(--body-background);`

  \--- feedback ---

  正确！

  \--- /feedback ---

- ( ) `background-color: root(--body-background);`

  \--- feedback ---

  The `:root` selector is used to create variables for your whole webpage, but when you use them you need to use another keyword.

  \--- /feedback ---

\--- /choices ---

\--- /question ---
