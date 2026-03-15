Infinity Dream Learning (IDL)

AI-Integrated Learning Platform with Public Homepage, Student Hub, and Learning Portal

---

Overview

Infinity Dream Learning (IDL) is an AI-powered education platform designed to provide structured learning, community collaboration, and intelligent study assistance.

The platform is organized into three main environments:

1. Public Website – marketing site and course discovery
2. Student Hub – student portal for exploration and community engagement
3. Learning Portal – full AI-powered learning system accessible through subscription

This layered architecture allows learners to explore the platform first and then unlock full educational resources through a paid learning environment.

---

Platform Architecture

1. Public Website

The public website serves as the business and marketing interface of the platform.

Visitors can explore courses and learn about the organization without needing an account.

Access Level

Public (no login required)

Features

- Landing page
- Course catalog preview
- Pricing and subscription plans
- About the organization
- Contact information
- Login and registration pages

Routes

/
 /courses
 /pricing
 /about
 /contact
 /login
 /register

Restrictions

Public visitors cannot access:

- Learning materials
- Certificates
- Community participation
- AI learning assistant

---

2. Student Hub

The Student Hub is the platform’s student portal available after account registration.

It allows learners to explore courses, interact with the community, and use limited AI guidance before subscribing.

Access Level

Authenticated users (free account)

Features

- Student dashboard
- Course catalog
- Community discussions
- Events and announcements
- AI guidance assistant
- Student profile

Routes

/hub
 /hub/dashboard
 /hub/courses
 /hub/community
 /hub/events
 /hub/ask-ai
 /hub/profile

Restrictions

Users in the Student Hub cannot access:

- Lesson materials
- Assignments
- Certificates
- Advanced AI learning tools

---

3. Learning Portal

The Learning Portal is the full educational environment unlocked after purchasing a subscription.

This section provides access to lessons, AI learning assistance, collaborative tools, and certificates.

Access Level

Authenticated + active subscription

Features

- Learning dashboard
- Full course lessons
- Learning materials
- Assignments
- Live classrooms
- Study scheduler
- Team collaboration
- Community discussions
- Student support
- AI learning assistant
- Certificates

Routes

/learn
 /learn/dashboard
 /learn/courses
 /learn/lessons
 /learn/scheduler
 /learn/live-classes
 /learn/teams
 /learn/community
 /learn/support
 /learn/ai
 /learn/certificates

---

AI Integration

AI is integrated at two levels within the platform.

---

Student Hub AI

The Student Hub includes a lightweight AI assistant designed for exploration and guidance.

Capabilities:

- Answer general questions
- Provide course recommendations
- Assist with platform navigation
- Help students discover learning paths

Restrictions:

- No lesson explanation
- No assignment assistance
- No learning analytics

---

Learning Portal AI

The Learning Portal contains the full AI learning assistant integrated directly into the educational system.

Capabilities:

- Lesson explanations
- Study planning and scheduling
- Personalized course recommendations
- Learning analytics
- Assignment support
- Progress insights

---

Navigation System

The application uses a structured navigation system consisting of:

- Sidebar navigation
- Top navigation bar
- Global application launcher

---

Sidebar Navigation (Student Hub)

Dashboard
Course Catalog
Community
Events
Ask AI
Profile

---

Sidebar Navigation (Learning Portal)

Dashboard
Courses
Lessons
Scheduler
Live Classes
Teams
Community
Support
AI Assistant
Certificates

---

Top Navigation Bar

The top navigation bar includes:

- Sidebar toggle (hamburger menu)
- Search bar
- Notifications
- Application launcher (9-dot menu)
- Profile dropdown

---

Application Launcher (9-Dot Menu)

The launcher provides quick access to major tools across the platform.

Community
Support
Events
AI Assistant
Course Catalog
Billing
Settings
Documentation
Profile

---

Technology Stack

Frontend

- React
- React Router
- TypeScript
- Tailwind CSS
- Axios

Backend

- Node.js
- Express
- TypeScript

AI Integration

- OpenAI API or internal AI services

Database

- PostgreSQL or MongoDB

Deployment

- Vercel (frontend)
- Cloud hosting for backend services

---

Project Structure

src

api
components
layouts
pages
routes
context
hooks
styles
utils

App.tsx
main.tsx

---

Access Flow

Visitor → Public Website

User registers → Student Hub access

User subscribes → Learning Portal unlocked

This ensures learning materials remain protected while allowing users to explore the platform before subscribing.

---

Future Enhancements

- Mobile application
- Real-time notifications
- Advanced AI learning analytics
- Gamified progress tracking
- Offline learning support

---

License

Internal project for the Infinity Dream Learning platform.

---

Author

Infinity Dream Learning Development Team