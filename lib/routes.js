// BlazeLayout.setRoot('#applicationLayout');

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'Error404' } );
  },
  name: 'Error404',
  title: 'Something goes wrong...'
};
//
FlowRouter.route( '/', {
  action: function() {

    if (Meteor.userId()) {
        BlazeLayout.render( 'applicationLayout', { top: 'Header', main: 'Home', bottom: 'Footer' } );

        } else {
        FlowRouter.go('Register');
        }
  },
  name: 'Home',
  title: 'KVE Project | Home'
});

FlowRouter.route( '/login', {
  action: function() {
    if (Meteor.userId()) {
            FlowRouter.go('Home');
        } else {
            BlazeLayout.render('applicationLayout', { main: 'Login' });
            FlowRouter.go('Login');
        }
  },
  name: 'Login',
  title: 'Login'
});

FlowRouter.route( '/db/:id', {
  action: function() {

    if (Meteor.userId()) {
               BlazeLayout.render( 'applicationLayout', { top: 'Header', main: 'db', bottom: 'Footer' } );
           } else {
               FlowRouter.go('Register');
           }
  },
  name: 'Database',
  title: 'Database'
});

FlowRouter.route( '/overview', {
  action: function() {
    if (Meteor.userId()) {
               BlazeLayout.render( 'applicationLayout', { top: 'Header', main: 'Overview', bottom: 'Footer'} );
           } else {
               FlowRouter.go('Register');
           }
  },
  name: 'Overview',
  title: 'KVE Project | Overview'
});

FlowRouter.route( '/profile', {
  action: function() {

    if (Meteor.userId()) {
               BlazeLayout.render( 'applicationLayout', { top: 'Header', main: 'Profile', bottom: 'Footer' } );
           } else {
               FlowRouter.go('Register');
           }
  },
  name: 'Profile',
  title: 'Mans profils'
});

FlowRouter.route( '/edit', {
  action: function() {

    if (Meteor.userId()) {
            //BlazeLayout.render( 'applicationLayout', { main: 'Edit' });
               BlazeLayout.render( 'applicationLayout', { top: 'Header', main: 'Edit', bottom: 'Footer' } );
           } else {
               FlowRouter.go('Register');
           }
  },
  name: 'Edit',
  title: 'Rediģēt profilu'
});

FlowRouter.route( '/dblist', {
  action: function() {

    if (Meteor.userId()) {
        BlazeLayout.render( 'applicationLayout', { top: 'Header', main: 'DBList', bottom: 'Footer' } );

        } else {
        FlowRouter.go('Register');
        }
  },
  name: 'DBList',
  title: 'Pārskatīt darba pārskatus'
});

FlowRouter.route( '/editdb/:id', {
  action: function() {

    if (Meteor.userId()) {
        BlazeLayout.render( 'applicationLayout', { top: 'Header', main: 'Editdb', bottom: 'Footer' } );

        } else {
        FlowRouter.go('Register');
        }
  },
  name: 'Editdb',
  title: 'Labot darba pārskatus'
});

FlowRouter.route( '/register', {
  action: function() {
    BlazeLayout.render('applicationLayout', { main: 'Register' });
    FlowRouter.go('Register');
  },
  name: 'Register',
  title: 'Register'
});
//
