
const myProjects = [
  //Core Programming
  {
    id: 101,
    title: "Card-Guess Game",
    categories: ["core-programming", "game-development"],
    subcategories: ["terminal-games", "c++"],
    date: '06/2021',
    sourceCode: "https://github.com/Haseebullah9012/CardGuess-Game",
    
    briefDescription: ` Its a simple Guessing game, based on luck (probability). Some cards from the Deck of Cards will be randomly shown, and we choose one Card for us. After that they swap, and we have to guess our Card then. \n\t The number of Cards, Swaps, and Guess-limits can be custom configured by the User. `,
  },
  {
    id: 102,
    title: "Rock-Paper-Scissors Game",
    categories: ["core-programming", "game-development"],
    subcategories: ["terminal-games", "c++"],
    date: '06/2021',
    
    briefDescription: ` Its a simple Input Game, played with the CPU, all based on Luck. Both the User and CPU chooses its Input (either Rock or Paper or Scissor), then based on the Inputs, the User will either Win, Lose, or a gets a Tie. `,
  },
  {
    id: 103,
    title: "Chess Game",
    categories: ["core-programming", "game-development"],
    subcategories: ["terminal-games", "c++"],
    date: '12/2021',
    sourceCode: "https://github.com/Haseebullah9012/Chess",
    
    briefDescription: ` Everybody knows about Chess. Its a Turn-based strategy Game, playable by Two-Players (the CPU Logic is not implemented yet). The whole Board and all the different Pieces works perfeclty, including Casting and Pawn-Promotion. We have to Enter both the Source and Destination Cell to move. \n\tAlso, to Win the Game, we have to Capture the Opponent King, rather than Checkmate. So, my Game is just one Move ahead. Isn't it Nice...`,
    detaledDescription: ""
  },
  {
    id: 104,
    title: "Mine-Finder Game",
    categories: ["core-programming", "game-development"],
    subcategories: ["terminal-games", "c++"],
    date: '07/2021',
    sourceCode: "https://github.com/Haseebullah9012/MineFinder",
    
    briefDescription: ` Its a version of Minesweeper Game, but a little bit more Logical-Puzzle. The Enemies have put some mines all over the Place. All we can do is put sensors to know the number of Mines all around it in a one-place-range. These numbers are all we've Got to clear the path, and put signboards there. \n\t The board-size and Mine-Probability can be custom configured by the User. Its a great Game-concept actually. `,
  },
  {
    id: 105,
    title: "Sudoku Game",
    categories: ["core-programming", "game-development"],
    subcategories: ["terminal-games", "c++"],
    date: '07/2022',
    sourceCode: "https://github.com/Haseebullah9012/Sudoku",
    
    briefDescription: ` Sudoku is a poluplar Logical Puzzle-Board Game, where we have to uniqely fill out the Rows, Columns, and Blocks with 1-9 Numbers, without repition. This Game's Development-Logic was complex. It uses Recursive-Algorithms to fill the Board with Numbers. \n\t So, its a Sudoku-Board-Creator as well. `,
  },
  {
    id: 106,
    title: "Notepad Text-Editor",
    categories: ["core-programming"],
    subcategories: ["c++"],
    date: '07/2022',
    sourceCode: "https://github.com/Haseebullah9012/Notepad",
    
    briefDescription: ` Its a Text-Editor. It uses the concepts of Data Structres (specifically Linked Lists), using which we can store our Text in it. Each character is stored in a separate Node, and every Node is Doubly-Linked-List. \n\t Means you can move the pointer-cursor Left, Right, Up, and Down anywhere in the Notepad, and then can save it or import it as well. All like we can do in GUI version.  `,
  },

  //Web-Development
  {
    id: 201,
    title: "Konnect-Board Game",
    categories: ["core-programming", "game-development", "web-development"],
    subcategories: ["terminal-games", "c++", "web-games", "html-cs-js"],
    date: '06/2021',
    sourceCode: "https://github.com/Haseebullah9012/Konnect-BoardGame",
    liveDemo: "https://haseebullah9012.github.io/Konnect-BoardGame/",

    briefDescription: ` Its a custom Tic-Tac-Toe Game. The board's Rows and Columns are configurable by the User. The Goal of how many consecutive Items to place are also configurable. Moreover, upto 8 Players can Play the Game at the same time. \n\t You should try out our Built-in configurations. Its so much Fun!!!`,
  },
  {
    id: 202,
    title: "Calculator",
    categories: ["web-development"],
    subcategories: ["html-css-js"],
    date: '09/2022',
    
    briefDescription: ` A Web-based Calculator, with clean UI. It looks like a Cashier's Calculator. It works with Button-presses as well as from Keyboard Numbers. `,
  },
  {
    id: 203,
    title: "Analog Clock",
    categories: ["web-development"],
    subcategories: ["html-css-js"],
    date: '09/2022',
    
    briefDescription: ` A Web-based Clock, with clean UI. It looks like a Wall-Clock. All the clock-hands animate with Time, not just the second's hand. `,
  },
  {
    id: 204,
    title: "Color Generator",
    categories: ["web-development"],
    subcategories: ["html-css-js"],
    date: '10/2022',
    
    briefDescription: ` Its a HSL-based Color selection Project. We can select the Hue from the 360-degree Circle, and then choose certain shades of both Saturation and Lightness from 0% to 100%. The selected Color is displayed at all times, and we can vary our Color-shade according to the Need. \n\t The UI is not Clean, and the Project is not yet completed according to my Ideal Requirements. `,
  },
  {
    id: 205,
    title: "Chat Streaming App",
    categories: ["web-development"],
    subcategories: ["mern", "react-native"],
    date: '03/2024',
    
    briefDescription: ` Its actually a Mobile-App, made in Expo-React-Native and NodeJs. It uses Socket.IO (Web-Sockets Library) to implement the Text-Streaming Functionality. The User can Join a specific Room and then all the Joined users can Chat freely. The App works Fine and the UI is clean, but its not very Perfect. `,
  },
  {
    id: 206,
    title: "Web OS",
    categories: ["web-development"],
    subcategories: ["html-css-js"],
    date: '06/2024',
    
    briefDescription: `  `,
  },
  {
    id: 207,
    title: "Electrical-Company Website",
    categories: ["web-development"],
    subcategories: ["html-css-js"],
    date: '08/2021',
    
    briefDescription: `  `,
  },
  {
    id: 208,
    title: "Digital Library Website",
    categories: ["web-development"],
    subcategories: ["html-css-js"],
    date: '10/2021',
    
    briefDescription: `  `,
  },

  //Data Science
  {
    id: 301,
    title: "Voice Language Detection",
    categories: ["data-science"],
    subcategories: ["machine-learning", "python-ds"],
    date: '05/2024',
    
    briefDescription: `  `,
  },
  {
    id: 302,
    title: "Personality Prediction",
    categories: ["data-science"],
    subcategories: ["machine-learning", "python-ds"],
    date: '11/2024',
    
    briefDescription: `  `,
  },

  //Graphics
  {
    id: 401,
    title: "Banners and Posters Design",
    categories: ["graphics"],
    subcategories: ["photoshop"],
    date: '12/2022',
    
    briefDescription: `  `,
  },
  {
    id: 402,
    title: "2D Character Design",
    categories: ["graphics"],
    subcategories: ["photoshop"],
    date: '12/2022',
    
    briefDescription: `  `,
  },
  {
    id: 403,
    title: "Quaid-e-Azam Speech Video Making",
    categories: ["graphics"],
    subcategories: ["video-editing"],
    date: '12/2022',
    
    briefDescription: ` Made a Video for 25th December, where we used different Video Clips, ackgrround Sounds, and Quaid's Speech Audio. We researched for the Content, and finally, compiled a Good Video. `,
  },
  {
    id: 404,
    title: "Pakistan Animated Flag 3d-Model",
    categories: ["graphics"],
    subcategories: ["blender"],
    date: '08/2022',
    
    briefDescription: ` `,
  },
  {
    id: 405,
    title: "Thor's Hammer 3d-Model",
    categories: ["graphics"],
    subcategories: ["blender"],
    date: '08/2022',
    
    briefDescription: ` `,
  },
  {
    id: 406,
    title: "Captain America's Shield 3d-Model",
    categories: ["graphics"],
    subcategories: ["blender"],
    date: '08/2021',
    
    briefDescription: ` `,
  },
  {
    id: 407,
    title: "Sofa 3d-Model",
    categories: ["graphics"],
    subcategories: ["blender"],
    date: '09/2022',
    
    briefDescription: ` `,
  },

  //Game Development
  {
    id: 501,
    title: "Axe Merge Game",
    categories: ["game-development"],
    subcategories: ["unity"],
    date: '08/2023',
    
    briefDescription: ` `,
  },
  {
    id: 502,
    title: "DOg Circus Game",
    categories: ["game-development"],
    subcategories: ["unity"],
    date: '08/2021',
    
    briefDescription: ` `,
  },
  {
    id: 503,
    title: "Floating Baloon Game",
    categories: ["game-development"],
    subcategories: ["unity"],
    date: '08/2021',
    
    briefDescription: ` `,
  },
  {
    id: 504,
    title: "Soccer Balls Game",
    categories: ["game-development"],
    subcategories: ["unity"],
    date: '08/2021',
    
    briefDescription: ` `,
  },
  {
    id: 505,
    title: "Food-Eater Animals Game",
    categories: ["game-development"],
    subcategories: ["unity"],
    date: '08/2021',
    
    briefDescription: ` `,
  },
  {
    id: 506,
    title: "Floor Lava Game",
    categories: ["game-development"],
    subcategories: ["unity"],
    date: '03/2022',
    
    briefDescription: ` `,
  },
  {
    id: 507,
    title: "Car Racing Game",
    categories: ["game-development"],
    subcategories: ["unity"],
    date: '03/2021',
    
    briefDescription: ` `,
  },
  {
    id: 508,
    title: "Horizontal Running Game",
    categories: ["game-development"],
    subcategories: ["unity"],
    date: '03/2021',
    
    briefDescription: ` `,
  },
  {
    id: 509,
    title: "Ball Rolling Game",
    categories: ["game-development"],
    subcategories: ["unity"],
    date: '03/2021',
    
    briefDescription: ` `,
  },


  //Others
  {
    id: 1,
    title: "LED-Lights Cube 4x4x4 (Decoration Mood Light)",
    categories: ["core-programming"],
    subcategories: ["arduino", "c++"],
    date: '01/2022',
    
    briefDescription: ` Its a Digital-Logic Design Project, where we used 64 small LED lights to create a 3D Pattern of Light-Cube. \n\t The main complex Part is, each LED is individiually COntrolled by only 16+4=20 Inputs. So, we made amazing patterns with them, which looks very Cool. `,
  },


];

