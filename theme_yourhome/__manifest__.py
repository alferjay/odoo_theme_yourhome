{
    'name': 'YourHome Theme',
    'description': 'YourHome website theme',
    'category': 'Theme',
    'sequence': 10,
    'version': '1.0',
    'depends': ['website'],
    'data': [
        'views/header.xml',
        'views/footer.xml',
        'views/homepage.xml',
        'views/services_page.xml',
        'views/menus.xml',
    ],
    'assets':{
        'web.assets_frontend': [
            'theme_yourhome/static/src/scss/styles.scss'
        ],
        'web._assets_primary_variables': [
            "theme_yourhome/static/src/scss/primary_variables.scss",
        ]
    },
    'images': [
    ],
    'snippet_lists': {
    },
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}
