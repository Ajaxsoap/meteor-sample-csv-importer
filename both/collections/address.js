Address = new Mongo.Collection('address');

Address.helpers({

});

Address.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
