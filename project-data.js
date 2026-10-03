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
    "cover": "assets/project asset/3d_pipeline_3.png",
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
    "cover": "assets/project asset/3d_pipeline_2.png",
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
    "cover": "assets/project asset/3d_1.png",
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
    "id": "animation-04",
    "category": "animation",
    "title": "Project Title 04",
    "summary": "Short project description goes here.",
    "year": 2023,
    "client": "Client Name",
    "role": "Art Direction & Animation",
    "duration": "8 weeks",
    "cover": "assets/game2.jpeg",
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
    "gallery": [
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image one"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image two"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image three"
      }
    ],
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
    "id": "2d-animation-01",
    "category": "2d-animation",
    "title": "Project Title 01",
    "summary": "Short project description goes here.",
    "year": 2026,
    "client": "Client Name",
    "role": "2D Animation & Compositing",
    "duration": "8 weeks",
    "cover": "assets/game2.jpeg",
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
      "Toon Boom Harmony",
      "Clip Studio Paint",
      "After Effects"
    ],
    "gallery": [
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image one"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image two"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image three"
      }
    ],
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
    "id": "2d-animation-02",
    "category": "2d-animation",
    "title": "Project Title 02",
    "summary": "Short project description goes here.",
    "year": 2026,
    "client": "Client Name",
    "role": "2D Animation & Compositing",
    "duration": "8 weeks",
    "cover": "assets/game2.jpeg",
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
      "Toon Boom Harmony",
      "Clip Studio Paint",
      "After Effects"
    ],
    "gallery": [
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image one"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image two"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image three"
      }
    ],
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
    "id": "2d-animation-03",
    "category": "2d-animation",
    "title": "Project Title 03",
    "summary": "Short project description goes here.",
    "year": 2026,
    "client": "Client Name",
    "role": "2D Animation & Compositing",
    "duration": "8 weeks",
    "cover": "assets/game2.jpeg",
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
      "Toon Boom Harmony",
      "Clip Studio Paint",
      "After Effects"
    ],
    "gallery": [
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image one"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image two"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image three"
      }
    ],
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
    "id": "2d-animation-04",
    "category": "2d-animation",
    "title": "Project Title 04",
    "summary": "Short project description goes here.",
    "year": 2026,
    "client": "Client Name",
    "role": "2D Animation & Compositing",
    "duration": "8 weeks",
    "cover": "assets/game2.jpeg",
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
      "Toon Boom Harmony",
      "Clip Studio Paint",
      "After Effects"
    ],
    "gallery": [
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image one"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image two"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image three"
      }
    ],
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
    "cover": "assets/project asset/3D_Animation_1.png",
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
    "cover": "assets/project asset/3D_Animation_2.png",
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
    "cover": "assets/project asset/3D_animation_3.png",
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
    "id": "3d-animation-04",
    "category": "3d-animation",
    "title": "Project Title 04",
    "summary": "Short project description goes here.",
    "year": 2026,
    "client": "Client Name",
    "role": "3D Animation",
    "duration": "8 weeks",
    "cover": "assets/game2.jpeg",
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
    "gallery": [
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image one"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image two"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image three"
      }
    ],
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
    "cover": "assets/project asset/3D_Cgi.png",
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
    "id": "vfx-cgi-02",
    "category": "vfx-cgi",
    "title": "Project Title 02",
    "summary": "Short project description goes here.",
    "year": 2026,
    "client": "Client Name",
    "role": "VFX & Compositing",
    "duration": "8 weeks",
    "cover": "assets/game2.jpeg",
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
    "gallery": [
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image one"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image two"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image three"
      }
    ],
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
    "id": "vfx-cgi-03",
    "category": "vfx-cgi",
    "title": "Project Title 03",
    "summary": "Short project description goes here.",
    "year": 2026,
    "client": "Client Name",
    "role": "VFX & Compositing",
    "duration": "8 weeks",
    "cover": "assets/game2.jpeg",
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
    "gallery": [
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image one"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image two"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image three"
      }
    ],
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
    "id": "vfx-cgi-04",
    "category": "vfx-cgi",
    "title": "Project Title 04",
    "summary": "Short project description goes here.",
    "year": 2026,
    "client": "Client Name",
    "role": "VFX & Compositing",
    "duration": "8 weeks",
    "cover": "assets/game2.jpeg",
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
    "gallery": [
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image one"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image two"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image three"
      }
    ],
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
    "id": "asset-rigging-01",
    "category": "asset-rigging",
    "title": "Isometric Kitchen",
    "summary": "Detailed isometric kitchen diorama with modeled props and warm lighting.",
    "year": 2026,
    "client": "Client Name",
    "role": "Modeling & Rigging",
    "duration": "8 weeks",
    "cover": "assets/project asset/3D_Asset_1.png",
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
    "cover": "assets/project asset/3D_Character.png",
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
    "cover": "assets/project asset/3D_Character.png",
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
    "id": "asset-rigging-04",
    "category": "asset-rigging",
    "title": "Project Title 04",
    "summary": "Short project description goes here.",
    "year": 2026,
    "client": "Client Name",
    "role": "Modeling & Rigging",
    "duration": "8 weeks",
    "cover": "assets/game2.jpeg",
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
    "gallery": [
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image one"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image two"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image three"
      }
    ],
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
    "id": "game-01",
    "category": "game",
    "title": "Project Title 01",
    "summary": "Short project description goes here.",
    "year": 2026,
    "client": "Client Name",
    "role": "Game Art & Production",
    "duration": "8 weeks",
    "cover": "assets/game2.jpeg",
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
      "Unity",
      "Blender",
      "Spine"
    ],
    "gallery": [
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image one"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image two"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image three"
      }
    ],
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
    "id": "game-02",
    "category": "game",
    "title": "Project Title 02",
    "summary": "Short project description goes here.",
    "year": 2026,
    "client": "Client Name",
    "role": "Game Art & Production",
    "duration": "8 weeks",
    "cover": "assets/game2.jpeg",
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
      "Unity",
      "Blender",
      "Spine"
    ],
    "gallery": [
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image one"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image two"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image three"
      }
    ],
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
    "id": "game-03",
    "category": "game",
    "title": "Project Title 03",
    "summary": "Short project description goes here.",
    "year": 2026,
    "client": "Client Name",
    "role": "Game Art & Production",
    "duration": "8 weeks",
    "cover": "assets/game2.jpeg",
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
      "Unity",
      "Blender",
      "Spine"
    ],
    "gallery": [
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image one"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image two"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image three"
      }
    ],
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
    "id": "game-04",
    "category": "game",
    "title": "Project Title 04",
    "summary": "Short project description goes here.",
    "year": 2026,
    "client": "Client Name",
    "role": "Game Art & Production",
    "duration": "8 weeks",
    "cover": "assets/game2.jpeg",
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
      "Unity",
      "Blender",
      "Spine"
    ],
    "gallery": [
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image one"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image two"
      },
      {
        "src": "assets/game2.jpeg",
        "caption": "Caption for image three"
      }
    ],
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
  }
];