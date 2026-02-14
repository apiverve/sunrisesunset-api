# Sunrise Sunset API

Sunrise Sunset is a simple tool for getting the sunrise and sunset times. It returns the sunrise and sunset times for a given location and date.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)
[![npm version](https://img.shields.io/npm/v/@apiverve/sunrisesunset.svg)](https://www.npmjs.com/package/@apiverve/sunrisesunset)

This is a Javascript Wrapper for the [Sunrise Sunset API](https://sunrisesunset.apiverve.com?utm_source=npm&utm_medium=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/sunrisesunset
```

Using yarn:
```shell
yarn add @apiverve/sunrisesunset
```

---

## Configuration

Before using the Sunrise Sunset API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=readme)

The Sunrise Sunset API documentation is found here: [https://docs.apiverve.com/ref/sunrisesunset](https://docs.apiverve.com/ref/sunrisesunset?utm_source=npm&utm_medium=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const sunrisesunsetAPI = require('@apiverve/sunrisesunset');
const api = new sunrisesunsetAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  lat: 36.72016,
  lon: -4.42034,
  date: "01-16-2026"
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  lat: 36.72016,
  lon: -4.42034,
  date: "01-16-2026"
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  lat: 36.72016,
  lon: -4.42034,
  date: "01-16-2026"
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "solarNoon": "2025-02-20T12:32:53.132Z",
    "sunrise": "2025-02-20T07:01:34.082Z",
    "sunset": "2025-02-20T18:04:12.182Z",
    "sunriseEnd": "2025-02-20T07:04:17.987Z",
    "sunsetStart": "2025-02-20T18:01:28.278Z",
    "dawn": "2025-02-20T06:35:17.568Z",
    "dusk": "2025-02-20T18:30:28.696Z",
    "nauticalDawn": "2025-02-20T06:05:07.51Z",
    "nauticalDusk": "2025-02-20T19:00:38.754Z",
    "nightEnd": "2025-02-20T05:35:08.859Z",
    "night": "2025-02-20T19:30:37.405Z",
    "goldenHourEnd": "2025-02-20T07:36:59.509Z",
    "goldenHour": "2025-02-20T17:28:46.756Z"
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=readme), [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=readme), and [Refund Policy](https://apiverve.com/refund?utm_source=npm&utm_medium=readme).

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
