/* ==========================================================================
   DATA PROJECT - edit di sini saja, halaman index & detail ikut berubah.
   Field per project:
   id         : unik, dipakai di URL (project-detail.html?id=animation-01)
   category   : slug kategori (lihat PROJECT_CATEGORIES)
   title, summary, year, client, role, duration
   cover      : gambar untuk kartu & header halaman detail
   coverPosition : (opsional) fokus crop gambar, mis. "center 30%" untuk gambar potret
   overview   : array paragraf
   highlights : array poin hasil / deliverable
   tools      : array nama software
   gallery    : array { src, caption }
   credits    : array { role, name }
   link       : { label, url } atau null bila tidak ada
   ========================================================================== */
const PROJECT_CATEGORIES = [
  {
    "slug": "animation",
    "name": "Animation",
    "description": "Creative animation production from concept to final."
  },
  {
    "slug": "2d-animation",
    "name": "2D Animation",
    "description": "Character, scene, and visual production in 2D."
  },
  {
    "slug": "3d-animation",
    "name": "3D Animation",
    "description": "3D character and scene animation."
  },
  {
    "slug": "vfx-cgi",
    "name": "VFX & CGI",
    "description": "Visual effects and CGI integration."
  },
  {
    "slug": "asset-rigging",
    "name": "Asset & Rigging",
    "description": "Production-ready 3D assets and character rigs."
  },
  {
    "slug": "game",
    "name": "Game",
    "description": "Game art and interactive production."
  }
];

