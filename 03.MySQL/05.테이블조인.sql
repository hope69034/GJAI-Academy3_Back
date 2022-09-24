


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










조인
조인
조인
조인
조인


/* 나 */

■ 테이블 생성
CREATE TABLE girl_group (
   gid INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(32) NOT NULL,
   debut DATE NOT NULL,
   hit_song_id INT
) AUTO_INCREMENT=1001;

CREATE TABLE song (
   sid INT PRIMARY KEY AUTO_INCREMENT,
   title VARCHAR(32) NOT NULL,
   lyrics VARCHAR(32)
) AUTO_INCREMENT=101; /* 아이디가 101부터 102 이렇게 생성 */

■ 데이터 삽입
INSERT INTO song (title, lyrics)
	VALUES ('Tell Me', 'tell me tell me tetetete tel me'),
	('Gee', 'GEE GEE GEE GEE GEE BABY BABY'),
	('미스터', '이름이 뭐야 미스터'),
	('Abracadabra', '이러다 미쳐 내가 여리여리'),
	('8282', 'Give me a call Baby baby'), ('기대해', '기대해'),
	("I Don't care", '다른 여자들의 다리를'),
	('Bad Girl Good Girl', '앞에선 한 마디 말도'), ('피노키오', '뉴예삐오'),
	('별빛달빛', '너는 내 별빛 내 마음의 별빛'),
	('A', 'A 워오우 워오우워 우우우'),
	('나혼자', '나 혼자 밥을 먹고 나 혼자 영화 보고'), ('LUV', '설레이나요 '),
	('짧은치마', '짧은 치마를 입고 내가 길을 걸으면'),
	('위아래', '위 아래 위위 아래'), ('Dumb Dumb', '너 땜에 하루종일');




SELECT * FROM song;


INSERT INTO girl_group (name, debut, hit_song_id)
   VALUES
   ('원더걸스'     , '2007-02-10',101),
   ('소녀시대'     , '2007-08-02',102),
   ('카라'       , '2009-07-30',103),
   ('브라운아이드걸스' , '2008-01-17',104),
   ('다비치'      , '2009-02-27',105),
   ('2NE1'     , '2009-07-08',106),
   ('f(x)'     , '2011-04-20',107),
   ('시크릿'      , '2011-01-06',108),
   ('레인보우'     , '2010-08-12',109),
   ('애프터 스쿨'   , '2009-11-25',110),
   ('포미닛'      , '2009-08-28',111);


SELECT * FROM girl_group;


SELECT COUNT(*) FROM song ;
SELECT COUNT(*) FROM girl_group;



/* song의 sid와  girl_group의 hit_song_id로 이너조인 */
 
SELECT song.title, song.lyrics, girl_group.name, girl_group.debut 
FROM song  /* 이게 왼쪽 */
INNER JOIN girl_group /* 이게오른쪽 */
ON song.sid = girl_group.hit_song_id;

테이블의데이터넣기 -행의밸류들
INSERT INTO song 
VALUES   (DEFAULT, "뉴송", "송송송" );
SELECT * FROM song;

테이블의데이터비우기
truncate table song;
truncate table girl_group

/* left outer join */
/* 왼쪽데이터값은 전부 나오게하겟다 */

SELECT song.title, song.lyrics, girl_group.name, girl_group.debut 
FROM song  /* 이게 오른 */
left outer join girl_group /* 이게왼쪽이고 전부나온다 널이 잇느행도나온다 */
ON song.sid = girl_group.hit_song_id;
/* left를 라이트로 바꾸면 오른쪽으로간다 널이 잇느행도나온다 */


/* 연습문제 */
데뷔일자가빠른탑5개걸그룹의히트송은?
그룹명이랑 곡명 셀렉
select girl_group.name, song.title, girl_group.debut
from song
join girl_group
on  song.sid = girl_group.hit_song_id
order by  girl_group.debut asc
limit 5;


2007년에 데뷔한 그룹은?
select NAME, debut
from girl_group
where debut>=date("2007-00-00") AND debut< date("2008-00-00")
  /*  where debut between "2007-00-00" and  "2007-12-31"  */


2009년 데뷔한 걸그룹의 히트송은?
select song.title , girl_group.NAME, girl_group.debut
from girl_group
join song
ON  song.sid  = girl_group.hit_song_id
/* sid = hit_song_id 도 가능 */
where girl_group.debut between date("2009-00-00") and  date("2010-00-00") 
ORDER BY debut
/* where debut>=date("2009-00-00") AND debut< date("2010-00-00") */








