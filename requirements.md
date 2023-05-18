## Project Overview
- Goal: Create a Bangle.js app that also serves as a watch face.
- Feature: Multiple panes that can be accessed by swiping left, right, up, and down.
- Feature: Vibrate every hour and ask if the user is doing what they intended to do, if not or not respond vibrate again in 5 mins
- Feature: Have countdown timers to certain events like a flight or a birthday
  - Keep track of all birthdays and holidays
  - show 2 weeks before 
  - keep track of trail expirations 
- Note: To save screen realestate the top widgets wont be used, meaning I will have to have my own battery counter.
- Note: App design will be compact and well thought out to maximize screen real estate.
- Feature: pomodoro timers
- Feature: start day button, which then triggers reminders and hard to ignore mechanism like alarms with snooze like 1m 2m 5m 10m
- Feature: show how long each task took to accomplish, creating The same psychological effect as with the push-up counter (I was doing push-ups because I could see how much I did each day, it was motivating me). The idea is that it will motivate me because I can see, or I know I will see, if I was effective or if I wasted time.
- Idea: integration between Bluetooth earbuds, bt-contorler, phone, bangle.js
- Idea: the most important things are to adress my adhd with tasks tracking and timers, however I will implement weather, times, and music play controls first as those are likley easier.
- Idea: set recommend wakeup time based on temp and sunrise (like in Medellin when it was getting too warm), so also ste recommended go to sleep time
- Idea: have a box where you keep all your morning stuff, like ball cream, toothpaste & brush, etc...

## The Panes

### Default Pane
- Feature: Display current time and date.
- Feature: Display number of tasks to complete for the day.
- Feature: Ability to see and launch timers.
- Feature: Timer for on-task and off-task.

### Weather Pane
- Feature: Display current weather information, including temperature and conditions.
- Integration: Incorporate the user's current location.
- Feature: Display sunrise/sunset data for the current day.
- Feature: Show forecast for the next 3 hours.

### Audio Pane
- Feature: Audio play/pause/next controls.
- Feature: Option to start playing music from Youtube Music.
- Feature: Option to start playing podcasts from Pocket Casts.

### Task Pane
- Feature: Display a list of tasks to be completed for the day.
- Feature: Option to add tasks to the list via audio input.

### Goal Counter Pane
- Feature: Display goal counter for specific activities, such as pushups and undistracted writing minutes.

---


## 1. Organize & Prioritize

Primary Features:
- Default Pane (Time, Date, Tasks, Timers)
- Weather Pane (Current weather, Location, Sunrise/Sunset, Forecast)
- Task Pane (Task list, Adding tasks)

Secondary Features:
- Audio Pane (Controls, Youtube Music, Pocket Casts)
- Hourly Reminder
- Goal Counter Pane (Activity tracking)

## 2. Create Requirements

Default Pane:
- Display current time and date in a legible format
- Show the number of tasks for the day, with a maximum of 10 tasks
- Access and launch at least two simultaneous timers (on-task and off-task)

Weather Pane:
- Integrate with a reliable weather API (e.g., OpenWeatherMap, Weather API)
- Automatically detect user's location using GPS or allow manual input
- Display current weather, temperature, and conditions
- Provide sunrise/sunset times and a 3-hour forecast

Task Pane:
- Display tasks in a scrollable list format
- Allow adding tasks through voice input or a virtual keyboard
- Enable checking off tasks upon completion
- Store tasks locally or sync with a popular task management app (e.g., Todoist, Google Tasks)

Audio Pane:
- Implement play/pause/next audio controls
- Integrate with Youtube Music and Pocket Casts APIs
- Display current audio source and track information

Hourly Reminder:
- Vibrate the watch and display a notification every hour
- Allow users to confirm if they are on-task or off-task
- Record on-task/off-task data for later review

Goal Counter Pane:
- Support tracking for at least two customizable activities (e.g., pushups, un-distracted writing)
- Display current progress and goal
- Enable users to update goal values

## 3. Create User Stories

Story 1: Time Management
- As a user with a busy schedule, I want to see the time, date, and my tasks for the day on the Default Pane, so I can effectively plan my day and manage my time.

Story 2: Weather Updates
- As a user who is sensitive to weather changes, I want to access accurate weather information, including the current temperature and conditions, so I can dress appropriately and plan my day accordingly.

Story 3: Task Management
- As a user who struggles to remember daily tasks, I want to add, view, and complete tasks using the Task Pane, so I can stay organized and focused on my priorities.

Story 4: Audio Control
- As a user who enjoys listening to music and podcasts, I want to control my audio playback and switch between Youtube Music and Pocket Casts using the Audio Pane, so I can enjoy my preferred content without hassle.

Story 5: Hourly Reminders
- As a user who struggles with staying on-task, I want to receive hourly reminders and confirm if I am on-task or off-task, so I can improve my focus and productivity.

Story 6: Goal Tracking
- As a user who wants to track progress on specific activities, I want to set and monitor my goals using the Goal Counter Pane, so I can stay motivated and achieve my desired outcomes.
