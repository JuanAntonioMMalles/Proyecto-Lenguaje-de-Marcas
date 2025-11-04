# Markup Language Project

Website created as a project for the Markup Language (LND) subject. In this case, I decided to theme my page around the Warhammer 40k universe.

## Getting Started

These instructions will help you get a copy of the project running on your local machine for development and testing purposes.

### Prerequisites

No special installations are required. You only need:

- A web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Optionally, a local server like Live Server for development

### Installation

Follow these steps to set up the project in your local environment:

1. Clone the repository
```bash
git clone https://github.com/JuanAntonioMMalles/OfficialProyect.git
```

2. Navigate to the project directory
```bash
cd OfficialProyect
```

3. Make sure you have the following folder structure:
```
OfficialProyect/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── menu.js
└── img/
    ├── Aquila-imperialis.png
    ├── chaos-gods.jpg
    ├── space-marines.jpeg
    ├── imperial-guard.jpeg
    ├── Eldar.jpg
    ├── ORKS.png
    ├── necron.jpg
    ├── Dark-eldar.jpg
    ├── chaos-marines.jpg
    ├── tau.jpg
    └── tyranids.jpg
```

4. Open `index.html` in your browser or use a local server

With Live Server in VS Code:
```
Right-click on index.html > Open with Live Server
```

## Features

- **Responsive Design**: Adapted for desktop, tablet, and mobile
- **Thematic Interface**: Colors inspired by the Imperium (blood red and gold)
- **10 Factions**: Space Marines, Imperial Guard, Orks, Aeldari, Necrons, Drukhari, Chaos Marines, Tau, Tyranids, and Chaos Gods
- **Hamburger Menu**: For mobile devices and tablets
- **Hover Effects**: Visual interactions on faction cards

## Technologies Used

- **HTML5**: Semantic structure of the site
- **CSS3**: Styles and responsive design
  - Flexbox for layouts
  - Grid for faction organization
  - Media queries for responsive design
  - Gradients and visual effects
- **JavaScript**: Hamburger menu functionality
- **Google Fonts**: 'Rubik Mono One' font for thematic styling

## Responsive Breakpoints

- **Desktop** (>768px): 2-3 column grid, images visible on the left
- **Tablet** (600px-768px): Single column, horizontal layout maintained, hamburger menu activated
- **Mobile** (400px-600px): Single column, vertical layout with images on top
- **Small Mobile** (<400px): Single column, images hidden for optimization

## Code Structure

### HTML
- Header with responsive navigation
- Main with faction grid
- Footer with social links and copyright

### CSS
- Color variable system (possible future improvement)
- Modular styles by section
- Media queries organized by screen size

### JavaScript
- Hamburger menu control
- Toggle 'active' class to show/hide menu

## Current Version

**v1.0.0** - Initial release with 10 main factions

## Authors

- **Juan Antonio** - *Initial Work* - [JuanAntonioMMalles](https://github.com/JuanAntonioMMalles)

## License

This project is an unofficial fan page and is not affiliated with Games Workshop Ltd. Warhammer 40,000 and all related trademarks are property of Games Workshop Ltd.

The code for this project is available under the MIT license - see the [LICENSE.md](LICENSE.md) file for more details.

## Acknowledgments

- Games Workshop for creating the Warhammer 40,000 universe
- Warhammer 40k fan community
- Artists whose work inspired the visual design
- PurpleBooth for the README template
- Inspiration web link: https://dribbble.com/shots/25519203-landing-page-for-fintech-web-design-3D-animation 


### Future Features
- [ ] Individual pages for each faction with detailed lore
- [ ] Recommended books section
- [ ] Painted miniatures gallery
- [ ] Video games section
- [ ] Search system
- [ ] Light/dark theme
- [ ] Games Workshop API integration (if available)
- [ ] News and updates blog

For questions or suggestions, you can contact me at:
- Email: juanantoniommalles@gmail.com
- GitHub: [@JuanAntonioMMalles](https://github.com/JuanAntonioMMalles)

---