use userdb

db.createCollection("users")

db.users.insertOne(
  {subject: "coding", author: "david", views: 50}
)

//db.getCollection("users").find({})

// find() : 입력한 값 조회
db.users.find()

db.users.insertMany(
  [
    {subject: "coffee", author: "xyz", views: 50},
    {subject: "coffee shopping", author: "efg", views: 5},
    {subject: "baking a cake", author: "abc", views: 90},
    {subject: "baking", author: "xyz", views: 100},
    {subject: "cafe brunch", author: "abc", views: 200},
    {subject: "coffee menual", author: "jkl", views: 80},
    {subject: "coffee and cream", author: "efg", views: 10},
    {subject: "cafe latte", author: "xyz", views: 10},
    {subject: "coffees", author: "xyz", views: 10},
    {subject: "coffee1", author: "xyz", views: 10}
  ]
)

db.users.find()

db.createCollection("users02", {
  capped: true, size: 5242880, max: 5000
})

db.users02.insertMany(
  [
    {name: "David", age: 45, address: "서울시"},
    {name: "Dave", age: 25, address: "경기도"},
    {name: "Andy", age: 50, hobby: "골프", address: "경기도"},
    {name: "Kate", age: 35, address: "수원시"},
    {name: "Brown", age: 8},
  ]
)

// 1) 데이터 조회하기 = SELECT * FROM users02
db.users02.find({})
db.users02.find()
// 인자값 2개 => (조건, 출력필드)

// 2) 데이터 조회하기 = SELECT _id, name, address FROM users
db.users02.find({}, {_id: 1, name: 1, address: 1})
db.users02.find({}, {name: 1, address: 1})

// 3) 데이터 조회하기 = SELECT name, address FROM users
db.users02.find({}, {_id: 0, name: 1, address: 1})

// 4) 데이터 조회하기 = SELECT name, address FROM users WHERE address = "서울시"
// find(조건 기준 = query criteria, 출력 대상, 투사 = projection)
db.users02.find({address: "서울시"}, {_id: 0, name: 1, address: 1})

db.users02.find(
  {name: "Dave"},
  {name: 1, age: 1}
)

db.users02.find(
  {name: "Kate"},
  {name: 1, age: 1, _id: 0}
)

/*
비교 및 조건 연산자
>= (x)
$gt : 초과
$gte : 이상
$le : 미만
$lte : 이하
$eq : 같음
$ne : 다름 <> !=
*/

db.users02.find()

db.users02.find(
  {age: {$gt: 25}}
)

db.users02.find(
  {age: {$lt: 25}}
)

/*
논리연산자 = and, or
*/

// 조건 연산자를 사용할 때에는 동일한 연산을 중복해서 사용 x
// 만약 동일 연산자를 중복해서 사용한다면, 마지막번째 사용된 연산자를 채택
db.users02.find(
  {age: {$lt: 25, $lte: 50}}
)

db.users02.find(
  {age: {$lt: 25, $lt: 50}}
)
// 문맥상 오류!

db.users02.find(
  { age: 
    { 
      $in: [45, 50]
    }
  }
)

db.users02.find({
    $or: [
    {age: {$eq: 45}},
    {age: {$eq: 50}}
  ]
})

// WHERE age NOT IN (25)
db.users02.find(
  {age: {$nin: [25]}}
)

// $ne = not equal = !=, <>
db.users02.find(
  {age: {$ne: 25}}
)

db.users02.find(
  {age: {$ne: 25, $ne: 45}}
)
// 문맥상 오류!

db.users02.find(
  {age: {$nin: [25, 45]}}
)


db.users02.find(
  {age: {$eq: 50}, address: "경기도"},
  {name: 1, _id: 0}
)

db.users02.find(
  {
    $and:[
      {address: "서울시"},
      {age: 45}
    ]
  }
)

db.users02.find(
  {address: "서울시", age: 45}
)

// $in
// $nin
// $and
// $or
// $not
// $nor

// $eq => 같다 라는 것을 의미하기 위한 구문
db.users02.find(
  {age: {$eq: 45}}
)

db.users02.find(
  {age: {$not: {$eq: 45}}}
)

// 배열 안에 있는 모든 조건이 거짓일 때에만 조회
db.users02.find(
  {
    $nor: [
      {address: "경기도"},
      {age: {$eq: 45}}
    ]
  }
)

db.users02.find(
  {
    $or: [
      {name: {$eq: "Brown"}},
      {age: {$eq: 35}}
    ]
  }
)

// 정규표현식 활용하는 방법
db.users02.find(
  {
    name: 
      {$eq: "Brown"}
  }
)

db.users02.find(
  {
    name: "Brown"
  }
)

// regex : regular expression = 정규표현식
// 데이터를 다루는 이상, 끝나는 날까지 정규표현식 벗어나지 못할 것이다.
db.users02.find(
  {
    name: 
      {$regex: /own/}
  }
)

db.users02.find(
  {
    name: 
      {$regex: /^Da/}
  }
)

db.users02.find(
  {
    name: 
      {$regex: /id$/}
  }
)

// 정규표현식 연산 축약 표기법
db.users02.find(
  {
    name: /own/
  }
)









