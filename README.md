# Mapnotes App

## Overview

Mapnotes is a mobile app developed using **React Native**, featuring an interactive map that allows users to create and manage notes with location data. The app integrates **Mapbox** for mapping features and **React Navigation** for seamless navigation between screens.

## Features

- 📍 **Map-based Note Management**: View, add, and manage notes pinned on a map.
- 🗺️ **Mapbox Integration**: Leverages Mapbox for rich mapping functionalities, including pinning notes with geographic coordinates.
- 📝 **Note Creation and Editing**: Create notes with a title, description, and optional photo, linked to specific locations.
- 🔗 **Seamless Navigation**: Uses React Navigation for easy screen transitions and state management.

## Technologies

- **React Native**: Core framework for mobile development.
- **Mapbox**: Provides interactive map features for displaying notes with geographic locations.
- **React Navigation**: Manages screen navigation and routing within the app.

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
   Create an `.env` file in the root of your project and add your Mapbox token:
   ```
   MAPBOX_TOKEN=your_mapbox_access_token
   ```
   You can obtain a token from [https://account.mapbox.com/](https://account.mapbox.com/)

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

- **Viewing Notes**: Notes will be displayed as markers on the map. Tap a marker to view the note details.
- **Adding Notes**: Long press on the map to create a new note at the selected location.
- **Editing Notes**: Open a note from the map and modify its details.
- **Deleting Notes**: Remove notes by selecting them from the map and using the delete option.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

If you have any questions, feel free to reach out to [sandrei.mangubat@gmail.com](mailto:your-email@example.com).
