export const projects = [
    {
        'title': 'Casualist',
        'screenshot': '/images/casualist.png',
        'desc': 'Casualist is an application for quickly and easily creating dynamic and collaborative checklists. The target user includes anyone who has ever found themselves sorting through long email/text threads when creating a task list for planning an event, a trip, a shopping list, etc. The goal was to provide a more immediately shareable and feature-rich alternative to text/email chains but is more accessible and simpler to navigate than project management sites like Trello. The value proposition is that a user can simply submit a title on the landing page to generate a new list that will be assigned a unique URL path. Users can then share this URL with any collaborators they want to view or edit the list. No sign-up or login is needed, no wasted time.',
        'links': [
            {   
                'name': 'Live App',
                'url':'https://casualist.vercel.app/'     
            },
            {   
                'name': 'Client Repo',
                'url':'https://github.com/joedickey/casualist'     
            },
            {   
                'name': 'API Repo',
                'url':'https://github.com/joedickey/casualist-api'     
            },  
        ],
        'tech': ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'PostgreSQL' ]
    },
    {
        'title': 'TR-BOT',
        'screenshot': '/images/trbot.png',
        'desc': "The TR-BOT is a drum machine application that allows a user to create and save musical percussion tracks in their browser. The TR-BOT's name is inspired by the iconic line of Roland's hardware drum machines (i.e. TR-808, TR-909, TR-606), and by default, the app supplies 6 individual drum sounds. This project was motivated by my love of electronic music production and I hope it provides a tool that can stir creativity in users of all musical skill levels.",
        'links': [
            {   
                'name': 'Live App',
                'url':'https://tr-bot-project.vercel.app/'     
            },
            {   
                'name': 'Client Repo',
                'url':'https://github.com/joedickey/tr-bot'     
            },
            {   
                'name': 'API Repo',
                'url':'https://github.com/joedickey/tr-bot-api'     
            },   
        ],
        'tech': ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'PostgreSQL' , 'Tone.js' ]
    },
    {
        'title': 'Movies from Best to Worst',
        'screenshot': '/images/movies.png',
        'desc': "This web app returns a list of an actor's filmography ranked from best to worst (based on TMDb's API user ratings) when searched for by name. Each result provides a summary and genre listing for the film along with the film's poster image. Additionally, the title and poster image are clickable links to the film's page on the TMDb website. The target user is anyone who loves movies and the project was prompted by my interest in discovering the best work of my favorite actors.",
        'links': [
            {   
                'name': 'Live App',
                'url':'https://joedickey.github.io/movies-from-best-to-worst/'     
            },
            {   
                'name': 'Client Repo',
                'url':'https://github.com/joedickey/movies-from-best-to-worst'     
            },
        ],
        'tech': ['JavaScript', 'HTML', 'CSS', 'jQuery', 'API Integration' ]
    },
]