import "./Skills.css";

const Skills = () => {
  const skillIcons = [
    {
      src: "https://image.pngaaa.com/236/5505236-small.png",
      alt: "bootstrap",
    },

    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      alt: "html5",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      alt: "css3",
    },
    {
      src: "https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-css-framework-customizable-coding-lang-pack-logos-icons-7577995.png?f=webp",
      alt: "tailwindcss",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      alt: "javascript",
    },
    {
      src: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp",
      alt: "mongodb",
    },
    {
      src: "https://cdn.groovetechnology.com/wp-content/uploads/2023/08/expressjs.png",
      alt: "express",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      alt: "react",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      alt: "nodejs",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRlH5x8oBQAqXxQBNwTIGAnoBBrjEWHP2pw&s",
      alt: "redux",
    },

    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      alt: "typescript",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeFjZ4MLpdDi2FbA7ZCmvX1m5SL8vBNkZKg&s",
      alt: "postman",
    },
    {
      src: "https://static-00.iconduck.com/assets.00/apps-insomnia-icon-2048x2048-2mq9u7v5.png",
      alt: "insomnia",
    },
    {
      src: "https://cdn.iconscout.com/icon/free/png-256/free-git-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225996.png?f=webp&w=256",
      alt: "github",
    },
    {
      src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/aws-color.png",
      alt: "aws",
    },
    {
      src: "https://logowik.com/content/uploads/images/netlify-new-20234970.logowik.com.webp",
      alt: "netifly",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5612AQE0nEZrPGv0JA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1679583758253?e=2147483647&v=beta&t=4QpsM1YKchLOfxVzpfFJAQWdkJ3vg3aKUWYL5tFVXXI",
      alt: "restapi",
    },
    {
      src: "https://user-images.githubusercontent.com/5418178/177059352-fe91dcd5-e17b-4103-88ae-70d6d396cf85.png",
      alt: "jwt",
    },
    {
      src: "https://avatars.githubusercontent.com/u/10566080?s=280&v=4",
      alt: "socketio",
    },
    {
      src: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
      alt: "firebase",
    },
    {
      src: "https://cdn2.vectorstock.com/i/1000x1000/50/61/json-file-document-icon-vector-24685061.jpg",
      alt: "json",
    },
  ];

  return (
    <section className="skills" id="skills">
      <h3 className="skills__header">My Skills</h3>
      <div className="skills__grid">
        {skillIcons.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            className="skills__icon"
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
