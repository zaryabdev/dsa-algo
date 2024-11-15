Here’s a quick guide to help you prepare for CRUD operations in MongoDB for interviews:

---

### **1. What is CRUD?**

CRUD stands for **Create**, **Read**, **Update**, and **Delete**, which are the basic operations for interacting with a database.

---

### **2. CREATE**

**Operation**: Insert a document into a collection.

-   **Command**: `db.collection.insertOne()` or `db.collection.insertMany()`

**Examples**:

```javascript
// Insert one document
db.users.insertOne({ name: "John Doe", age: 30, email: "john@example.com" });

// Insert multiple documents
db.users.insertMany([
    { name: "Jane Doe", age: 25, email: "jane@example.com" },
    { name: "Alice", age: 28, email: "alice@example.com" },
]);
```

---

### **3. READ**

**Operation**: Retrieve documents from a collection.

-   **Command**: `db.collection.find()` or `db.collection.findOne()`

**Examples**:

```javascript
// Find all documents
db.users.find();

// Find with a condition
db.users.find({ age: { $gte: 25 } });

// Find one document
db.users.findOne({ email: "jane@example.com" });

// Projection (only include name and age)
db.users.find({}, { name: 1, age: 1, _id: 0 });
```

---

### **4. UPDATE**

**Operation**: Modify existing documents in a collection.

-   **Command**: `db.collection.updateOne()`, `db.collection.updateMany()`, or `db.collection.replaceOne()`

**Examples**:

```javascript
// Update one document
db.users.updateOne({ name: "John Doe" }, { $set: { age: 31 } });

// Update multiple documents
db.users.updateMany({ age: { $gte: 25 } }, { $set: { isActive: true } });

// Replace an entire document
db.users.replaceOne(
    { name: "Jane Doe" },
    { name: "Jane Smith", age: 26, email: "jane.smith@example.com" }
);
```

---

### **5. DELETE**

**Operation**: Remove documents from a collection.

-   **Command**: `db.collection.deleteOne()` or `db.collection.deleteMany()`

**Examples**:

```javascript
// Delete one document
db.users.deleteOne({ name: "Alice" });

// Delete multiple documents
db.users.deleteMany({ age: { $lt: 25 } });
```

---

### **6. BONUS: Query Operators**

-   **Comparison**: `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `$nin`
-   **Logical**: `$and`, `$or`, `$not`, `$nor`
-   **Element**: `$exists`, `$type`
-   **Array**: `$all`, `$elemMatch`, `$size`

**Example**:

```javascript
// Find users with age greater than 25 OR email containing "example.com"
db.users.find({
    $or: [{ age: { $gt: 25 } }, { email: /example\.com/ }],
});
```

---

### **7. Additional Tips**

-   Know the difference between `insertOne` and `insertMany`.
-   Understand the use of `$set`, `$unset`, and `$inc` for updates.
-   Be familiar with index creation (`db.collection.createIndex()`) to optimize queries.
-   Practice aggregations if mentioned in the job description.

Keep your answers concise and provide examples when discussing CRUD operations.
