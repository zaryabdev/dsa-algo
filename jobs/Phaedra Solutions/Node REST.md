Here’s a quick guide to prepare for interview questions on building RESTful APIs, middleware, and error handling in **Express.js**:

---

### **1. What is RESTful API?**

A RESTful API is an architectural style for building APIs:

-   **Stateless**: Server doesn't store client state.
-   **Resource-based**: Uses URLs to represent resources.
-   **HTTP Methods**:
    -   **GET**: Retrieve data.
    -   **POST**: Create data.
    -   **PUT/PATCH**: Update data.
    -   **DELETE**: Remove data.

---

### **2. Setting Up Express.js**

```javascript
const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Example route
app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

### **3. Building RESTful Routes**

-   Define routes for **CRUD operations**.

**Example**: API for managing "users"

```javascript
const users = []; // Mock data

// GET all users
app.get("/users", (req, res) => {
    res.json(users);
});

// POST create a user
app.post("/users", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT update a user
app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    users[id] = updatedUser;
    res.json(updatedUser);
});

// DELETE a user
app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    users.splice(id, 1);
    res.status(204).send();
});
```

---

### **4. Middleware in Express.js**

Middleware functions are functions that execute before the final route handler. Common uses include **logging**, **authentication**, and **error handling**.

**Built-in Middleware**:

-   `express.json()` for parsing JSON.
-   `express.urlencoded()` for parsing URL-encoded data.

**Custom Middleware Example**:

```javascript
// Logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});
```

**Third-Party Middleware**:

-   **cors**: For handling cross-origin requests.
-   **helmet**: For enhancing API security.

**Example**:

```javascript
const cors = require("cors");
const helmet = require("helmet");

app.use(cors());
app.use(helmet());
```

---

### **5. Error Handling in Express.js**

Proper error handling ensures the API is robust and user-friendly.

**Basic Error Handling Middleware**:

```javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        error: err.message || "Internal Server Error",
    });
});
```

**Throwing Errors in Routes**:

```javascript
app.get("/error", (req, res, next) => {
    const err = new Error("This is a forced error");
    err.status = 400;
    next(err);
});
```

**404 Not Found Middleware**:

```javascript
app.use((req, res, next) => {
    res.status(404).json({ error: "Route not found" });
});
```

---

### **6. Tips for Interviews**

1. **Understand HTTP Status Codes**:

    - 200: OK
    - 201: Created
    - 400: Bad Request
    - 401: Unauthorized
    - 404: Not Found
    - 500: Internal Server Error

2. **Explain Middleware Flow**:
   Middleware executes in the order it’s defined. Use `next()` to pass control.

3. **Securing APIs**:

    - Use **helmet** and **rate-limiting**.
    - Use **JWT** for authentication.

4. **Validation**:
   Use libraries like `Joi` or `express-validator` to validate request data.

**Example: Using Joi for Validation**

```javascript
const Joi = require("joi");

app.post("/users", (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    next();
});
```

---

### **7. Practice Challenges**

-   Build a basic **To-Do API** with CRUD routes.
-   Add **JWT authentication** to a sample API.
-   Handle errors for invalid JSON inputs or unauthorized access.

---

Focus on keeping answers concise and supported with examples. Be ready to explain the **"why"** behind design decisions like middleware order or error handling choices.
