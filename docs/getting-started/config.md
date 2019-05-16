---
id: config
title: Custom Budgets
---

## Getting started with custom budgets or lighthouse configuration

You can mount your own configuration file into the container to override the default budgets and lighthouse configuration if you wish too.

The easiest way to get started with an example is to follow these quick steps:

### 1. Create a new directory

```sh
mkdir my-custom-budgets && cd my-custom-budgets
```

### 2. Create your new configuration

```sh
# Copy the default one from the GitHub project locally
curl -H "Accept: application/json" https://raw.githubusercontent.com/boyney123/performance-budgets/master/example/config/lighthouse.json > lighthouse.json
```

### 3. Run against your new custom budgets

```sh
 ## command, just add the url on the end
 docker run --rm -v $(pwd)/:/usr/src/performance-budgets/src/config boyney123/performance-budgets {url}

 #Example running against YouTube
 docker run --rm -v $(pwd)/:/usr/src/performance-budgets/src/config boyney123/performance-budgets https://youtube.com
```

Now the performance-budgets container will run against your new configuration file. You can go into the configuration file and change the lighthouse settings and budgets.

## Understanding Budgets

With lighthouse you can set different types of budgets.

You can find detailed information here:

- https://developers.google.com/web/tools/lighthouse/audits/budgets
- [Lighthouse configuration from GitHub ](https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/performance-budget.js)

#### Sizes

The `budget` values in the config are in `kb`.

```javascript
    ...
    "resourceSizes": [
      {
        // script budgets (e.g 300kb total script budget)
        "resourceType": "script",
        "budget": 300
      },
      {
         // image budgets (e.g 100kb total image budget)
        "resourceType": "image",
        "budget": 100
      },
      {
        // third-party scripts budgets (e.g 200kb total 3rd party budget)
        "resourceType": "third-party",
        "budget": 200
      },
      {
        // document size budget (e.g 200kb document size)
        "resourceType": "document",
        "budget": 200
      },
      {
        // stylesheet size budget (e.g 200kb stylesheet size)
        "resourceType": "stylesheet",
        "budget": 200
      },
      {
        // media size budget (e.g 200kb media size)
        "resourceType": "media",
        "budget": 200
      },
      {
        // font size budget (e.g 200kb font size)
        "resourceType": "font",
        "budget": 200
      },
      {
        // total budget of site (e.g 1000kb)
        "resourceType": "total",
        "budget": 1000
      }
    ]
  }
  ...
```

#### Counts

`resourceCounts` are the number of requests.

```javascript
    ...
    "resourceCounts": [
      {
        // total number of script requests
        "resourceType": "script",
        "budget": 10
      },
      {
         // total number of image requests
        "resourceType": "image",
        "budget": 2
      },
      {
        // total number of 3rd party requests
        "resourceType": "third-party",
        "budget": 5
      },
      {
        // total number of document requests
        "resourceType": "document",
        "budget": 1
      },
      {
        // total number of css requests
        "resourceType": "stylesheet",
        "budget": 3
      },
      {
        // total number of media requests
        "resourceType": "media",
        "budget": 3
      },
      {
        // total number of font requests
        "resourceType": "font",
        "budget": 6
      },
      {
        // total number of requests
        "resourceType": "total",
        "budget": 20
      }
    ]
  }
  ...
```

## Further configuration

You can find the lighthouse here: https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md

You can edit the `lighthouse.json` configuration file with any lighthouse config. This config will be passed onto lighthouse when running.
