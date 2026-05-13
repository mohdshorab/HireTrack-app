# HireTrack 🚀

> [!IMPORTANT]
> **Status: Work in Progress** 🚧

HireTrack is a high-performance, production-grade React Native application designed to help job seekers track their applications, interview rounds, and offers in one centralized place.

HireTrack offers a blazing-fast user experience with a fully responsive UI that scales across all mobile devices.

---

## ✨ Features

- **Dashboard**: Get a quick overview of your job search status (Applied, Active, Rejected).
- **Application Tracking**: Detailed management of job roles, companies, locations, and salaries.
- **Round Management**: Track interview rounds and follow-up dates.
- **Responsive Architecture**: Custom scaling logic ensuring pixel-perfect layouts on every device size.
- **Offline First**: Instant data access and persistence using high-performance MMKV storage.
- **Premium UI**: Sleek design with modern typography and responsive components.

---

## 🛠️ Tech Stack

- **Core**: [React Native 0.85.3](https://reactnative.dev/)
- **Storage**: [MMKV](https://github.com/mrousavy/react-native-mmkv)
- **Native Bridges**: [Nitro Modules](https://github.com/mrousavy/react-native-nitro-modules)
- **Navigation**: [React Navigation 7](https://reactnavigation.org/)
- **Icons**: [@react-native-vector-icons/ionicons](https://github.com/react-native-vector-icons/react-native-vector-icons)
- **Splash Screen**: [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)

---

## 🏗️ Architecture

### Responsive Scaling Utility
Located in `src/utils/responsive.ts`, this utility provides static scaling functions based on a 390x844 design baseline:
- `hs` (Horizontal Scale): For widths and horizontal spacing.
- `vs` (Vertical Scale): For heights and vertical spacing.
- `ms` (Moderate Scale): For font sizes and border radii.

### Style Separation
Styles are separated into `.styles.ts` files and consumed as static objects, keeping components lean and performant.

---

## 🚀 Getting Started

### Prerequisites
Before proceeding, ensure you have followed the [official React Native environment setup](https://reactnative.dev/docs/environment-setup) for your target platform (Android/iOS).

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/HireTrack.git
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Install CocoaPods** (iOS Only):
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the Application

1. **Start Metro Bundler**:
   ```bash
   npm start
   ```

2. **Run on Android**:
   ```bash
   npm run android
   ```

3. **Run on iOS**:
   ```bash
   npm run ios
   ```

---

## 📁 Project Structure

```
src/
├── components/         # Common UI components
├── features/           # Feature-specific screens and logic
│   ├── dashboard/      # Home dashboard & statistics
│   └── applications/   # Application forms & lists
├── navigation/         # Routing and stack definitions
├── services/           # Data persistence and services
├── themes/             # Color palettes and global spacing
├── types/              # TypeScript interfaces
└── utils/              # Global helper functions (Responsive scaling)
```

---

Built with ❤️ by [Mohod Shorab]
