```javascript
// Correct usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne( { _id: ObjectId('...') }, { $inc: { count: 1 } } );
```