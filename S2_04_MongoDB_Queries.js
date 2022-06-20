db.Restaurants.find().pretty();

db.Restaurants.find({},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1});

db.Restaurants.find({},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0});

db.Restaurants.find({},{"restaurant_id":1, "name":1, "borough":1, "address.zipcode":1, "_id":0});

db.Restaurants.find({borough:"Bronx"});

db.Restaurants.find({borough:"Bronx"}).limit(5);

db.Restaurants.find({borough:"Bronx"}).limit(5).skip(5);

db.Restaurants.find({"grades.score":{$gt:90}}, {"name":1, "_id":0});

db.Restaurants.find({"grades.score":{$gt:80, $lt:100}}, {"name":1, "_id":0});

db.Restaurants.find({"address.coord.0":{$lt:-95.754168}}, {"name":1, "_id":0});

db.Restaurants.find({"cuisine":{$ne:"American"}, "grades.score":{$gt:70}, "address.coord.0":{$lt:-65.754168}}, {"name":1, "_id":0});

db.Restaurants.find({"cuisine":{$ne:"American"}, "borough":{$ne:"Brooklyn"}, "grades.grade":"A"}, {"name":1,"cuisine":1, "_id":0}).sort({"cuisine":-1});

db.Restaurants.find({name:/^Wil/}, {"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0});

db.Restaurants.find({name:/ces$/}, {"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0});

db.Restaurants.find({name:{$regex:".*reg", $options:"i"}}, {"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0});

db.Restaurants.find({$or:[{cuisine:"American "}, {cuisine:"Chinese"}]}, {"name":1, "_id":0});

db.Restaurants.find({"borough":{$in:["Staten Island", "Queens","Bronx", "Brooklyn"]}},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0});

db.Restaurants.find({$and:[{"borough":{$ne:"Staten Island"}}, {"borough":{$ne:"Queens"}},{"borough":{$ne:"Bronx"}}, {"borough":{$ne:"Brooklyn"}}]},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0});

db.Restaurants.find({"grades.score":{$lt:10}},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0});

db.Restaurants.find({$or:[{name:/^Wil/},{$and:[{cuisine:"Seafood"}, {cuisine:{$ne:"American "}}, {cuisine:{$ne:"Chinese"}}]}]},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0});

db.Restaurants.find({"grades":{"date":ISODate("2014-08-11T00:00:00Z"), "grade":"A", "score":11}},{"restaurant_id":1, "name":1, "grades":1, "_id":0});

db.Restaurants.find({"grades.1":{"date":ISODate("2014-08-11T00:00:00Z"), "grade":"A", "score":9}},{"restaurant_id":1, "name":1, "grades":1, "_id":0});

db.Restaurants.find({$and:[{"address.coord.1":{$gt:42}},{"address.coord.1":{$lte:52}}]}, {"restaurant_id":1, "name":1, "address":1 ,"cuisine":1, "_id":0}).pretty();

db.Restaurants.find().sort({"name":1}).pretty();

db.Restaurants.find().sort({"name":-1}).pretty();

db.Restaurants.find().sort({"cuisine":1, "borough":-1}).pretty();

db.Restaurants.find({"address.street":{$exists:false}}).pretty();

db.Restaurants.find({"address.coord":{$type:1}}).pretty();

db.Restaurants.find({"grades.score":{$mod:[7,0]}}, {"restaurant_id":1, "name":1, "grades":1, "_id":0}).pretty();

db.Restaurants.find({name:/mon/}, {"restaurant_id":1, "name":1, "borough":1,"address.coord":1 ,"cuisine":1, "_id":0}).pretty();

db.Restaurants.find({name:/^Mad/}, {"restaurant_id":1, "name":1, "borough":1,"address.coord":1 ,"cuisine":1, "_id":0}).pretty();


