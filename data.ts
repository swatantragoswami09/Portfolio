import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a scalable website using <b>ReactJs</b> and <b>Angular</b>",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust REST API using <b>java SpringBoot</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Decentralize Apps",
    about:
      "I develope two and three applications using Blockchain and solidity programming.",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about: "I am a fast learner and learning new technologies is my hobby.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Machine Learning",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "BlockChain",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Solidity",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Vscode",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "SublimeText",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Eclipse",
    level: "80",
  },
];

export const projects: IProject[] = [
  {
    name: "Project Managment Dashboard",
    description:
      "This app can show the dashboard of the teammates of the company that works in any of project.",
    image_path: "/images/dashboard.png",
    deployed_url: "https://thedojosite-dc8cd.web.app/",
    github_url: "https://github.com/swatantragoswami09/dojoDashboard",
    category: ["react"],
    key_techs: ["React", "firebase", "Redux"],
  },
  {
    name: "CryptoCurrency Tracker",
    image_path: "/images/carypto.png",
    deployed_url: "https://candlestick-swatantragoswami09.vercel.app/",
    github_url: "https://github.com/swatantragoswami09/candlestick",
    category: ["react"],
    description:
      "we are showing the current price of crypto currencies in our website with the ranking of the coins.",
    key_techs: ["React"],
  },

  {
    name: "Image Search",
    image_path: "/images/hdpix.png",
    deployed_url: "https://hdpix.netlify.app/",
    github_url: "https://github.com/swatantragoswami09/candlestick",
    category: ["react"],
    description:
      "We are using the Unsplash API in our React App and showing some picture in a well organised format.",
    key_techs: ["React", "Redux", "Unsplash API"],
  },

  {
    name: "DApp Lottery",
    image_path: "/images/lottery.png",
    deployed_url:
      "https://lottery-react-q2qo00xaj-swatantragoswami09.vercel.app/",
    github_url: "https://github.com/swatantragoswami09/Lottery-Contract",
    category: ["react", "blockchain"],
    description:
      "This App can perform some decentralize transactions and using ethereum blockchain in its backend.",
    key_techs: ["React", "Node", "Blockchain", "Web3", "Solidity"],
  },

  {
    name: "Faucet Decentralize App",
    image_path: "/images/faucet.png",
    deployed_url: "https://faucet-alpha.vercel.app/",
    github_url:
      "https://github.com/swatantragoswami09/BlockchainFaucetAndMarketPlace/tree/master/faucet",
    category: ["react", "blockchain"],
    description:
      "This App is called a faucet which you able to denotes you some test ethers and you also withdraw some test ethers from smart contract.",
    key_techs: ["React", "BlockChain", "Ganache"],
  },

  {
    name: "JavaScript jupitor Book",
    image_path: "/images/jbook.png",
    deployed_url: "https://jbook-swatantragoswami09.vercel.app/",
    github_url:
      "https://github.com/swatantragoswami09/StephenReactAndTypescript/tree/master/jbook/packages/local-client",
    category: ["express", "react"],
    description:
      "This is online jupitor note book of react and coding editor you can also download the node module 'npx jsnote-skg serve'",
    key_techs: ["TypeScript", "React", "Reducers"],
  },
  {
    name: "BlogPost Website ErrorSolver",
    image_path: "/images/errorsolver.png",
    deployed_url: "https://errorsolver.vercel.app/",
    github_url: "https://github.com/swatantragoswami09/ErrorSolver",
    category: ["react"],
    description:
      "This is a blogpost kind of website site which you can upload your error solution with time duration.",
    key_techs: ["React", "Reducers"],
  },
  {
    name: "Password Generator",
    image_path: "/images/pw.png",
    deployed_url: "https://pw-5xiflamof-swatantragoswami09.vercel.app/",
    github_url: "https://github.com/swatantragoswami09/PasswordGenerator",
    category: ["angular"],
    description: "This is a simple password generator website.",
    key_techs: ["Angular"],
  },
  {
    name: "Magic Game",
    image_path: "/images/mg.png",
    deployed_url: "https://game-swatantragoswami09.vercel.app/",
    github_url: "https://github.com/swatantragoswami09/MagicGame",
    category: ["react"],
    description:
      "This is a simple game that we need to match the same card, on every turn of card we count the number of turn and turns is the score.",
    key_techs: ["React"],
  },
  {
    name: "Typing Challenge",
    image_path: "/images/tc.png",
    deployed_url: "https://typing-ntkarwjqj-swatantragoswami09.vercel.app/",
    github_url: "https://github.com/swatantragoswami09/MagicGame",
    category: ["angular"],
    description: "This is a typing website.",
    key_techs: ["Angular"],
  },
  {
    name: "Voice To Text Converter",
    image_path: "/images/vtot.png",
    deployed_url: "https://vtot-8ccxw2ubh-swatantragoswami09.vercel.app/",
    github_url: "https://github.com/swatantragoswami09/VoiceToText",
    category: ["react"],
    description:
      "This is a single page application that converts your voice to text and you can also save your voice notes.",
    key_techs: ["React"],
  },
];
