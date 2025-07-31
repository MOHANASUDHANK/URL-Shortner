


##  URL Shortener

# 🔗 URL Shortener

A full-stack URL shortening application built with **React**, **Node.js**, **Express**, and **MySQL**. It allows users to shorten long URLs, track redirections, and analyze link usage.

---

## 🚀 Features

- ✂️ Shorten long URLs into custom or randomly generated short links.
- 🌐 Frontend built with React .
- 💾 Backend uses Node.js + Express + MySQL.
- ⚙️ RESTful API with error handling and validations.

---



---

## 🛠️ Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MySQL

---

## ⚙️ Setup Instructions

### 🔧 Backend

```bash
cd server
npm install
# Create .env with DB credentials and base URL
npm start
````

### 🌐 Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🌍 Environment Variables (`.env`)

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=url_shortener
BASE_URL=http://localhost:5000
```

---

## 📬 API Endpoints

| Method | Endpoint       | Description              |
| ------ | -------------- | ------------------------ |
| POST   | /api/shorten   | Create a short URL       |
| GET    | /\:shortUrl    | Redirect to original URL |
---

## 🧠 Future Improvements

* ✅ User login & dashboard
* 📊 Detailed analytics (location, device, etc.)
* ⏳ Expiry date for links
* 🧼 Custom short URLs

---


## 🧑‍💻 Author

**Mohanasudhan K**
[GitHub](https://github.com/MOHANASUDHANK) 
---

> *“Shorten it like you mean it!”*