/* 선생님조인 */
/*
 * Table join
 */
# girl_group table
CREATE TABLE girl_group ( 
	gid INT PRIMARY KEY AUTO_INCREMENT, 
	name VARCHAR(32) NOT NULL, 
	debut DATE NOT NULL, 
	hit_song_id INT 
) AUTO_INCREMENT=1001;
# song table
CREATE TABLE song ( 
	sid INT PRIMARY KEY AUTO_INCREMENT, 
	title VARCHAR(32) NOT NULL, 
	lyrics VARCHAR(32) 
) AUTO_INCREMENT=101;

INSERT INTO song (title, lyrics) 
	VALUES ('Tell Me', 'tell me tell me tetetete tel me'),
	('Gee', 'GEE GEE GEE GEE GEE BABY BABY'),
	('미스터', '이름이 뭐야 미스터'), 
	('Abracadabra', '이러다 미쳐 내가 여리여리'),
	('8282', 'Give me a call Baby baby'), ('기대해', '기대해'),
	("I Don't care", '다른 여자들의 다리를'), 
	('Bad Girl Good Girl', '앞에선 한 마디 말도'), ('피노키오', '뉴예삐오'),
	('별빛달빛', '너는 내 별빛 내 마음의 별빛'), 
	('A', 'A 워오우 워오우워 우우우'),
	('나혼자', '나 혼자 밥을 먹고 나 혼자 영화 보고'), ('LUV', '설레이나요 '),
	('짧은치마', '짧은 치마를 입고 내가 길을 걸으면'),
	('위아래', '위 아래 위위 아래'), ('Dumb Dumb', '너 땜에 하루종일');

INSERT INTO girl_group (name, debut, hit_song_id) 
	VALUES ('원더걸스', '2007-02-10', 101),
	('소녀시대', '2007-08-02', 102), ('카라', '2009-07-30', 103),
	('브라운아이드걸스', '2008-01-17', 104), ('다비치', '2009-02-27', 105),
	('2NE1', '2009-07-08', 106), ('f(x)', '2011-04-20', 108),
	('시크릿', '2011-01-06', 109), ('레인보우', '2010-08-12', 110),
	('애프터 스쿨', '2009-11-25', 120), ('포미닛', '2009-08-28', 121);

# Inner Join
SELECT girl_group.name, girl_group.debut, song.title, song.lyrics
	FROM song
	JOIN girl_group
	ON song.sid=girl_group.hit_song_id;
SELECT g.name, g.debut, s.title, s.lyrics
	FROM song AS s
	JOIN girl_group AS g
	ON s.sid=g.hit_song_id;
# Left Outer Join
SELECT s.sid, g.name, g.debut, s.title, s.lyrics
	FROM song AS s				        # Left
	LEFT OUTER JOIN girl_group AS g		# Right
	ON s.sid=g.hit_song_id;
# Right Outer Join
SELECT s.sid, g.name, g.debut, s.title, s.lyrics
	FROM song AS s						# Left
	RIGHT OUTER JOIN girl_group AS g	# Right
	ON s.sid=g.hit_song_id;
# Full Outer Join
SELECT s.sid, g.name, g.debut, s.title, s.lyrics
	FROM song AS s				        # Left
	LEFT OUTER JOIN girl_group AS g		# Right
	ON s.sid=g.hit_song_id
UNION
SELECT s.sid, g.name, g.debut, s.title, s.lyrics
	FROM song AS s						# Left
	RIGHT OUTER JOIN girl_group AS g	# Right
	ON s.sid=g.hit_song_id;

# 데뷔 일자가 빠른 5개 걸그룹의 힛트송은? (그룹명, 곡명, 데뷔일자))
SELECT g.name, s.title, g.debut
	FROM song AS s
	JOIN girl_group AS g
	ON s.sid=g.hit_song_id
	ORDER BY g.debut
	LIMIT 5;
# 2007년도에 데뷔한 걸그룹은?
SELECT NAME, debut FROM girl_group
	WHERE debut BETWEEN DATE('2007-01-01') AND DATE('2007-12-31');
# 2009년도에 데뷔한 걸그룹의 히트송은? 
#	(걸그룹 이름, 데뷔일, 히트송)
SELECT g.name, g.debut, s.title
	FROM girl_group AS g
	JOIN song AS s
	ON s.sid=g.hit_song_id
	WHERE g.debut BETWEEN DATE('2009-01-01') AND DATE('2009-12-31')
    ORDER BY g.debut;