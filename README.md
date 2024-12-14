
# URL Shortener

A simple URL shortener built with Node.js, Express, and MongoDB. This project allows you to shorten URLs and redirect users to the original URL.

## Features

- Shorten any URL
- Redirect users to the original URL when they visit the shortened link
- Store the original and shortened URLs in MongoDB

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or above) installed
- MongoDB (local or MongoDB Atlas) running
- npm (Node Package Manager) installed

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Set up your MongoDB database:
   - If you're using MongoDB Atlas, create a database cluster and get the connection string.
   - If you're using local MongoDB, ensure it's running on the default port (`27017`).

4. Configure your environment variables:
   Create a `.env` file in the root of your project and add the following:

   ```bash
   MONGODB_URI=mongodb://localhost:27017/url-shortener
   PORT=3000
   ```

   Replace `MONGODB_URI` with your MongoDB connection string if you're using MongoDB Atlas.

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Visit `http://localhost:3000` in your browser.

3. Use the form to input a long URL, and the app will generate a shortened version.

4. You can access the original URL by visiting the shortened link.

## API Endpoints

### POST `/shorten`
Shortens a URL.

**Request body:**
```json
{
  "url": "https://example.com"
}
```

**Response:**
```json
{
  "shortened": "http://localhost:3000/abc123"
}
```

### GET `/abc123`
Redirects to the original URL (in this case, `https://example.com`).

## Contributing

If you want to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. You can also open issues for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This `README.md` provides an overview of the project, installation steps, and instructions on how to use the application. Modify the details as per your project's specific requirements.
