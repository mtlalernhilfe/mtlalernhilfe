
db.seoMetadaten.update({standort: ObjectId("5989b5e430043a9d9f908f0a")}, {$unset: {canonical:1, robots:1}} , {multi: true});
