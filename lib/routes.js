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
        FlowRouter.go('Login');
        //     // BlazeLayout.render('applicationLayout', { main: 'Login' });
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

//
FlowRouter.route( '/db', {
  action: function() {

    if (Meteor.userId()) {
               BlazeLayout.render( 'applicationLayout', { top: 'Header', main: 'db', bottom: 'Footer' } );
           } else {
               FlowRouter.go('Error404');
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
               FlowRouter.go('Error404');
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
               FlowRouter.go('Error404');
           }
  },
  name: 'Profile',
  title: 'Mans profils'
});

FlowRouter.route( '/edit', {
  action: function() {

    if (Meteor.userId()) {
            BlazeLayout.render( 'applicationLayout', { main: 'Edit' });
               // BlazeLayout.render( 'applicationLayout', { top: 'Header', main: 'Edit', bottom: 'Footer' } );
           } else {
               FlowRouter.go('Error404');
           }
  },
  name: 'Edit',
  title: 'Rediģēt profilu'
});
