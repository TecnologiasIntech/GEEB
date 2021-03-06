geebSoft
  .config(function ($stateProvider, $urlRouterProvider) {
    //Con urlRouteProvider declaras la ruta por defecto del ui-view o
    //te redigige aqui cuando escriben una ruta invalida
    //$urlRouterProvider.otherwise("/pages/home/home-vistos");
    $urlRouterProvider.otherwise("/login");

    //En cada state declaras las diferentes rutas con sus vistas correspondientes, tambien
    //puedes declarar sus controladores, por ejemplo "controller: 'CtrlPrueba as vm' "
    $stateProvider

      .state('agregarMaestro', {
        url: '/agregarMaestro',
        templateUrl: 'views/agregarMaestro.html',
        controller: 'agregarMaestroCtrl as vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'loginCtrl as vm'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'registerCtrl as vm'
      })
      .state('resetPassword', {
        url: '/resetPassword',
        templateUrl: 'views/resetPassword.html',
        controller: 'loginCtrl as vm'
      })
      .state('maestrosBuscar', {
        url: '/maestros/:buscarMaestro',
        templateUrl: 'views/maestros.html',
        controller: 'buscarMaestroCtrl as vm'
      })
      .state('maestros', {
        url: '/maestros',
        templateUrl: 'views/maestros.html',
        controller: 'buscarMaestroCtrl as vm'
      })
      .state('materias', {
        url: '/materias',
        templateUrl: 'views/materias.html'
      })
      .state('sugerencias', {
        url: '/sugerencias',
        templateUrl: 'views/sugerencias.html'
      })
      .state('preHorarios', {
        url: '/preHorarios',
        templateUrl: 'views/preHorarios.html'
      })

      .state('sistemas', {
        url: '/sistemas',
        templateUrl: 'views/PreHorarios/sistemas.html'
      })
      .state('electrica', {
        url: '/electrica',
        templateUrl: 'views/PreHorarios/electrica.html'
      })
      .state('electronica', {
        url: '/electronica',
        templateUrl: 'views/PreHorarios/electronica.html'
      })
      .state('mecanica', {
        url: '/mecanica',
        templateUrl: 'views/PreHorarios/mecanica.html'
      })
      .state('mecatronica', {
        url: '/mecatronica',
        templateUrl: 'views/PreHorarios/mecatronica.html'
      })
      .state('administracion', {
        url: '/administracion',
        templateUrl: 'views/PreHorarios/administracion.html'
      })
      .state('gestion', {
        url: '/gestion',
        templateUrl: 'views/PreHorarios/gestion.html'
      })
      .state('informatica', {
        url: '/informatica',
        templateUrl: 'views/PreHorarios/informatica.html'
      })
      .state('industrial', {
        url: '/industrial',
        templateUrl: 'views/PreHorarios/industrial.html'
      })
      .state('biomedica', {
        url: '/biomedica',
        templateUrl: 'views/PreHorarios/biomedica.html'
      })

      .state('pages', {
        url: '/pages',
        templateUrl: 'views/common.html'
      })
      //Profile

      .state('pages.profile', {
        url: '/profile',
        templateUrl: 'views/profile.html'
      })

      .state('pages.profile.profile-comentarios', {
        url: '/profile-comentarios',
        templateUrl: 'views/profile-comentarios.html',
        controller: 'perfilMaestroCtrl as vm'
      })

      .state('pages.profile.profile-preguntas', {
        url: '/profile-preguntas',
        templateUrl: 'views/profile-preguntas.html',
        controller: 'perfilMaestroCtrl as vm'
      })

      .state('pages.home', {
        url: '/home',
        templateUrl: 'views/home.html'
      })

      .state('pages.home.home-vistos', {
        url: '/home-vistos',
        templateUrl: 'views/home-vistos.html'
      })

      .state('pages.home.home-comentados', {
        url: '/home-comentados',
        templateUrl: 'views/home-comentados.html'
      })
      .state('pages.home.home-valorados', {
        url: '/home-valorados',
        templateUrl: 'views/home-valorados.html'
      })

      //-------------------------------

      .state('pages.listview', {
        url: '/listview',
        templateUrl: 'views/list-view.html'
      })

      .state('pages.messages', {
        url: '/messages',
        templateUrl: 'views/messages.html'
      })

      // .state ('pages.pricing-table', {
      //     url: '/pricing-table',
      //     templateUrl: 'views/pricing-table.html'
      // })

      .state('pages.contacts', {
        url: '/contacts',
        templateUrl: 'views/contacts.html'
      })

      // .state ('pages.invoice', {
      //     url: '/invoice',
      //     templateUrl: 'views/invoice.html'
      // })

      .state('pages.wall', {
        url: '/wall',
        templateUrl: 'views/wall.html'
      })

    var config = {
      apiKey: "AIzaSyC7ONGr_pbrC8ka-8v5a2-SNRkYP5ATU1k",
      authDomain: "geeb-e2f11.firebaseapp.com",
      databaseURL: "https://geeb-e2f11.firebaseio.com",
      storageBucket: "geeb-e2f11.appspot.com",
      messagingSenderId: "945237774250"
    };
    firebase.initializeApp(config);
  });
