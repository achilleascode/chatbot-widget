# Crescore Chat Widget

A real-time chat widget with Supabase integration for seamless customer communication.

## Features

- ✅ Real-time message synchronization via Supabase
- ✅ Typing indicator with animated clock icon
- ✅ Automatic URL detection and linking
- ✅ Notification badge for unread messages
- ✅ Message history persistence
- ✅ Responsive design
- ✅ Toggle open/close functionality
- ✅ User, Bot, and Human message types
- ✅ Timestamps for all messages
- ✅ Empty state with welcome message

## Installation

Simply include the `widgets.html` file in your project or embed it in your website.

```html
<iframe src="widgets.html" style="position: fixed; bottom: 0; right: 0; width: 100%; height: 100%; border: none; z-index: 9999;"></iframe>
```

Or copy the entire content into your HTML page.

## Usage

The widget will automatically:
1. Create or load a session ID from localStorage
2. Connect to Supabase for real-time updates
3. Display message history
4. Show typing indicator when waiting for responses

## Configuration

The widget is pre-configured with:
- Supabase URL and API key
- Telefonagent API endpoint
- Chatbot name: "Crescore"

## Technologies

- Supabase (Real-time database)
- Vanilla JavaScript
- CSS3 Animations
- Material Design Icons

## License

MIT License
