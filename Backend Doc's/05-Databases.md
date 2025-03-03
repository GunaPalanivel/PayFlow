## 1. Databases and Storage

### 1.1 Why Use a Database?

Storing data directly on a server is inefficient. Databases provide structured storage, scalability, and reliability.

### 1.2 Types of Databases

- **Relational Databases (SQL)**: Structured, uses tables (e.g., PostgreSQL, MySQL).
- **NoSQL Databases**: Flexible, stores unstructured data (e.g., MongoDB, Firebase).

### 1.3 Database Modeling and Relationships

Data is structured using models, schemas, and relationships (one-to-one, one-to-many, many-to-many). This ensures efficient data retrieval and integrity.

## 2. Backend Security Measures

- **Authentication & Authorization**: JWT (JSON Web Tokens) for user identity verification.
- **Rate Limiting**: Prevents abuse by limiting requests per user.
- **Bot Protection**: Tools like Arcjet safeguard against automated attacks.
- **Error Handling & Logging**: Global error handling ensures smooth debugging.

## 3. Automation & Deployment

### 3.1 Smart Email Reminders

Using Upstash to automate notifications, scheduled workflows, and business logic execution.

### 3.2 Deploying to a VPS

Setting up a **Virtual Private Server (VPS)** grants full control over deployments, ensuring scalability and reliability.

### **4.1 What is a Database?**

A database is a specialized software system designed to store, organize, and manage data efficiently. Unlike regular file storage, databases are optimized for **speed, security, and scalability**, making them essential for web applications like social media platforms, banking apps, and e-commerce stores.

### **4.2 Types of Databases**

Databases are broadly categorized into two types:

#### **4.2.1 Relational Databases (SQL)**

Relational databases store data in structured tables with rows and columns, similar to a spreadsheet. They use **Structured Query Language (SQL)** to query and manipulate data.

- **Popular SQL Databases:**

  - MySQL
  - PostgreSQL
  - Microsoft SQL Server

- **Best Use Cases:**
  - Banking systems
  - E-commerce platforms
  - Inventory management

#### **4.2.2 Non-Relational Databases (NoSQL)**

NoSQL databases provide a flexible way to store data without relying on rigid table structures. They are optimized for handling unstructured and semi-structured data.

- **Subtypes of NoSQL Databases:**

  - **Document-based (e.g., MongoDB)**: Stores data in JSON-like documents.
  - **Key-Value Stores (e.g., Redis)**: Stores simple key-value pairs.
  - **Graph Databases (e.g., Neo4j)**: Optimized for complex relationships between entities.

- **Best Use Cases:**
  - Social media apps
  - IoT devices
  - Real-time analytics

### **4.3 Choosing the Right Database**

- **If you need structured data with clear relationships → Choose SQL databases.**
- **If you need scalability and flexibility for unstructured data → Choose NoSQL databases.**

### **4.4 How Databases Interact with Backend Applications**

The process of communication between a backend application and a database follows a standard flow:

1. **Client sends a request** (e.g., "Fetch my subscriptions").
2. **Backend processes the request** and determines necessary data retrieval.
3. **Database executes a query** to fetch, update, or delete data.
4. **Backend formats the response** (usually in JSON) and sends it to the client.

#### **Example Queries:**

- **SQL Query:**
  ```sql
  SELECT * FROM subscriptions WHERE user_id = 123;
  ```
- **NoSQL (MongoDB) Query:**
  ```javascript
  db.subscriptions.find({ user_id: 123 });
  ```

### **4.5 Using ORMs (Object-Relational Mappers)**

Writing raw queries can be tedious and error-prone, especially for large projects. **ORMs** simplify database interactions by allowing developers to use programming languages instead of raw SQL.

- **Popular ORMs for SQL Databases:**

  - Prisma
  - Sequelize
  - Drizzle

- **Popular ORMs for NoSQL Databases:**
  - Mongoose (MongoDB)

#### **Example of ORM Queries:**

- **Fetching a User with Prisma (SQL):**
  ```javascript
  const user = await prisma.user.findUnique({ where: { id: 123 } });
  ```
- **Fetching a User with Mongoose (NoSQL):**
  ```javascript
  const user = await User.findOne({ _id: 123 });
  ```

---

Head's to the next section: [06-Backend Architectures](./06-Backend%20Architectures.md) 🚀
