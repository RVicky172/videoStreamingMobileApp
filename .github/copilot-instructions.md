# AI Agent Instructions for Video Streaming Mobile App

This document provides essential context for AI agents working with this React Native video streaming mobile application.

## Project Overview

This is a React Native mobile application focused on video streaming capabilities, built with TypeScript. The app is structured as a cross-platform mobile application targeting both iOS and Android.

## Key Technologies

- React Native 0.80.2
- TypeScript 5.0.4
- react-native-video 6.16.1 for video playback
- Jest for testing

## Architecture Overview

### Component Structure
- `App.tsx`: Root component managing the application state and layout
- `components/VideoPlayer.tsx`: Reusable video player component using react-native-video

### Data Flow
- Video URLs are passed down to the VideoPlayer component as props
- VideoPlayer handles the video playback using react-native-video's native capabilities

## Development Workflow

### Environment Setup
1. Ensure Node.js >= 18 is installed
2. Install dependencies:
   ```bash
   npm install
   ```
3. For iOS, additional setup is required:
   ```bash
   bundle install
   bundle exec pod install
   ```

### Development Commands
- Start Metro bundler: `npm start`
- Run Android app: `npm run android`
- Run iOS app: `npm run ios`
- Run tests: `npm test`
- Lint code: `npm run lint`

### Hot Reload
- Changes to TypeScript/JavaScript files trigger Fast Refresh automatically
- Force reload: Press R twice (Android) or once (iOS)
- Access Dev Menu: Ctrl/Cmd + M

## Project-Specific Conventions

### TypeScript Patterns
- All React components are typed with TypeScript interfaces for props
- Example from VideoPlayer.tsx:
  ```typescript
  interface VideoPlayerProps {
    videoUrl: string;
  }
  ```

### Styling Patterns
- Styles are defined using StyleSheet.create() within each component file
- Full-screen video layout uses absolute positioning with zero insets
- Dark mode support through useColorScheme()

### Testing
- Jest is configured for component testing
- Test files are located in __tests__ directory

## Common Issues & Solutions

1. iOS Build Issues
   - Always run `bundle exec pod install` after updating native dependencies
   - Ensure CocoaPods is installed via Ruby bundler

2. Android Emulator
   - If video playback fails, check Android emulator settings and ensure hardware acceleration is enabled

## Points of Integration

1. Video Sources
   - Videos are loaded via URLs passed to VideoPlayer component
   - Currently supports standard video formats through react-native-video

2. Native Module Dependencies
   - react-native-video provides native video playback capabilities
   - Any additional native modules require running `pod install` for iOS

Remember to check the React Native and react-native-video documentation for platform-specific configurations when adding new video features or modifying existing ones.