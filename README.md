# 🌤️ Weather Dashboard

A responsive weather dashboard built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It displays real-time weather information for any city using the **OpenWeather API**.

---

## 🚀 Live Demo
[https://weather-dashboard-green-gamma.vercel.app](https://weather-dashboard-green-gamma.vercel.app)

---

## ✨ Features
- 🔎 **City Search** – Enter any city name to see current weather.
- 🌡️ **Dynamic UI** – Temperature, humidity, wind speed, cloudiness.
- 🎨 **Dynamic Gradients** – Background color changes based on weather conditions.
- ⚠️ **Error & Loading States** – Clear feedback for invalid cities or slow connections.
- 📱 **Responsive Design** – Works on desktop, tablet, and mobile.

---

## 🛠️ Tech Stack
- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** [Lucide React](https://lucide.dev/)
- **Weather Data:** [OpenWeather API](https://openweathermap.org/api)

---

## ⚙️ Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/nsgundam/WeatherDashboard
   cd weather-dashboard
2. **Install dependencies**
    npm install
3. **Set environment variables**
    create a .env file and add your OpenWeather API key:
    NEXT_PUBLIC_OPENWEATHER_KEY=your_api_key_here
4. **Run the development server**
    npm run dev
    or
    yarn dev


## Project Structure
/app
  ├─ page.tsx           # Home page
  ├─ components/
  │    └─ WeatherCard.tsx
  ├─ lib/
  │    └─ weatherStyles.ts  # Background gradients by condition
  └─ types/
       └─ Weather.ts        # TypeScript types

## Future Enhancements
🌍 Geolocation support to auto-detect user’s location.
🕒 5-day forecast view.
⚡ Offline caching with Service Workers.

Made with ❤️ by Narunat.