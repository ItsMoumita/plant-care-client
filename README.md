# 🌿 Plant Care 

A full-stack, mobile-responsive web application designed to help users manage and monitor the care of their indoor and outdoor plants. Built with React, Firebase, TailwindCSS, and more.

**Live Demo**: [🌱 Visit Plant Care](https://plant-care-fc5f9.web.app/)

---

---

## 🚀 Features

- 🔐 **Authentication**
  - Secure Login/Register using Email and Google Sign-In.
  - Protected routes for logged-in users.
  - Dynamic navbar with conditional rendering based on user state.

- 🌱 **Plant Management**
  - Add, Update, Delete personal plant entries.
  - Track watering frequency, care level, health status, and more.
  - View all plants or filter to "My Plants".

- 📅 **Care Tracker**
  - Date fields for last and next watering.
  - Sort plants by care level or next watering date.

- 📲 **Responsive Design**
  - Mobile-first design with fully responsive layouts.
  - Smooth animations using **AOS**.

- 🌞🌚 **Light/Dark Theme**
  - Toggle between light and dark modes for better usability.

- 🎨 **Beautiful UI**
  - Themed around nature with calming green tones.
  - Interactive feedback with SweetAlert and Toast notifications.

---

## 🛠️ Tech Stack

| Frontend | Backend | Authentication | Styling | Animations & Extras |
|----------|---------|----------------|---------|----------------------|
| React 19 | Firebase Firestore | Firebase Auth | Tailwind CSS | AOS, SweetAlert2 |
| React Router v7 | Firebase Hosting | Google Sign-In | React Icons | React Toastify |
| Swiper.js | - | - | Lucide React | Lottie, Carousel |

---

---

## 🔐 Authentication

- Firebase Email/Password
- Google Sign-In
- Auth state persists using Firebase Auth
- Redirects user to intended route after login

---

## 📌 Pages & Routes

| Page           | Path              | Access      |
|----------------|-------------------|-------------|
| Home           | `/`               | Public      |
| All Plants     | `/allplants`      | Public      |
| Add Plant      | `/addplant`       | Private     |
| My Plants      | `/myplants`       | Private     |
| View Details   | `/plant/:id`      | Private     |
| Update Plant   | `/update/:id`     | Private     |
| Login          | `/login`          | Public      |
| Register       | `/register`       | Public      |
| 404 Page       | `*`               | Public      |

---

## 📈 Sorting & Filtering

- Sort by **Next Watering Date**
- Sort by **Care Level**

---

## 🌐 Deployment

- Hosted on **Firebase Hosting**
- Uses **Firestore** for real-time data
- Firebase CLI for deployment

---


# Install dependencies
npm install

# Run the app
npm run dev
⭐ Acknowledgements
Firebase

React

TailwindCSS

AOS

SweetAlert2

Lottie

