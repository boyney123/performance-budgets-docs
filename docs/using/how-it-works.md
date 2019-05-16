---
id: how-it-works
title: How it works
---

**performance-budgets** currently uses Docker to create an image with Chrome and lighthouse installed, then a custom script calls lighthouse against your given url and reports if you are breaking or passing your performance budgets.

In the future we hope to use other tools like `puppeteer` to get more information about your webpage and allow you to set even more budgets.
