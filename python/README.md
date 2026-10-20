Sunrise Sunset API
============

Sunrise Sunset calculates exact sunrise and sunset times, twilight stages, and golden hour windows for any latitude and longitude coordinates. Paid plans can specify custom dates and receive solar noon.


[![PyPI version](https://img.shields.io/pypi/v/apiverve-sunrisesunset.svg)](https://pypi.org/project/apiverve-sunrisesunset/)

This is a Python wrapper for the [Sunrise Sunset API](https://apiverve.com/marketplace/sunrisesunset?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Installation

Using `pip`:

```bash
pip install apiverve-sunrisesunset
```

Using `pip3`:

```bash
pip3 install apiverve-sunrisesunset
```

---

## Configuration

Before using the Sunrise Sunset API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_sunrisesunset.apiClient import SunrisesunsetAPIClient

# Initialize the client with your APIVerve API key
api = SunrisesunsetAPIClient("[YOUR_API_KEY]")

query = {
    "lat": 36.72016,
    "lon": -4.42034,
    "date": "01-16-2026"
}

try:
    # Make the API call
    result = api.execute(query)

    # Print the result
    print(result)
except Exception as e:
    print(f"Error: {e}")
```

---

## Usage

The Sunrise Sunset API documentation is found here: [https://docs.apiverve.com/ref/sunrisesunset](https://docs.apiverve.com/ref/sunrisesunset?utm_source=pypi&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```python
# Import the client module
from apiverve_sunrisesunset.apiClient import SunrisesunsetAPIClient

# Initialize the client with your APIVerve API key
api = SunrisesunsetAPIClient("[YOUR_API_KEY]")
```

---

## Perform Request

Using the API client, you can perform requests to the API.

###### Define Query

```python
query = {
    "lat": 36.72016,
    "lon": -4.42034,
    "date": "01-16-2026"
}
```

###### Simple Request

```python
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "solarNoon": "2025-12-16T12:14:40.51Z",
    "sunrise": "2025-12-16T07:24:56.165Z",
    "sunset": "2025-12-16T17:04:24.854Z",
    "sunriseEnd": "2025-12-16T07:27:58.828Z",
    "sunsetStart": "2025-12-16T17:01:22.192Z",
    "dawn": "2025-12-16T06:56:02.774Z",
    "dusk": "2025-12-16T17:33:18.245Z",
    "nauticalDawn": "2025-12-16T06:23:38.134Z",
    "nauticalDusk": "2025-12-16T18:05:42.886Z",
    "nightEnd": "2025-12-16T05:52:07.048Z",
    "night": "2025-12-16T18:37:13.971Z",
    "goldenHourEnd": "2025-12-16T08:05:08.406Z",
    "goldenHour": "2025-12-16T16:24:12.613Z"
  }
}
```

---

## Error Handling

The API client provides comprehensive error handling through the `SunrisesunsetAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_sunrisesunset.apiClient import SunrisesunsetAPIClient, SunrisesunsetAPIClientError

api = SunrisesunsetAPIClient("[YOUR_API_KEY]")

query = {
    "lat": 36.72016,
    "lon": -4.42034,
    "date": "01-16-2026"
}

try:
    result = api.execute(query)
    print("Success!")
    print(result)
except SunrisesunsetAPIClientError as e:
    print(f"API Error: {e.message}")
    if e.status_code:
        print(f"Status Code: {e.status_code}")
    if e.response:
        print(f"Response: {e.response}")
```

### Handling Specific Error Types

```python
from apiverve_sunrisesunset.apiClient import SunrisesunsetAPIClient, SunrisesunsetAPIClientError

api = SunrisesunsetAPIClient("[YOUR_API_KEY]")

query = {
    "lat": 36.72016,
    "lon": -4.42034,
    "date": "01-16-2026"
}

try:
    result = api.execute(query)

    # Check for successful response
    if result.get('status') == 'success':
        print("Request successful!")
        print(result.get('data'))
    else:
        print(f"API returned an error: {result.get('error')}")

except SunrisesunsetAPIClientError as e:
    # Handle API client errors
    if e.status_code == 401:
        print("Unauthorized: Invalid API key")
    elif e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code >= 500:
        print("Server error - please try again later")
    else:
        print(f"API error: {e.message}")
except Exception as e:
    # Handle unexpected errors
    print(f"Unexpected error: {str(e)}")
```

### Using Context Manager (Recommended)

The client supports the context manager protocol for automatic resource cleanup:

```python
from apiverve_sunrisesunset.apiClient import SunrisesunsetAPIClient, SunrisesunsetAPIClientError

query = {
    "lat": 36.72016,
    "lon": -4.42034,
    "date": "01-16-2026"
}

# Using context manager ensures proper cleanup
with SunrisesunsetAPIClient("[YOUR_API_KEY]") as api:
    try:
        result = api.execute(query)
        print(result)
    except SunrisesunsetAPIClientError as e:
        print(f"Error: {e.message}")
# Session is automatically closed here
```

---

## Advanced Features

### Debug Mode

Enable debug logging to see detailed request and response information:

```python
from apiverve_sunrisesunset.apiClient import SunrisesunsetAPIClient

# Enable debug mode
api = SunrisesunsetAPIClient("[YOUR_API_KEY]", debug=True)

query = {
    "lat": 36.72016,
    "lon": -4.42034,
    "date": "01-16-2026"
}

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_sunrisesunset.apiClient import SunrisesunsetAPIClient

api = SunrisesunsetAPIClient("[YOUR_API_KEY]")

query = {
    "lat": 36.72016,
    "lon": -4.42034,
    "date": "01-16-2026"
}

try:
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
