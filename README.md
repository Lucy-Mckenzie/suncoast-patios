# Suncoast Patios - An outdoor company building Louvres, Patios, and Blinds.

# Design Brief:
Suncoast Patios needed a website revamp. The outdated design was being left behind in the digital graveyard, gradually slipping down the search engine rankings. The new design prioritises SEO optimisation, user-friendly interface design, and enhanced user experience to better serve their audience. 
![Suncoast logo](/public/logos/suncoastlogo.png)

# Built With:
* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![TypeScript][TypeScript-logo]][TypeScript-url]
<!--   <img src='/svg/daisyui.svg' alt="DaisyUI" width="50" />
  <img src='/svg/hcaptcha.svg' alt="hCaptcha" width="50" />
  <img src='/svg/herroku.svg' alt="Heroku" width="50" /> -->


## Installation
1. Clone the repository:
```bash
 git clone git@github.com:Lucy-Mckenzie/suncoast-patios.git
```
2. Navigate to project directory:
```bash
cd suncoast-patios
```

3. Install dependencies:
```bash
 npm install
```

4. Start the deployment server:
```bash
npm run dev
```
# Problems and thought processes 
<ul>
  <li className='mb-4'>
  <strong>Receiving emails from the enquiry form: </strong>
  I considered several approaches before deciding on the best option. The first was Nodemailer, a Node.js library that allows sending emails via SMTP. However, it lacks built-in email analytics and advanced spam protection, which were important to us. My other options were SendGrid and Mailjet, both cloud-based API and SMTP services. I ultimately chose Mailjet because it was the simplest to implement, offering built-in analytics and spam protection.
    </li>
    <li className='mb-4'>
  <strong>Learning Next.js, when to load files on the client side:</strong>
  {`Learning Next.js was a really fun part of the process. It's very intuitive and well-documented. However, when starting the project, I encountered errors and had the 'use client' directive (which means it renders on the frontend and makes it difficult for Google crawlers to find) in more files than I'd like to admit. That's when I started focusing on clean code practices, reducing reused code, and splitting larger components into smaller ones that would render on the client side. Overall, I believe Next.js significantly improved my code quality.`}
    </li>
      <li className='mb-4'>
        <strong>Managing Spam for enquiry form: </strong>
        I was weighing up different options for this. My first idea was to create a custom solution from scratch. However, this proved to be quite challenging, and due to time constraints, it wasn’t feasible. So, I decided to use a library to help. When choosing between reCAPTCHA and hCaptcha, I found that the steps for both were quite similar, but I ultimately chose hCaptcha because it collects less data than Google’s reCAPTCHA. 
    </li>
</ul>

## License
This project is licensed under the [MIT License](LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- MARKDOWN LINKS & IMAGES -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript-logo]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/

