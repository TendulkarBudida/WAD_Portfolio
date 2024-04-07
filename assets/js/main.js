import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".digitalhouse",
  `Pursuing a Bachelor's degree (3rd year - 2nd sem) in Computer Science with a focus on Artificial Intelligence and Machine Learning at Gandhi Institute Of Technology and Management (GITAM).`,
  "B.Tech,  Computer Science & Engineering<br>Artificial Intelligence and Machine Learning",
  "GITAM",
  "Oct 2021 - June 2025"
);

hoverChangeExperience(
  ".zuplae",
  `Smart India Hackathon is a nationwide initiative to provide students with a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem-solving.`,
  "Flutter Full Stack Developer",
  "Smart India Hackathon",
  "Aug 2023 - Oct 2023"
);

hoverChangeExperience(
  ".contweb",
  `Academor is an e-learning platform offering students a holistic learning experience, helping them become industry ready. Completed Internship with Academor under the domain Machine Learning of duration 2 months.`,
  "Machine Learning Intern",
  "Academor",
  "July 2023 - Aug 2023"
);

hoverChangeExperience(
  ".codigofontetv",
  `Received a Certificate of Completion from Centre for Continuing Education, IIT Madras Digital Skills Academy's Programme`,
  "Python Programmer",
  "Python Course on Multiple Languages",
  "Jun 2021 - Jan 2022"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".sass",
  "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".radix",
  "Radix é uma biblioteca que fornece componentes acessíveis e sem estilos para a criação de aplicação em React."
);
hoverChangeDescription(
  ".cypress",
  "Cypress é um framework para automação de testes end-to-end, onde atualmente usa a linguagem JavaScript."
);
hoverChangeDescription(
  ".storybook",
  "Storybook é uma ferramenta que tem como objetivo documentar e testar os componentes da aplicação."
);
