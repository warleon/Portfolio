import placeholder from './../Assets/placeholderImg.jpg'

const projects = {
  videoApp: {
    url: "/projects/videoApp",
    img: placeholder,
    imgText: "",
    title: "video app",
    description: "A containerized video app made using django and ffmpeg.",
    call: "learn more",
    longDescription: "A VIDEO ON DEMAND APP THAT LETS YOU UPLOAD, WATCH AND UPDATE VIDEOS WITH DESCRIPTIONS AND SUGGESTIONS TO WATCH NEXT. AND ALSO VOTE THE VIDEOS WITH LIKES OR DISLIKES",
    motivation: "This is my proposed project for my Software Engineering class. I just wanted to make a video on demand server so I conviced other 3 classmates to help me with it. I led the team trough the proccess achieving a perfect score in the course",
    usage: "To see it in action you first need to have docker installed\n\nThen just download the source code and in the main directory run docker-compose up --build\n\nThe use of the actual app is pretty straight forward and intuitive\n\ncreate an account the login and upload a video, declare suggestions and publish it then watch and enjoy",
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
    longDescription: "A SMALL DEMO APP THAT REQUIRED A CRUD.",
    motivation: "I wanted a web app to host in my raspberrypi and learn the MERN stack. So I made this little app but sadly it does not use React",
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
      "jquery",],
  },
  dataGenerator: {
    url: "/projects/dataGenerator",
    img: placeholder,
    imgText: "",
    title: "DATA GENERATOR",
    description: "A data generator that uses pandas to extend google forms responses.",
    call: "learn more",
    longDescription: "A SURVEY RESPONSES GENERATOR THAT TAKES CSV FILES FROM GOOGLE FORMS AND CREATES NEW RESPONSES THAT MAINTAINS THE SAME DISTRIBUTION AS THE PREVIUS ANSWERS.",
    motivation: "I just needed a way to generate survey responses for my statistics class. So I created this generator using pandas that maintains the distribution of the data.",
    usage: 'To see it in action you can follow the instructions that I put in the readme of the project (see source code)\n\nTo obtain it just clone the repositorie\n\nThen download the csv file from the google forms that you want to generate from\n\nChange the variables "eBase" and "eGen" to the name of the csv input file and the csv output file respectively\n\nRun the python interpreter as follows python3 dataGen.py in the terminal',
    source: ["https://github.com/warleon/Data_generator", "warleon/Data_generator"],
    tech: [
      "Python3",
      "Pandas",
      "CSV",
    ],
  },
  rtree: {
    url: "/projects/rtree",
    img: placeholder,
    imgText: "",
    title: "RTREE VISUALIZATION",
    description: "An Rtree implementation in c++ with svg rendering of the tree.",
    call: "learn more",
    longDescription: "AN N-DIMENTIONAL RTREE IMPLEMENTATION IN C++ THAT PERSIST THE DATA IN DISK AND HAS VISUALIZATION ABAILABLE WHEN THE DATA IS 2D.",
    motivation: "This was my project for the Advance Data Estructures course. The premise just ask me for the c++ implementation and persistence and I added the visualization just to meke the presentation prettier.",
    usage: "To run this you will need a C++ compiler (g++) and Cmake. Also for the demo the boost library is necesary since I compared my implementation performance with the boost:rtree\n\nThen clone the Source code and follow the instructions in the readme",
    source: ["https://github.com/warleon/RtreeVisualization", "warleon/RtreeVisualization"],
    tech: [
      "C++",
      "Cmake",
      "JSON",
      "SVG",
      "Google",
      "Test",
    ],

  },
  portfolio: {
    url: "/projects/portfolio",
    img: placeholder,
    imgText: "",
    title: "This site",
    description: "My portfolio, made using react",
    call: "learn more",
    motivation: "My previus portfolio site was written in html, js and css and was a big mess. With my knew knowledge I wanted remake it using react",
    longDescription: "An static site builded with react-static and other extensions",
    usage: "After compilation all the site is contained in static js, html and css files and only needs to be server like a regular static site",
    source: ["https://github.com/warleon/Portfolio", "warleon/Portfolio"],
    tech: [
      "Nodejs",
      "React",
      "JSX",
      "React-static",
      "Styled-components",
    ],

  },
}
export default projects