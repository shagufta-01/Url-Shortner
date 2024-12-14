

---

# Node.js URL Shortener

This is a simple URL shortener built using Node.js, Express, and MongoDB. It allows users to input a long URL and receive a shortened version that can be used to redirect to the original URL.

## Features

- Generate short URLs for long URLs
- Redirect short URLs to the original URL
- Simple and easy-to-use API

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MongoDB**: [Download MongoDB](https://www.mongodb.com/try/download/community)
- **Git** (optional for version control): [Download Git](https://git-scm.com/downloads)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```

2. **Install dependencies**:
   ```bash
   npm install
   npm install mongoose
   npm install express
   npm install short-id
   npm install nanoid
   ```

3. **Set up environment variables** (optional):
   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string:
     ```
     MONGO_URI=mongodb://127.0.0.1:27017/your-database-name
     ```

4. **Start the server**:
   ```bash
   npm start
   ```

   The server should now be running on `http://localhost:9000`.

## API Endpoints

- **GET `/`**: Basic route to check server status.
- **POST `/`**: Generate a short URL.
  - **Body**: `{ "url": "http://www.example.com" }`
- **GET `/:shortid`**: Redirect to the original URL associated with the short ID.

## .gitignore

The following files and directories should be excluded from version control:

```
node_modules/
.env
package-lock.json
```

## Usage

- Use Postman or any HTTP client to send requests to the API.
- To generate a short URL, send a POST request to `http://localhost:9000/` with a JSON body containing the original URL.
- Use the returned short URL to redirect to the original URL.

## License

This project is open-source and available under the MIT License.

---

Make sure to update the repository URL, MongoDB connection string, and other placeholders as needed.
