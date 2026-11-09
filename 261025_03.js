// find() : 어떤 값을 조회
// sort() : 조회해온 값을 정렬
// 정렬의 조건값 : 1 => 오름차순 정렬 (기본값)
// -1 => 내림차순 정렬

db.users02.find(
  {address: {$eq: "경기도"}}
).sort(
  {age: -1}
)

// SELECT * FROM users02;
// SELECT COUNT(*) FROM users02;
db.users02.find().count()

// find() : 5개 조회 => count() 
db.users02.find().count({address: {$exists: true}}) // 문맥상 오류

// 축약된문법
db.users02.count({address: {$exists: true}})
db.users02.count({address: {$exists: false}})

// 정석적인문법
db.users02.find(
  {address: {$exists: true}}
).count()

db.users02.find(
  {address: {$exists: false}}
).count()

db.users02.find()

// 중복된 값을 1번씩만 조회.처리 != SELECT // DISTINCT
db.users02.distinct("address")

// SELECT * FROM movie LIMIT 2;
db.users02.find().limit(2)

db.users02.find()

db.users02.insertMany([
  {name: "유진", age: 25, hobbies: ["독서", "영화", "요리"]},
  {name: "동현", age: 30, hobbies: ["축구", "음악", "영화"]},
  {name: "혜진", age: 35, hobbies: ["요리", "여행", "독서"]}
])

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

db.users02.find(
  {
    hobbies: {
      $all: ["축구", "음악"]
    }
  }
)

// $nin <> $all
db.users02.find(
  {
    hobbies: {
      $nin: ["축구", "요리"]
    }
  }
)







