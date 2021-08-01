// import * as projectData from '../data/projects.json'


window.onload = function windowLoad() {
  openCity(event, 'all')
}
var prevScrollpos = window.pageYOffset;

var projectsJSON = [
  {
    "type": "app",
    "tech": "flutter",
    "name": "musicapp",
    "image": "./assets/images/musicapp.jpg",
    "playUrl": "",
    "myUrl": "https://drive.google.com/drive/u/0/folders/1iJgZguFKE4c4q0l3zmgyiBsCep979a6O",
    "code": "https://github.com/marknjoroge/",
    "playstore": ""
  },
  {
    "type": "website",
    "tech": "2",
    "name": "other",
    "image": "./assets/images/me.jpg",
    "playUrl": "",
    "myUrl": "https://drive.google.com/drive/u/0/folders/1iJgZguFKE4c4q0l3zmgyiBsCep979a6O",
    "code": "https://github.com/marknjoroge/",
    "playstore": ""
  },
  {
    "type": "website",
    "tech": "2",
    "name": "other",
    "image": "./assets/images/me.jpg",
    "playUrl": "",
    "myUrl": "https://drive.google.com/drive/u/0/folders/1iJgZguFKE4c4q0l3zmgyiBsCep979a6O",
    "code": "https://github.com/marknjoroge/",
    "playstore": ""
  },
  {
    "type": "website",
    "tech": "2",
    "name": "other",
    "image": "./assets/images/me.jpg",
    "playUrl": "",
    "myUrl": "https://drive.google.com/drive/u/0/folders/1iJgZguFKE4c4q0l3zmgyiBsCep979a6O",
    "code": "https://github.com/marknjoroge/",
    "playstore": ""
  },
  {
    "type": "website",
    "tech": "2",
    "name": "other",
    "image": "./assets/images/me.jpg",
    "playUrl": "",
    "myUrl": "https://drive.google.com/drive/u/0/folders/1iJgZguFKE4c4q0l3zmgyiBsCep979a6O",
    "code": "https://github.com/marknjoroge/",
    "playstore": ""
  },
  {
    "type": "website",
    "tech": "2",
    "name": "other",
    "image": "./assets/images/me.jpg",
    "playUrl": "",
    "myUrl": "https://drive.google.com/drive/u/0/folders/1iJgZguFKE4c4q0l3zmgyiBsCep979a6O",
    "code": "https://github.com/marknjoroge/",
    "playstore": ""
  }
]


window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

window.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.getElementById("contact-form");

  document.getElementById("submit-contact-form").addEventListener("click", function () {
    contactForm.submit();
  })
})



function openCity(evt, tabName) {
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  console.log(tabName + 1)
  document.getElementById(tabName).innerHTML = displayProjects(tabName)
  console.log(tabName+ 2)
}

function displayProjects(tabName) {

  var allData = "";
  var webData = "";
  var appData = "";
  var strData = "";

  for (var i = 0; i < projectsJSON.length; i++) {
    strData = '<div class="portfolio-card" style="float: left;">'
              + '<div class="imgsection" style=" background-image: url(\''+ projectsJSON[i].image +'\');">'
                + '<div class="project-name">' + projectsJSON[i].name + '</div>'
                + '<div class="project-technology">' + projectsJSON[i].tech + '</div>'
              + '</div>'
              + '<div class="links-div">'
                + '<a href="' + projectsJSON[i].playUrl + '"><i class="fab fa-google-play fa-sm"></i></a>'
                + '<a href="' + projectsJSON[i].code + '"><i class="fas fa-code fa-sm"></i></a>'
                + '<a href="' + projectsJSON[i].myUrl + '"><i class="fas fa-link fa-sm"></i></a>'
                + '<button onclick="showAbout(' + projectsJSON[i].name + ')">about</button>'
              + '</div>'
            + '</div>'
    if (projectsJSON[i].type == "app") {
      appData += strData
    } else if (projectsJSON[i].type == "website") {
      webData += strData
    }

    allData += strData
  }

  console.log(tabName+ 3)
  
  return tabName == "all" ?
    allData : tabName == "websites" ?
    webData : tabName == "apps" ? 
    appData : ""

}