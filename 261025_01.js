// 특정 컬렉션 데이터 조회 문법
// db.getCollection("test01").find({})

// 로컬컴퓨터 내 생성된 모든 db목록 조회
show dbs

// 특정 디비 선택 시 사용가능 (단, 디비 생성 전에도 사용가능)
use megacoding

// 디비 선택 후 해당 디비 내 생성된 컬렉션 조회 
show collections

use megastudy_261025
show collections

// collection 내부 문법
db.test01.find()

// DESC, 디비 상세정보 조회
db.stats()

// GUI vs CLI
db.dropDatabase()

db.test01.drop()

use megastudy_261025

db.createCollection("test01") // 컬렉션 옵션 설정 x

// 모든 프로그래밍 언어학습 방법 : CRUD 4가지 기본 필수 기능 우선 학습
// 1) GUI > 디비, 컬렉션 생성 & 제거
// 2) CLI > 컬렉션 생성 및 삭제 > 디비 생성 & 삭제 가능
// 3) CLI > 디비 생성 = 컬렉션 생성

use newdb_test

// 해당 컬렉션이 처리할 수 있는 메모리 크기 : 5mb
// bit, byte
// 비트 2개 = 1바이트 * 1000 1키로바이트 * 1000 1메가바이트
// 5 * 2^10 * 2^10

db.createCollection("log", {
  capped: true, size: 5242880, max: 5000
})

show collections

db.log.isCapped()

// 생성된 컬렉션 이름 변경
db.log.renameCollection("test01")

// json => binary(2진수) json => BSON => true 1 // false 0

// 몽고디비 사용가능한 데이터 타입
// Integer, String, Double, Boolean, Arrays, Object, Null, Date, ObjectId






