// Delete 문법

db.users02.deletsMany(
    {address: {$eq: "서울시"}}
)

db.users02.find()

db.users02.deleteOne(
    {name: {$eq: "유진"}}
)