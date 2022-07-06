# Setting NextJS Local Environment Variables

Steps required to export a local environment variable to NextJS:

| Step | Description |
| - | - |
| 1 | Create `.env.local` file at the root of your NextJS project |
| 2 | Create variables with "NEXT_PUBLIC" as the prefix. EXAMPLE: `NEXT_PUBLIC_API_URL` |
| 3 | Restart NextJS process on server. |

# Example

Create your .env.local file like it is demonstrated below.

#### .env.local File

```javascript
NEXT_PUBLIC_API_URL = http://192.168.0.243:8001
NEXT_PUBLIC_RANDOM_VAR = http://192.168.0.10:8000
NEXT_PUBLIC_ANYTHING_I_WANT = http://192.168.0.11:8000
```

Next, use the variables in your code.

#### React Code Usage

```language
export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const randomVar = process.env.NEXT_PUBLIC_RANDOM_VAR;
  const whatIWant = process.env.NEXT_PUBLIC_ANYTHING_I_WANT;
  return (
    <>
      <h1>{baseUrl}</h1>
      <h1>{randomVar}</h1>
      <h1>{whatIWant}</h1>
    </>
  );
}

```

# Notes

As long as your variable has the `NEXT_PUBLIC` prefix in the variable name, this will be accessible to your React/NextJS code.


