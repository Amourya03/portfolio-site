# Akshay Kumar Mourya | Portfolio

A responsive, single-page personal portfolio built with plain HTML, CSS and JavaScript. No framework and no build step.

**Live site:** [https://your-project.vercel.app](https://portfolio-site-nine-sand-28.vercel.app/)  

## Features
- Sections for About, Skills, Experience, Projects, Publication, Education and Contact
- Light and dark theme (follows the system setting, with a manual toggle)
- Live clock in IST
- Slow falling-star background animation (top-right to bottom-left)
- Fully responsive: desktop and mobile layouts

## Tech stack
HTML5, CSS3 (custom properties, grid, flexbox), vanilla JavaScript, Google Fonts (Figtree).

## Project structure
```
portfolio-site/
├── index.html                          # page structure and content
├── style.css                           # design tokens, layout, cards, star animation
├── script.js                           # clock, theme toggle, falling stars
├── assets/
│   └── profile.jpg                     # profile photo
│   └── Akshay Mourya_Resume.pdf        # resume    
├── .gitignore
└── README.md
```

## Run locally
Open `index.html` in a browser, or serve the folder:
```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Customize
- **Resume:** add `assets/resume.pdf` and change the Resume buttons' `href="#"` to `assets/resume.pdf`.
- **Project links:** edit the GitHub `href` on each project card in `index.html`.
- **Photo:** replace `assets/profile.jpg` (square image works best).
- **Stars:** in `script.js`, change the count (`n<10`) or speed (`rnd(60,100)` px per second).
- **Colors:** edit the CSS variables at the top of `style.css`.


## Contact
- GitHub: https://github.com/Amourya03
- LinkedIn: https://www.linkedin.com/in/akshay-kumar-mourya/
- X: https://x.com/AkshayA5479
- Email: akshaymouryaart@gmail.com
