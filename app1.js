let a = 10;

const title = '초등 1학년 한자';
const ele1 = ['한일','두이','석삼','넉사','다섯오','여섯육','일곱칠','여덟팔','아홉구','열십',
	'일백백','일천천','날일','달월','불화','물수','나무목','쇠금','흙토','손수',
	'발족','힘력','입구','귀이','눈목','큰대','가운데중','작을소','붉을적','흰백',
	'푸를청','오른우','왼좌','윗상','아래하','수풀림','나무빽빽할삼','뫼산','내천','돌석',
	'하늘천','기운기','비우','저녁석','빌공','사내남','계집녀','사람인','임금왕','아들자',
	'이름명','개견','벌레충','조개패','꽃화','풀초','대죽','둥글원','구슬옥','먼저선',
	'날생','근본본','글월문','글자자','바를정','배울학','학교교','해년','들입','날출',
	'쉴휴','설립','볼견','밭두둑정','마을촌','밭전','실사','수레차','소리음','일찍조'];//a

const aa = ele1.length;
const bb = '변수 ele1 에 들어있는 단어위 갯수는' + aa + '개 입니다.';
const cc = title + ' ' +aa;


//20240323sa

const dd = ele1[0];
const ee = ele1[9];

const ff = [ele1[0], ele1[9], ele1[10], ele1[19]];
	


//20240325mo

const ele2 = ['누이매','스스로자','나눌분','끊을절','고기육','쌀미','보리맥','먹을식','차다','길도',
'그림회','그림화','말씀언','말씀어','가르칠교','집실','장인공','지을작','셈할계','셈할산',
'점점','셈할수','읽을독','글서','품등과','검을흙','대답할답','실선','새신','들을문',
'차례번','짤조','노래가','소리성','즐길락','팔매','살매','문문','집호','활궁',
'화살시','김기','배선','토대대','빛광','종이지','땅지','그림도','전기전','이야기화',
'깃우','털모','둥글환','모양형','칼도','일만만','재주재','당길인','낮오','으뜸원',
'쓸용','상고할고','마땅할당','한가지동','알지','합할합','돌아올회','어찌하','밝을명','곧을직',
'나라국','생각할사','살활','집가','기록할기','통할통','다스릴리','가늘세','사이간','맑을청'];

const aa2 = ele2.length;

const bb2 = aa2 + '개';
const cc2 = title + ' ' + aa2;


//20240326tu

const ele3 = ['동녘동','서녘서','남녘남','북녘북','봄춘','여름하','가을추','겨울동','만날회','모일사',
'공변될공','동산원','절사','섞일교','매양매','두루주','아침조','낮주','밤야','때시',
'빛날요','절반반','강할강','약할약','멀원','가까울근','옛고','이제금','안내','바깥외',
'앞전','뒤후','많을다','적을소','서울경','마을리','소우','말마','고기어','새조',
'울명','그칠지','갈행','달릴주','올래','걸을보','돌아갈귀','모방','뿔각','저자시',
'마당장','클태','넓을광','못지','골짜기곡','바위암','별성','바람풍','바다해','높을고',
'근원원','눈설','들야','누를황','구름운','얼굴안','빛색','마음심','목수','몸체',
'머리두','아비부','어미모','형형','아우제','친할친','벗우','가계점','길장','누이자']


//20240327we

function ele1_function(){
	document.getElementById("ele1_ID").innerText = ele1;
	}

function ele2_function(){
	document.getElementById("ele2_ID").innerText = ele2;
	}

function ele3_function(){
	document.getElementById("ele3_ID").innerText = ele3;
	}


//20240328th

let ele1_0 = ele1[0];
let eleLength = ele1[0].length;

let eleFirstLetter =  ele1_0.charAt(0);
let eleLastLetter =  ele1_0.charAt(eleLength - 1);

let meaning = '훈독: ' + eleFirstLetter;
let sound = '음독: ' + eleLastLetter;

let meaningAndSound = meaning +', '+ sound;

