# 🍕 Food Zone - React Food Ordering App

A modern, responsive food ordering application built with React and styled-components. Browse through delicious food items, filter by categories, and search for your favorite meals.

## ✨ Features

- **🔍 Smart Search**: Search for food items by name
- **🏷️ Category Filtering**: Filter foods by type (All, Breakfast, Lunch, Dinner)
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🎨 Modern UI**: Beautiful glassmorphism design with backdrop blur effects
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎯 Interactive Elements**: Hover effects and smooth transitions

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **Styling**: Styled Components 6.0
- **Build Tool**: Vite 4.3.2
- **Backend**: Node.js/Express (assumed)
- **Package Manager**: npm/yarn

## 📁 Project Structure

```
project-4/
├── app/                    # Frontend React application
│   ├── public/            # Static assets
│   │   ├── bg.png         # Background image
│   │   └── Foody Zone.svg # Logo
│   ├── src/
│   │   ├── components/
│   │   │   └── Middle.jsx # Food items display component
│   │   ├── App.jsx        # Main application component
│   │   └── main.jsx       # Application entry point
│   ├── package.json
│   └── vite.config.js
├── server/                # Backend server (if applicable)
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vamshiodnala/frontend-projects-React-.git
   cd project-4
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   cd app
   npm install
   ```

3. **Start the development server**
   ```bash
   # From the app directory
   npm run dev
   ```

4. **Start the backend server** (if applicable)
   ```bash
   # From the root directory
   cd server
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🎮 Usage

### Browsing Food Items
- View all available food items on the main page
- Each item displays an image, name, description, and price

### Filtering by Category
- Click on category buttons: **All**, **Breakfast**, **Lunch**, or **Dinner**
- The active category is highlighted with a white border

### Searching
- Use the search input to find specific food items by name
- Search is case-insensitive and filters in real-time

### Responsive Design
- The app automatically adapts to different screen sizes
- Mobile-friendly interface with touch-optimized controls

## 🔧 Configuration

### API Endpoint
The app connects to a backend server running on:
```javascript
export const base_url = "http://localhost:9000/"
```

To change the API endpoint, modify the `base_url` in `src/App.jsx`.

### Styling Customization
The app uses styled-components for styling. Key style files:
- `App.jsx` - Header and navigation styles
- `components/Middle.jsx` - Food item card styles

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px
- **Small Mobile**: ≤ 360px

## 🎨 Design Features

- **Glassmorphism Effects**: Backdrop blur and transparency
- **Smooth Animations**: Hover and click transitions
- **Modern Typography**: Clean, readable fonts
- **Color Scheme**: Red accent color (#ff4343) with dark theme
- **Circular Images**: Food images with perfect circular cropping

## 🔄 State Management

The app uses React hooks for state management:
- `data` - Stores all food items from API
- `filtered` - Stores filtered food items
- `buttonvalue` - Current active category filter
- `inputvalue` - Current search query
- `loading` - Loading state for API calls
- `error` - Error state for failed API calls

## 🚀 Build and Deployment

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Vamshi Odnala**
- GitHub: [@vamshiodnala](https://github.com/vamshiodnala)

## 🙏 Acknowledgments

- React team for the amazing framework
- Styled Components for the styling solution
- Vite for the fast build tool
- All contributors and testers

## 📞 Support

If you have any questions or need help, please:
1. Check the existing issues
2. Create a new issue with detailed description
3. Contact the maintainer

---

**Happy Coding! 🚀**