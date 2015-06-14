if(Meteor.isClient) {
  Meta.config({
      options: {
        // Meteor.settings[Meteor.settings.environment].public.meta.title
        title: 'CSV Importer',
        suffix: 'CSV Importer'
      }
  });
}