const PROJECTS = [
  {
    "id": "animation-01",
    "category": "animation",
    "title": "BoBoiBoy",
    "summary": "Hard-surface mech and industrial set, lit and rendered as a full 3D scene.",
    "year": 2026,
    "client": "Client Name",
    "role": "Art Direction & Animation",
    "duration": "8 weeks",
    "cover": "assets/project_asset/3d_pipeline_3.png",
    "overview": [
      "Replace this with the story of the project: what the client needed and what the brief looked like.",
      "Use a second paragraph for how the team approached it and what made it different."
    ],
    "highlights": [
      "Key result or deliverable one",
      "Key result or deliverable two",
      "Key result or deliverable three"
    ],
    "tools": [
      "Blender",
      "After Effects",
      "Premiere Pro"
    ],
    "gallery": [],
    "credits": [
      {
        "role": "Director",
        "name": "Name"
      },
      {
        "role": "Lead Artist",
        "name": "Name"
      }
    ],
    "link": null
  },
  {
    "id": "animation-02",
    "category": "animation",
    "title": "Papa Zola",
    "summary": "Stylized 3D street environment with character blocking and lighting.",
    "year": 2025,
    "client": "Client Name",
    "role": "Art Direction & Animation",
    "duration": "8 weeks",
    "cover": "assets/project_asset/3d_pipeline_2.png",
    "overview": [
      "Replace this with the story of the project: what the client needed and what the brief looked like.",
      "Use a second paragraph for how the team approached it and what made it different."
    ],
    "highlights": [
      "Key result or deliverable one",
      "Key result or deliverable two",
      "Key result or deliverable three"
    ],
    "tools": [
      "Blender",
      "After Effects",
      "Premiere Pro"
    ],
    "gallery": [],
    "credits": [
      {
        "role": "Director",
        "name": "Name"
      },
      {
        "role": "Lead Artist",
        "name": "Name"
      }
    ],
    "link": null
  },
  {
    "id": "animation-03",
    "category": "animation",
    "title": "Racer Cockpit Scene",
    "summary": "Character performance shot from a work-in-progress animation scene.",
    "year": 2024,
    "client": "Client Name",
    "role": "Art Direction & Animation",
    "duration": "8 weeks",
    "cover": "assets/project_asset/3d_1.png",
    "overview": [
      "Replace this with the story of the project: what the client needed and what the brief looked like.",
      "Use a second paragraph for how the team approached it and what made it different."
    ],
    "highlights": [
      "Key result or deliverable one",
      "Key result or deliverable two",
      "Key result or deliverable three"
    ],
    "tools": [
      "Blender",
      "After Effects",
      "Premiere Pro"
    ],
    "gallery": [],
    "credits": [
      {
        "role": "Director",
        "name": "Name"
      },
      {
        "role": "Lead Artist",
        "name": "Name"
      }
    ],
    "link": null
  },
  {
    "id": "3d-animation-01",
    "category": "3d-animation",
    "title": "Classroom Daydream",
    "summary": "Soft-lit 3D character shot with natural window lighting.",
    "year": 2026,
    "client": "Client Name",
    "role": "3D Animation",
    "duration": "8 weeks",
    "cover": "assets/project_asset/3D_Animation_1.png",
    "overview": [
      "Replace this with the story of the project: what the client needed and what the brief looked like.",
      "Use a second paragraph for how the team approached it and what made it different."
    ],
    "highlights": [
      "Key result or deliverable one",
      "Key result or deliverable two",
      "Key result or deliverable three"
    ],
    "tools": [
      "Blender",
      "Maya",
      "Substance Painter"
    ],
    "gallery": [],
    "credits": [
      {
        "role": "Director",
        "name": "Name"
      },
      {
        "role": "Lead Artist",
        "name": "Name"
      }
    ],
    "link": null
  },
  {
    "id": "3d-animation-02",
    "category": "3d-animation",
    "title": "Ribbon Dance",
    "summary": "Stylized animation blending an illustrated character with flowing ribbon motion.",
    "year": 2026,
    "client": "Client Name",
    "role": "3D Animation",
    "duration": "8 weeks",
    "cover": "assets/project_asset/3D_Animation_2.png",
    "overview": [
      "Replace this with the story of the project: what the client needed and what the brief looked like.",
      "Use a second paragraph for how the team approached it and what made it different."
    ],
    "highlights": [
      "Key result or deliverable one",
      "Key result or deliverable two",
      "Key result or deliverable three"
    ],
    "tools": [
      "Blender",
      "Maya",
      "Substance Painter"
    ],
    "gallery": [],
    "credits": [
      {
        "role": "Director",
        "name": "Name"
      },
      {
        "role": "Lead Artist",
        "name": "Name"
      }
    ],
    "link": null
  },
  {
    "id": "3d-animation-03",
    "category": "3d-animation",
    "title": "Doorstep Delivery",
    "summary": "Character-driven 3D scene with a delivery rider and warm lighting.",
    "year": 2026,
    "client": "Client Name",
    "role": "3D Animation",
    "duration": "8 weeks",
    "cover": "assets/project_asset/3D_Animation_3.png",
    "overview": [
      "Replace this with the story of the project: what the client needed and what the brief looked like.",
      "Use a second paragraph for how the team approached it and what made it different."
    ],
    "highlights": [
      "Key result or deliverable one",
      "Key result or deliverable two",
      "Key result or deliverable three"
    ],
    "tools": [
      "Blender",
      "Maya",
      "Substance Painter"
    ],
    "gallery": [],
    "credits": [
      {
        "role": "Director",
        "name": "Name"
      },
      {
        "role": "Lead Artist",
        "name": "Name"
      }
    ],
    "link": null
  },
  {
    "id": "vfx-cgi-01",
    "category": "vfx-cgi",
    "title": "Executive Rooster",
    "summary": "Anthropomorphic CGI character placed in a realistic office set.",
    "year": 2026,
    "client": "Client Name",
    "role": "VFX & Compositing",
    "duration": "8 weeks",
    "cover": "assets/project_asset/3D_Cgi.png",
    "overview": [
      "Replace this with the story of the project: what the client needed and what the brief looked like.",
      "Use a second paragraph for how the team approached it and what made it different."
    ],
    "highlights": [
      "Key result or deliverable one",
      "Key result or deliverable two",
      "Key result or deliverable three"
    ],
    "tools": [
      "Houdini",
      "Nuke",
      "Blender"
    ],
    "gallery": [],
    "credits": [
      {
        "role": "Director",
        "name": "Name"
      },
      {
        "role": "Lead Artist",
        "name": "Name"
      }
    ],
    "link": null,
    "coverPosition": "center 30%"
  },
  {
    "id": "asset-rigging-01",
    "category": "asset-rigging",
    "title": "Isometric Kitchen",
    "summary": "Detailed isometric kitchen diorama with modeled props and warm lighting.",
    "year": 2026,
    "client": "Client Name",
    "role": "Modeling & Rigging",
    "duration": "8 weeks",
    "cover": "assets/project_asset/3D_Asset_1.png",
    "overview": [
      "Replace this with the story of the project: what the client needed and what the brief looked like.",
      "Use a second paragraph for how the team approached it and what made it different."
    ],
    "highlights": [
      "Key result or deliverable one",
      "Key result or deliverable two",
      "Key result or deliverable three"
    ],
    "tools": [
      "Blender",
      "ZBrush",
      "Maya"
    ],
    "gallery": [],
    "credits": [
      {
        "role": "Director",
        "name": "Name"
      },
      {
        "role": "Lead Artist",
        "name": "Name"
      }
    ],
    "link": null,
    "coverPosition": "center 55%"
  },
  {
    "id": "asset-rigging-02",
    "category": "asset-rigging",
    "title": "Supermarket Crew",
    "summary": "Stylized 3D character lineup, modeled and ready for rigging.",
    "year": 2026,
    "client": "Client Name",
    "role": "Modeling & Rigging",
    "duration": "8 weeks",
    "cover": "assets/project_asset/3D_Character.png",
    "overview": [
      "Replace this with the story of the project: what the client needed and what the brief looked like.",
      "Use a second paragraph for how the team approached it and what made it different."
    ],
    "highlights": [
      "Key result or deliverable one",
      "Key result or deliverable two",
      "Key result or deliverable three"
    ],
    "tools": [
      "Blender",
      "ZBrush",
      "Maya"
    ],
    "gallery": [],
    "credits": [
      {
        "role": "Director",
        "name": "Name"
      },
      {
        "role": "Lead Artist",
        "name": "Name"
      }
    ],
    "link": null,
    "coverPosition": "center 70%"
  },
  {
    "id": "asset-rigging-03",
    "category": "asset-rigging",
    "title": "Road Trip Duo",
    "summary": "Anime-styled 3D characters with toon shading in a car interior.",
    "year": 2026,
    "client": "Client Name",
    "role": "Modeling & Rigging",
    "duration": "8 weeks",
    "cover": "assets/project_asset/3D_Character_2.png",
    "overview": [
      "Replace this with the story of the project: what the client needed and what the brief looked like.",
      "Use a second paragraph for how the team approached it and what made it different."
    ],
    "highlights": [
      "Key result or deliverable one",
      "Key result or deliverable two",
      "Key result or deliverable three"
    ],
    "tools": [
      "Blender",
      "ZBrush",
      "Maya"
    ],
    "gallery": [],
    "credits": [
      {
        "role": "Director",
        "name": "Name"
      },
      {
        "role": "Lead Artist",
        "name": "Name"
      }
    ],
    "link": null,
    "coverPosition": "center 42%"
  },
  {
    "id": "game-01",
    "category": "game",
    "title": "Quartlane",
    "summary": "A casual card game inspired by the classic Quartet card game.",
    "year": 2026,
    "client": "Meraki Studio",
    "role": "Game Art & Production",
    "duration": "4 weeks",
    "cover": "assets/project_asset/quartlane/thumbnail.png",
    "overview": [
      "Quartlane is a casual strategic card mobile game that blends the nostalgic fun of the classic Quartet card game with modern deck-building mechanics. Players race to complete card category sets while using offensive, defensive, buff, and normal action cards to protect their collections, sabotage opponents, and create unexpected comebacks.",
      "Controls: single press to select cards, opponents, and categories, play action cards, and confirm actions. Double press to select or deselect a card category. Press and hold to view detailed card information, and use the Finish button to end your turn.",
      "For the full Quartlane tutorial, open Profile → Info → Tutorial inside the game."
    ],
    "highlights": [
      "Quartet-style set collecting combined with deck-building mechanics",
      "Four action card types: offensive, defensive, buff, and normal",
      "Touch-friendly controls built for casual mobile play"
    ],
    "tools": [
      "Godot",
      "Krita",
      "Clip Studio Paint",
      "Adobe Photoshop",
      "Ibis Paint",
      "Material Maker"
    ],
    "gallery": [
      {
        "src": "assets/project_asset/quartlane/1.Jpeg",
        "caption": "Quartlane main menu"
      },
      {
        "src": "assets/project_asset/quartlane/2.Jpeg",
        "caption": "Quartlane gameplay"
      },
      {
        "src": "assets/project_asset/quartlane/3.Jpeg",
        "caption": "Quartlane gameplay with action cards"
      }
    ],
    "credits": [
      {
        "role": "Game Director, Game Producer",
        "name": "Hendra Febri"
      },
      {
        "role": "Associate Game Producer, Technical Artist, Game Programmer",
        "name": "Ariiq Wicaksana"
      },
      {
        "role": "Game Designer",
        "name": "Grace Gabriela Maneking"
      },
      {
        "role": "UI Artist",
        "name": "Intan Ridwani Syahputri"
      },
      {
        "role": "Game Artist",
        "name": "Devo Dwi Jatmiko"
      },
      {
        "role": "Game Artist",
        "name": "Ramekkah Rona Jannah"
      },
      {
        "role": "Game Artist",
        "name": "Yolanda"
      },
      {
        "role": "Game Programmer",
        "name": "Irwan Chandra Aditya"
      }
    ],
    "link": {
      "label": "Watch on YouTube",
      "url": "https://youtu.be/MAn4jgodmfw?si=a8zDMOjf7cPJ9gOb"
    }
  }
];