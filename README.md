Welcome to my portfolio template!
<img src="./src/assets/img/README_images/green-pink-gradient.svg" class="img-fluid" width="100%" height="1" />
=====================

**This is my personal portfolio in which I have made into an easy to personalize vue template for the public to use free of charge. It comes with a clean and modern design, consistent layout and styles, and instructions that are easy to navigate and understand. Even if you are new to web development, I designed this template to be user-friendly and easy to customize, no matter what stage you are at in your career.**

**So, let's break down the features of this portfolio template and how you can personalize it to fit your own personal brand.**

>**📝 NOTE:** I will be adding more features and functionality to make it even more user-friendly and customizable for others to use.

## Table of Contents
- [Features](#features)
- [Data Structure and Organization](#data-structure-and-organization)
- [File Structure and Organization](#file-structure-and-organization)
- [How to Render your Personalized Content](#how-to-render-your-personalized-content)
- [How to Render your Personalized Styles / Themes](#how-to-render-your-personalized-styles--themes)


## Features
- Clean and modern design
- Consistent layout and styles
- Easy to navigate and understand
- User-friendly and easy to customize
- Instructions for personalizing content
- Instructions for personalizing styles / themes

## Data Structure and Organization

The main data structure you will be working with is located in the `/src/constants` folder located here:

<p>
  <img src="./src/assets/img/README_images/constants-folder-files-location.png" class="img-fluid" width="300" height="375" />
</p>

I have provided a brief visual reference for how the static data properties (seperated by color) is rendered from the `/src/constants` folder to the components in the `/src/components` folder. Consider this example from the `Feedbacks.js` file located in the constants folder to the `Feedback.vue` component located in the components folder:
<img src="https://i.ibb.co/f2T9bn3/image.png" class="img-fluid" width="100%" height="100%" />

Each file in the `/src/constants` folder holds the static data for each section, brought into your components as a javascript object. This data is then iterated over with a `v-for` loop to render the content on the page.

### How to Render your Personalized Content

By simply changing the values in the above referenced files located in the `/src/constants` folder, you can easily customize this portfolio to fit your own personal brand.

<img src="./src/assets/img/README_images/constants-folder-files-location.png" class="img-fluid" width="300" height="375" />

Each file in the `/src/constants` folder represents a different section of the portfolio page. 

### How to Render your Personalized Styles / Themes

The `_root.scss` file in the `/src/assets/scss` folder that allows you to easily change the color scheme of the entire portfolio with just a few lines of code. Visual reference of file location for themes and styles provided below:

<p>
  <img src="./src/assets/img/README_images/styles-and-themes-file-location.png" class="img-fluid" width="300" height="375" />
</p>

Read the relevant comments to see what each CSS variable will style on the page. I will be adding these necessary comments above specific variable names so that you can change the page background, font color, and gradient color themes on the fly!

As this project nears completion, I will be adding more detailed instructions on how to use this template for your own portfolio, so stay tuned for more updates!

  <!-- <hr style="background: linear-gradient(90.13deg, #00CEA8 1.9%, #bf61ff 97.5%);" />
  <hr style="background: linear-gradient(90.13deg, #00CEA8 1.9%, #bf61ff 97.5%);" />
</section> -->

Base Template: CodeWorks Vue Starter
=====================
This template is designed to help get students started building vue applications

## Legal Overview

The content under the CodeWorks®, LLC Organization and all of the individual repos are solely intended for use by CodeWorks Instruction to deliver Educational content to CodeWorks Students.

---

## Copyright

© CodeWorks® LLC, 2021. Unauthorized use and/or duplication of this material without express and written permission from CodeWorks, LLC is strictly prohibited.


<img src="https://bcw.blob.core.windows.net/public/img/7815839041305055" width="125">












├── assets
│   ├── img
│   │   ├── ...folders broken down by section f 
│   └── scss
│       ├── ...scss files
├── components
│   ├── about
│   │   ├── About.vue
│   │   └── AboutCard.vue
│   ├── contact
│   │   ├── Contact.vue
│   │   └── ContactCard.vue
│   ├── education
│   │   ├── Education.vue
│   │   └── EducationCard.vue
│   ├── experience
│   │   ├── Experience.vue
│   │   └── ExperienceCard.vue
│   ├── feedback
│   │   ├── Feedback.vue
│   │   └── FeedbackCard.vue
│   ├── projects
│   │   ├── Project.vue
│   │   └── ProjectCard.vue
│   ├── resumeModal
│   │   ├── ResumeCard.vue
│   │   └── ResumeModal.vue
│   ├── scalableVectorGraphics
│   │   ├── SVGGitHub.vue
│   │   ├── SVGHeroBackground.vue
│   │   └── SVGLinkedIn.vue
│   ├── technologies
│   │   ├── Technologies.vue
│   │   └── TechnologyCard.vue
│   └── wrappers
│       └── Loader.vue