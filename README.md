# Mapnotes App

## Overview

Mapnotes is a mobile app developed using **React Native**, featuring an interactive map that allows users to create and manage notes with location data. The app integrates **Mapbox** for mapping features, **React Navigation** for seamless navigation between screens, and **Firebase** for authentication and data storage.

## Features

- 📍 **Map-based Note Management**: View, add, and manage notes pinned on a map.
- 🗺️ **Mapbox Integration**: Leverages Mapbox for rich mapping functionalities, including pinning notes with geographic coordinates.
- 📝 **Note Creation and Editing**: Create notes with a title, description, and optional photo, linked to specific locations.
- 🔗 **Seamless Navigation**: Uses React Navigation for easy screen transitions and state management.
- 🔐 **User Authentication**: Secure user authentication powered by Firebase Authentication.
- 💾 **Cloud Storage**: Store and retrieve note data using Firestore, with images stored in Firebase Storage.

## Technologies

- **React Native**: Core framework for mobile development.
- **Mapbox**: Provides interactive map features for displaying notes with geographic locations.
- **React Navigation**: Manages screen navigation and routing within the app.
- **Firebase Authentication**: Handles user sign-up, login, and account management.
- **Cloud Firestore**: NoSQL cloud database to store and sync note data.
- **Firebase Storage**: Cloud storage for user-generated content like images.

## Setup & Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/seva3l/Map-Notes
   cd mapnotes
   ```

2. **Install Dependencies:**
   Ensure you have Node.js and npm or yarn installed.
   ```bash
   yarn
   ```

3. **Configure Environment:**
   Create an `.env` file in the root of your project and add your Mapbox and Firebase configuration:
   ```
   MAPBOX_TOKEN=your_mapbox_access_token
   ```
   You can obtain a Mapbox token from [https://account.mapbox.com/](https://account.mapbox.com/)
   Firebase configuration can be found in your Firebase project settings.

4. **Run the App:**
   To run the app on an Android/iOS simulator:
   ```bash
   npx react-native run-android
   ```
   or
   ```bash
   npx react-native run-ios
   ```

## Usage

- **Authentication**: Sign up or log in using your email and password.
- **Viewing Notes**: Notes will be displayed as markers on the map. Tap a marker to view the note details.
- **Adding Notes**: Long press on the map to create a new note at the selected location. Add a title, description, and optionally upload an image.
- **Editing Notes**: Open a note from the map and modify its details. Changes will be automatically synced to Firestore.
- **Deleting Notes**: Remove notes by selecting them from the map and using the delete option. This will remove the note from Firestore and any associated image from Firebase Storage.

## Firebase Setup

1. Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Authentication, Firestore, and Storage in the Firebase console.
3. Set up security rules for Firestore and Storage to ensure data protection.
4. Add your Firebase configuration to the `.env` file as shown in the Setup & Installation section.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

If you have any questions, feel free to reach out to [sandrei.mangubat@gmail.com](mailto:your-email@example.com).
