/* ----SQL기본정보--------------------- */

/* 데이터보기 */
USE world; 
SHOW TABLES;
DESC city;
DESC country;
DESC countrylanguage;
SELECT * FROM city;
SELECT * FROM country;
SELECT * FROM countrylanguage; 

/* 기본문법순서 */
SELECT 필드명
FROM 테이블
JOIN 테이블
ON 조인조건
WHERE 조건
ORDER BY 필드명 DESC내림차순 ASC또는생략 오름차순
GROUP BY 필드명
HAVING 그룹조건
LIMIT 숫자
OFFSET 숫자 

/* ------------------------- */



테이블 생성 하는 법
/* 방법1 */
/* [ ] 값은 옵션 ,낫널은 공백을 허용하지 않는다는 뜻 */
create table 새로만들테이블명 (
   1번째 필드명 데이터타입 [not null] [KEY] [DEFAULT 디폴트해당값] [Extra],   
   2번째 필드명 데이터타입 [not null] [KEY] [DEFAULT 디폴트해당값] [Extra], 
   ...
   필드명 데이터타입 [not null] [KEY] [DEFAULT 디폴트해당값] [Extra]
) [Extra];  
/* 방법2 */
/* 데이터베이스.새로만들테이블명 */
/* 아래로 데이터베이스 gis를만들고 */
CREATE DATABASE gis
USE gis; 
SHOW TABLES;
/* gis안에 test 라는 테이블을 만든다 */
CREATE DATABASE gis.test(
	id INT PRIMARY KEY  AUTO_INCREMENT,
	NAME VARCHAR(10)
) AUTO_INCREMENT=100;


/* 야구단선수목록 크리에이트 */
/* 테이블의 밸류가 아닌 구조를 생성한다 */
create TABLE tigers (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	player VARCHAR(10) NOT null,
	backNo INT,  /* 낫널이 없다 이건 공백을 허용 */
	POSITION VARCHAR(10) /* 바차는 배리어블캐릭터 - 가변적인(스트링)데이터라는뜻 */
) /* 스트링데이터타입종류 : 차,바차,blob */
/* 확인 */
DESC tigers;

/* 만든구조에 밸류 넣기 */
id값은 자동으로 디폴트값 들어감

INSERT INTO tigers 
VALUES   (DEFAULT, "양현종", 54, "투수");
SELECT * FROM tigers;

INSERT INTO tigers (player,backno,POSITION)
VALUES   ("양현종", "54" , "투수");
SELECT * FROM tigers;

INSERT INTO tigers (player,backno,POSITION)
VALUES   ("양현종", "54" , "투수"),
("양현종2", "54" , "투수"),
("양현종3", "54" , "투수"),
("양현종4", "54" , "투수"),
("양현종5", "54" , "투수");
SELECT * FROM tigers;




/* drop table */
테이블을 삭제하려면 다음을 수행하십시오.
drop table 테이블명;

/* delete from */
테이블의 모든 행을 삭제하려면 다음을 수행하십시오.
delete from 테이블명;

/* 테이블의 모든 데이터 삭제 */
truncate table 테이블명;

/* 테이블 명 변경 */
rename table 테이블명 to 변경할테이블명;








/* 얼터테이블 */
/* 테이블 구조 변경 */

alter table  
   ADD 칼럼추가
   DROP 칼럼삭제
   MODIFY 칼럼순서바꾸기
   CHANGE 칼럼명변경, 칼럼자료형변경
   

▲ 컬럼 추가
alter table [테이블 명] add [컬럼명] 자료형; /* # 맨 뒤에 추가 */
alter table [테이블 명] add [컬럼명] 자료형 first; /* # 맨 앞에 추가 */
alter table [테이블 명] add [컬럼명] 자료형 after [앞 컬럼명]; /* 지정 컬럼 뒤에 추가 */
 ex)  alter table TIGERS add number INT; /* number칼럼(필드)추가 */
/* alter table address_table add gender char(2) not null; # 남/여 */

▲ 컬럼 삭제
alter table [테이블 명] drop [컬럼명];
   alter table TIGERS drop number; 

▲ 컬럼 순서 바꾸기
alter table [테이블 명] modify [컬럼명] 자료형 first; /* 해당칼럼을 맨 왼쪽으로 이동 */
alter table [테이블 명] modify [컬럼명] 자료형 after [앞 컬럼명]; /* 앞칼럼명의 뒤로 이동 */
ex)alter TABLE tigers2   modify POSITION VARCHAR(10) first;
   SELECT * FROM tigers2;
   /* alter table address_book modify gender char(2) not null after name; */

▲ 컬럼명 변경, 컬럼 자료형 변경
alter table [테이블 명] change [기존 컬럼명] [새 컬럼명] 자료형;
   ex) alter table tigers2 change NUMBER `new number` int; /* 넘버를 뉴넘버로 */
alter table [테이블 명] change [컬럼명] [컬럼명] 새 자료형; 
   /* 칼럼명을 똑같이 넣어서 자료형만 바꾸는 작업 */
/* alter table address_book change no aid  int(8);
alter table address_book change aid aid int(4) unsigned auto_increment; */
숫자의 속성 (숫자속성int varchar뒤에 띄어쓰기로 추가작성)
   unsigned 숫자가 양수값일 때 양수 최대치를 늘리기 위한 작업
   mysql은 자동으로 unsigned 속성을 추가한다 좌측부터0을채우려면양수로만값이입력되어야하기때문
   auto_increment 자동으로 숫자가 증가
INT(숫자) 괄호안의 값은 값의 자릿수를 의미한다
INT      디폴트는 11이기 때문에  int(11)과 같다









/*  */
/*  */
데이터베이스 생성

문법
CREATE DATABASE 데이터베이스이름

CREATE DATABASE gis
USE gis; 
SHOW TABLES;







뷰생성





USE world;
CREATE VIEW largeCity2 
 	as SELECT * FROM city
		WHERE population >=7000000 WITH CHECK option;
      /* WITH CHECK option설명 : https://pongshowng.tistory.com/9  */

update largecity set countrycode="GBR" where id=206;
SELECT * FROM largecity;

SELECT * FROM city where id=206;




/* 6. View */
CREATE VIEW largeCity 
	as SELECT * FROM city 
		WHERE population>=7000000 WITH CHECK OPTION;
UPDATE largecity SET countrycode='GBR' WHERE id=206;
SELECT * FROM city WHERE id=206;
# 아래의 SQL문은 with check option 위배로 에러 발생
UPDATE largecity SET population=5000000 WHERE id=206;

















create table 새로만들테이블명 (
   1번째 필드명 데이터타입 [not null] [KEY] [DEFAULT 디폴트해당값] [Extra],   
   2번째 필드명 데이터타입 [not null] [KEY] [DEFAULT 디폴트해당값] [Extra], 
   ...
   필드명 데이터타입 [not null] [KEY] [DEFAULT 디폴트해당값] [Extra]
) [Extra];  
create table dateTable ~~~생성 id랑 dt

create table dateTable (
   id int auto_increment,
   dt DATEtime CURRENT_TIMESTAMP
)
