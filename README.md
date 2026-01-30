# 🩺 Carely — MedTech Appointment & Consultation Platform

Carely is a **full-stack medtech platform** that connects **patients and doctors** through a seamless appointment booking and online consultation experience.
Doctors can list their expertise and availability, while patients can search, book, pay, and attend consultations via **Zoom**, with automated **email reminders**.

---

## Key Features

### Doctor Features

* Doctor registration & authentication
* Add medical expertise, consultation fees, and available schedules
* Manage appointment slots
* Secure access using JWT-based authentication

### Patient Features

* Patient registration & login
* Search doctors by:

  * Disease / symptoms
  * Consultation fee
  * Availability
* View doctor profiles and schedules
* Book appointments with real-time availability checks
* Join consultations via **Zoom**

### Payments & Notifications

* Secure online payments using **Razorpay**
* Automated **email reminders sent 10 minutes before appointment**
* Email notifications powered by **Nodemailer**

---

## Tech Stack

### Backend

* **TypeScript**
* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**

### Security & Validation

* **JWT** – Authentication & authorization
* **Bcrypt** – Password hashing
* **Zod** – Schema validation
* **ESLint** – Code quality & consistency

### Integrations

* **Razorpay** – Payment gateway
* **Nodemailer** – Email notifications
* **Zoom** – Online consultation meetings

---

## System Design Highlights

* Role-based authentication (Doctor / Patient)
* Secure password storage using bcrypt hashing
* Input validation at API boundaries using Zod
* Token-based session handling with JWT
* Modular Express architecture (routes, controllers, services)
* Payment verification handled server-side for security
* Scheduled email reminders before appointments

---

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
ZOOM_API_KEY=your_zoom_key
ZOOM_API_SECRET=your_zoom_secret
```

---

## Getting Started

### 1 Clone the repository

```bash
git clone https://github.com/your-username/carely.git
cd carely
```

### 2 Install dependencies

```bash
npm install
```

### 3 Run the server

```bash
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## Code Quality & Best Practices

* Strict TypeScript typing
* Centralized error handling
* ESLint enforced standards
* Clean separation of concerns
* Secure handling of sensitive operations (auth, payments)

---

