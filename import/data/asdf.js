
db.seoMetadaten.findOneAndUpdate({    
  "standort" : ObjectId("59fb20f7642e7903d07ec80c"),
  "url":"alufelgen"
  },{
    $set:{
       "standort": ObjectId("59fb20f7642e7903d07ec80c"),
       "url": "alufelgen",
       "description": "",
       "title": "",
       "block-6": null,
       "block-5": null,
       "block-4": null,
       "block-3": null,
       "block-2": null,
       "block-1": null,
       "einleitung": "",
       "robots": "index,follow"
    }}, {upsert: true, new: true}
  )
