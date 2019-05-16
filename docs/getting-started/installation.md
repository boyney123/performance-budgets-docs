---
id: installation
title: Installation
---

Thanks to Docker getting something up and running should be quick.

## Prerequisites

- Docker: 18.0 or greater

## Getting Started with Default Budgets

```sh
docker run --rm boyney123/performance-budgets {url}

#example
docker run --rm boyney123/performance-budgets https://example.com
```

This will pull down the `performance-budgets` image and run the default budget configuration against your given url. If you want to set your own budgets please read [Custom Budgets](/docs/getting-started/config).