myProjects.sort((a, b) => {
  const [aMonth, aYear] = a.date.split('/');
  const [bMonth, bYear] = b.date.split('/');
  return new Date(`${bYear}-${bMonth}-01`) - new Date(`${aYear}-${aMonth}-01`);
});



(function($) {
  
  const projectsCategories = $('#projectsFilter .tabsPanel section').map(function() {
    const mainCategory = $(this).attr('data-id');
    
    const subcategories = $(this).find('li span').map(function() {
      return $(this).attr('data-id');
    }).get();

    return {
      name: mainCategory,
      subcategories: subcategories
    };
  }).get();

  const selectedSubcategories = {}; //Object
  

  //Render all Projects initially
  for(let category of projectsCategories)
    for(let subcategory of category.subcategories)
      selectedSubcategories[subcategory] = true;
  $("#projectsFilter .tabsPanel .tags span").addClass('active');
  renderMyFilteredProjects();

  
  function createProjectCard(project) {    
    const $projectItem = $('<div>').addClass('timeline-item').attr('data-id',project.id);
    
    const $categoryIcon = $('<div>').addClass('timeline-icon');
    let iconHeight = 20;
    for(let category of project.categories) {
      const $iconImg = $('<img>').attr({
        src: '/assets/images/icons/'+ category + '.png',
        width: '25px',
        alt: ''
      });
      $categoryIcon.append($iconImg);
      iconHeight += 30;
    }
    $categoryIcon.css({"height": iconHeight+"px"});
    

    const $projectContent = $('<div>').addClass('timeline-content');
    const $projectTitle = $('<h2>').text(project.title);
    const $projectDescription = $('<p>').text(project.briefDescription);
    
    const $subcategoryBadges = $('<ul>');
    
    project.subcategories.forEach(function(sub) {
      $subcategoryBadges.append( $('<li>').text(sub) );
    });
    


    let $liveDemo = $('<a>').attr({
      href: project.liveDemo,
      class: 'btn',
      target: '_blank'
    }).text('Live Demo');

    const $projectLink = (project.liveDemo) ? $liveDemo : '';
    
    $projectContent.append($projectTitle, $projectDescription, $subcategoryBadges, $projectLink);
    $projectItem.append($categoryIcon, $projectContent);

    return $projectItem;
  }

  function renderProjects(projects) {
    const $projectsTimeline = $('#timeline');
    $projectsTimeline.text(''); // Clear existing cards
    projects.forEach(project => {
      $projectsTimeline.append(createProjectCard(project));
    });

    if(!projects.length)
      $projectsTimeline.append("No Projects with the selected Filters");
  }

  function renderMyFilteredProjects() {
    updateMainCategoryTags();
  
    const selectedFiltersArray = Object.keys(selectedSubcategories);
    
    const myFilteredProjects = myProjects.filter(project => {
      return project.subcategories.some(subcategory => selectedFiltersArray.includes(subcategory));
    });
    
    renderProjects(myFilteredProjects);
  }

  function updateMainCategoryTags() {
    
    for (let category of projectsCategories) {
      
      let isCategoryFullySelected = category.subcategories.every(subcategory => selectedSubcategories[subcategory]); //whether a Category is fully selected or not
      let isCategorySemiSelected = category.subcategories.some(subcategory => selectedSubcategories[subcategory]);
      
      //Remove any Selection Styles
      $('#projectsFilter .tabs [data-id='+ category.name +']').removeClass('whole-selection');
      $('#projectsFilter .tabs [data-id='+ category.name +']').removeClass('semi-selection');
      
      if(isCategoryFullySelected) {
        $('#projectsFilter .tabs [data-id='+ category.name +']').addClass('whole-selection');
      }
      else if(isCategorySemiSelected) {
        $('#projectsFilter .tabs [data-id='+ category.name +']').addClass('semi-selection');
      }
      else {
        //No Subcategory Selected
      }
    }
  }

  //Open Category Tabs
  $("#projectsFilter .tabs span").click(function(e) {

    //To be able to Know Click-Again Tab
    let isTabOpen = $(e.target).hasClass('active') ? true : false;
    
    //Close all Tabs
    $("#projectsFilter .tabs span").removeClass("active");
    $("#projectsFilter .tabsPanel section").hide();
    
    //Open current Tab
    $(e.target).addClass("active");
    let panelId = $(e.target).attr("data-id");
    const $tabPanel = $("#projectsFilter .tabsPanel section[data-id="+ panelId +"]");
    $tabPanel.show();
    
    //If Click Again on Same Tab, Select/deselect all Subcategories
    if(isTabOpen) {
      let allActive = $tabPanel.find('span').length === $tabPanel.find('span.active').length;
      $tabPanel.find('span').each(function() {
        let subcategory = $(this).attr("data-id");
        if(allActive) {
          $(this).removeClass("active");
          delete selectedSubcategories[subcategory]; //Deselect All
        }
        else {
          $(this).addClass("active");
          selectedSubcategories[subcategory] = true; //Select All
        }
      });

      renderMyFilteredProjects();
    }

  });

  //Select/Deselect Subcategory Tags
  $("#projectsFilter .tabsPanel .tags span").click(function(e) {
    $(e.target).toggleClass("active");
    
    let subcategory = $(e.target).attr("data-id");
    if( $(e.target).hasClass('active') )
      selectedSubcategories[subcategory] = true;
    else
      delete selectedSubcategories[subcategory];

    renderMyFilteredProjects();
  });

  $('body').click(function(e) {
    
    //Close Project-Filter Panels, if clicked Outside    
    if(!$(e.target).closest('#projectsFilter').length && $("#projectsFilter .tabs span").hasClass("active")) {
      $("#projectsFilter .tabs span").removeClass("active");
      $("#projectsFilter .tabsPanel section").hide();
    }

    //Close Project-Details Modal, if clicked Outside    
    else if(!$(e.target).closest('#projectDetailsModal').length && !$(e.target).closest('.timeline-content').length) {
      $('#projectDetailsModal').hide();
      $('.overlay').hide();
      document.body.style.overflow = "auto"; 
    }
  });

  //Open Project-Details Modal 
  $("#timeline .timeline-content").click(function(e) {
    $('#projectDetailsModal').show();
    $('.overlay').show();
    document.body.style.overflow = "hidden";

    let project;
    let projectId = $(e.target).parents('.timeline-item').attr('data-id');
    myProjects.forEach(function(p) {
      if(p.id == projectId)
        project = p;
    });

    let $modal = $('#projectDetailsModal');
    
    let $content = $('<div>').addClass('modalContent');

    let $projectTitle = $('<h2>').text(project.title);
    let $projectDescription = $('<p>').text("The detailed Description of Projects will be addess later..."); //project.detaledDescription

    $content.append($projectTitle, $projectDescription);
    $modal.html($content);

  });

})(jQuery);
