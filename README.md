# HNG12 Stage 1 - Number Classification API

## Project Description
This API analyzes a given number and determines its mathematical properties. It also fetches a fun fact about the number from the [Numbers API](http://numbersapi.com/).

## Technology Stack
- **Framework**: Next.js (App Router)
- **Runtime**: NodeJS
- **Language**: TypeScript
- **Hosting**: Vercel
- **Version Control**: GitHub
- **External API**: [Numbers API](http://numbersapi.com/)

## API Endpoint
### **Base URL:**
```
https://lexiz-hng-backend-1
```

### **GET /api/classify-number?number={number}**
#### **Request Parameters:**
- `number` (integer) - The number to be classified.

#### **Response Format (200 OK):**
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### **Response Format (400 Bad Request - Invalid Input):**
```json
{
    "number": "alphabet",
    "error": true
}
```

## Running Locally
### **1. Clone the Repository**
```sh
git clone https://github.com/lexizuchenna/hng-backend-1.git
cd your-repo
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Start the Development Server**
```sh
npm run dev
```

The API will be available at:
```
http://localhost:3000/api/classify-number?number=371
```

## Deployment
The API is deployed on **Vercel**. To deploy your own version:
```sh
npx vercel
```

## Cross-Origin Resource Sharing (CORS)
This API allows requests from all origins using:
```ts
response.headers.set("Access-Control-Allow-Origin", "*");
```

## Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Node.js Developers for Hire](https://hng.tech/hire/nodejs-developers)

## Author
- **Your Name**
- GitHub: [@lexizuchenna](https://github.com/lexizuchenna)

