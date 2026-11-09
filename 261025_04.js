// CR -> UD

// $in : 특정 키 안에 단일값, 배열의 자료형태 => [a, b] 
// $nin
// $and
// $or
// $not
// $nor
// $eq
// $ne
// $regex
// $exists
// $all : 배열 필드가 주어진 모든 값을 포함하는 문서 조회!
// $set
// $inc : 증가 <> $dec : x
// $unset : 특정 필드 제거
// upsert : update + insert
// $push : 배열 형태의 자료값에 값이 신규로 추가
// $pull : 배열 형태의 자료값에 값을 제거

db.users02.find()

// updateMany({update_filter}, {update_action})
db.users02.updateMany(
  {age: {$gt: 25}}, {$set: {address: "서울시"}}
)

db.users02.updateMany(
  {address: {$eq: "서울시"}}, {$inc: {age: 3}}
)

db.users02.updateMany(
  {address: {$eq: "서울시"}}, {$inc: {age: -3}}
)

db.users02.find()

db.users02.updateOne(
  {name: {$eq: "유진"}}, {$set: {age: 26}}
)

db.users02.updateOne(
  {name: {$eq: "동현"}},
  {$set: {name: "도윤", age: 29, hobbies: ["런닝", "영화", "음악"]}}
)

db.users02.updateMany(
  {name: {$eq: "유진"}},
  {$unset: {age: 1}}
)

db.users02.find()

// 일단 update를 해! 그런데, 만약 없으면 insert
// update + insert = upsert
db.users02.updateOne(
  {name: {$eq:"민준"}},
  {$set: {name: "도민준", age: 22, hobbies: ["음악","여행"]}},
  {upsert: true}
)

db.users02.updateOne(
  {name: {$eq: "유진"}},
  {$push: {hobbies: "운동"}}
)

db.users02.updateOne(
  {name: {$eq: "유진"}},
  {$pull: {hobbies: "운동"}}
)

db.users02.find()

