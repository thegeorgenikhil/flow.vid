# flow.vid

[![Netlify Status](https://api.netlify.com/api/v1/badges/37daf426-b8ce-46b2-94a3-e85f8e62a8d4/deploy-status)](https://app.netlify.com/sites/flow-vid/deploys)

A video library made using React.js and mockBee for the backend.

[Live Link](https://flow-vid.netlify.app/)

# How to run app locally

1.  Clone the repo

```
git clone https://github.com/thegeorgenikhil/flow.vid.git
```

2.  Install dependencies

```
npm install
```

3.  Create a file named .env within the newly cloned repo directory and add the following line:

```
REACT_APP_JWT_SECRET=<YOUR_JWT_SECRET>
```

4.  Start the app

```
npm start
```

# Features

- Authentication
  - _Login_
  - _Logout_
  - _Signup_
- Video Listing
- Filter Videos by Category
- Playlist Management
  - _create playlists_
  - _add videos to playlists_
  - _remove videos from playlists_
  - _delete playlists_
- Likes Videos
- Remove Liked Videos
- Add watched videos to History
- Watch later
  - _add videos to watch later_
  - _remove videos from watch later_
- Single Video Page
- Loading & Alerts

# Built Using

- React JS
- mockBee - **Mock Backend**
- React Context API + useReducer
- React Router v6
- React Player
- Axios

# Preview


# Contributing

Pull requests for new features, bug fixes, and suggestions are welcome! Please create an issue for discussion before working on a substantial change.

To contribute to this library:

1. **Fork** the repo on GitHub
2. **Clone** the repo on GitHub

```bash
git clone https://github.com/thegeorgenikhil/flow.css.git
```

3. **Create** a new branch
4. **Commit** your changes to your own branch
5. **Push** your branch to GitHub
6. Submit a **Pull Request** so that we can review your changes
