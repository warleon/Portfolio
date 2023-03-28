import placeholder from "./../Assets/placeholderImg.jpg";

const projects = {
  videoApp: {
    url: "/projects/videoApp",
    img: placeholder,
    imgText: "",
    title: "video app",
    description: "A containerized video app made using django and ffmpeg.",
    call: "learn more",
    longDescription:
      "A video on demand app that lets you upload, watch and update videos with descriptions and suggestions to watch next. and also vote the videos with likes or dislikes",
    motivation:
      "This is my proposed project for my Software Engineering class. I just wanted to make a video on demand server so I conviced other 3 classmates to help me with it. I led the team trough the proccess achieving a perfect score in the course",
    usage:
      "To see it in action you first need to have docker installed\n\nThen just download the source code and in the main directory run docker-compose up --build\n\nThe use of the actual app is pretty straight forward and intuitive\n\ncreate an account the login and upload a video, declare suggestions and publish it then watch and enjoy",
    source: ["https://github.com/warleon/videoServer", "warleon/videoServer"],
    tech: [
      "Docker",
      "python",
      "Django",
      "Postgresql",
      "ffmpeg",
      "css",
      "javascript",
      "html",
      "JSON",
      "Nginx",
    ],
  },
  organice: {
    url: "/projects/organice",
    img: placeholder,
    imgText: "",
    title: "ORGANICE",
    description: "A demo project made using nodejs express and mongodb.",
    call: "learn more",
    longDescription: "A small demo app that required a crud.",
    motivation:
      "I wanted a web app to host in my raspberrypi and learn the MERN stack. So I made this little app but sadly it does not use React",
    usage: "I forget",
    source: ["https://github.com/warleon/organice", "warleon/organice"],
    tech: [
      "Linux",
      "Nodejs",
      "Javascript",
      "Express",
      "MongoDB",
      "HTML",
      "CSS",
      "jquery",
    ],
  },
  dataGenerator: {
    url: "/projects/dataGenerator",
    img: placeholder,
    imgText: "",
    title: "DATA GENERATOR",
    description:
      "A data generator that uses pandas to extend google forms responses.",
    call: "learn more",
    longDescription:
      "A survey responses generator that takes csv files from google forms and creates new responses that maintains the same distribution as the previus answers.",
    motivation:
      "I just needed a way to generate survey responses for my statistics class. So I created this generator using pandas that maintains the distribution of the data.",
    usage:
      'To see it in action you can follow the instructions that I put in the readme of the project (see source code)\n\nTo obtain it just clone the repositorie\n\nThen download the csv file from the google forms that you want to generate from\n\nChange the variables "eBase" and "eGen" to the name of the csv input file and the csv output file respectively\n\nRun the python interpreter as follows python3 dataGen.py in the terminal',
    source: [
      "https://github.com/warleon/Data_generator",
      "warleon/Data_generator",
    ],
    tech: ["Python3", "Pandas", "CSV"],
  },
  rtree: {
    url: "/projects/rtree",
    img: placeholder,
    imgText: "",
    title: "RTREE VISUALIZATION",
    description:
      "An Rtree implementation in c++ with svg rendering of the tree.",
    call: "learn more",
    longDescription:
      "An n-dimentional rtree implementation in c++ that persist the data in disk and has visualization abailable when the data is 2d.",
    motivation:
      "This was my project for the Advance Data Estructures course. The premise just ask me for the c++ implementation and persistence and I added the visualization just to meke the presentation prettier.",
    usage:
      "To run this you will need a C++ compiler (g++) and Cmake. Also for the demo the boost library is necesary since I compared my implementation performance with the boost:rtree\n\nThen clone the Source code and follow the instructions in the readme",
    source: [
      "https://github.com/warleon/RtreeVisualization",
      "warleon/RtreeVisualization",
    ],
    tech: ["C++", "Cmake", "JSON", "SVG", "Google Test"],
  },
  portfolio: {
    url: "/projects/portfolio",
    img: placeholder,
    imgText: "",
    title: "This site",
    description: "My portfolio, made using react",
    call: "learn more",
    motivation:
      "My previus portfolio site was written in html, js and css and was a big mess. With my knew knowledge I wanted remake it using react",
    longDescription:
      "An static site builded with react-static and other extensions",
    usage:
      "After compilation all the site is contained in static js, html and css files and only needs to be serve like a regular static site",
    source: ["https://github.com/warleon/Portfolio", "warleon/Portfolio"],
    tech: ["Nodejs", "React", "JSX", "React-static", "Styled-components"],
  },
  generalExtendibleHashTable: {
    url: "/projects/generalExtendibleHashTable",
    img: placeholder,
    imgText: "",
    title: "Extendible Hashing",
    description: "A HashTable in disk to index any type of data",
    call: "learn more",
    motivation:
      "This was a project for the Data Bases 2 course where I learned how a DB works internally. It was asked to work for a specific schema but I wanted to make it work with any schema.",
    longDescription:
      "A HashTable in disk to index any type of  data. Made in C++",
    usage: "follow the instructions left in the end of the repository readme",
    source: [
      "https://github.com/warleon/db2-proyecto1#extendible-hash",
      "warleon/db2-proyecto1",
    ],
    tech: ["C++", "CMake", "CSV", "docker"],
  },
  imageSearch: {
    url: "/projects/imageSearch",
    img: placeholder,
    imgText: "",
    title: "Faces Database",
    description:
      "A database for storing and indexing images so that a proximity search could be done to them. With a demo to upload a photo and search for the K most similar faces in the database",
    call: "learn more",
    motivation:
      "This was a project for the Data Bases 2 course where I learned how a DB works internally.",
    longDescription:
      "A database for storing and indexing images so that a proximity search could be done to them. With a demo to upload a photo and search for the K most similar faces in the database",
    usage:
      "In the backend directory just run 'python api.py'\nIn the Frontend directory run 'npm start'\nthen follow the URL and upload a photo",
    source: [
      "https://github.com/warleon/db2-proyecto3",
      "warleon/db2-proyecto3",
    ],
    tech: ["python", "flask", "face_recognition", "Rtree", "numpy", "heap"],
  },
  webScrapper: {
    url: "/projects/webScrapper",
    img: placeholder,
    imgText: "",
    title: "Web Scrapper",
    description:
      "A web scrapper created to extract some information for the Movistar Hackathon 2020",
    call: "learn more",
    motivation:
      "For the competition we needed a web scrapper to interact and extract some date from a given website",
    longDescription:
      "A web scrapper created to extract some information for the Movistar Hackathon 2020",
    usage: "There are some instructions in the readme but since the event was long ago I dont think the bot could be tested because of expired credentials or updates in the website",
    source: [
      "https://github.com/davento/hackathon-movistar-2020",
      "davento/hackathon-movistar-2020",
    ],
    tech: ["python","selenium"],
  },
};
// PROJECT_NAME: {
//   url: "/projects/PROJECT_NAME",
//   img: placeholder,
//   imgText: "",
//   title: "PROJECT_NAME",
//   description: "",
//   call: "learn more",
//   motivation: "",
//   longDescription: "",
//   usage: "",
//   source: ["https://github.com/warleon/PROJECT_NAME", "warleon/PROJECT_NAME"],
//   tech: [
//   ],
// },
export default projects;
