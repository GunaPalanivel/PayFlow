## 1. **Setup and Development Tools**

### 1.1 API Testing Tool - HTTPie

- An alternative to Postman for testing API endpoints.
- Provides a command-line interface for making HTTP requests.
- Simplifies debugging and request automation.

### 1.2 Node.js Backend Setup

- The API is built with Node.js using Express.js.
- Controllers handle business logic for user authentication, subscriptions, and security.
- Endpoints structured under `API V1` for versioning.

---

## 2. **API Endpoints & Functionality**

### 2.1 Root Endpoint

- `GET /` → Returns a welcome message (`Welcome to the Subscription Tracker API`).

### 2.2 User Management

- `POST /api/v1/signup` → Registers a user and returns a **JSON Web Token (JWT)**.
- `GET /api/v1/users/{id}` → Retrieves user data (requires authentication via JWT).
- `GET /api/v1/users` → Retrieves all users (admin access required).

### 2.3 Subscription Management

- `POST /api/v1/subscriptions` → Creates a new subscription.
  - Fields: `name`, `price`, `currency`, `frequency`, `start_date`, `payment_method`.
  - Auto-calculates `renewal_date` based on `start_date` and `frequency`.
- Validation ensures correct data formats and prevents invalid inputs.

---

## 3. **Security & Performance Optimization**

### 3.1 Rate Limiting

- Prevents API abuse by limiting the number of requests per user.
- Implemented using **Arcjet** to block excessive requests.
- Protects against DoS attacks and prevents server overload.

### 3.2 Bot Protection

- Prevents automated bots from spamming API endpoints.
- Ensures legitimate traffic and enhances system security.

### 3.3 Authentication & Authorization

- JWT-based authentication for securing API endpoints.
- Bearer tokens must be included in the `Authorization` header.
- Ensures only authenticated users can access their data.

---

## 4. **Automated Workflows & Email Notifications**

### 4.1 Subscription Reminders

- Automated email notifications before the renewal date.
- Helps users cancel unwanted subscriptions in advance.
- Example: Netflix sends renewal reminders to users before charging them.

### 4.2 Workflow Automation Using **Upstash**

- Serverless Redis for managing background tasks and scheduling.
- Enables scalable and real-time event-driven workflows.
- Used for sending automated subscription renewal reminders.

---

## 5. **Deployment & VPS Hosting**

### 5.1 Why Use a VPS?

- **Full control:** Custom configurations and dedicated resources.
- **Better performance:** Unlike shared hosting, resources are allocated exclusively.
- **Real-world skills:** Experience in server management and deployment.
