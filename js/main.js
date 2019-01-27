$(document).ready(function() {

  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3000);

});



// AboutMe Start
const aboutMe = (name, num, img, link) => ({name, num, img, link});

const aboutMes = [
// aboutMe(
// 	'HTML 5',
// 	'85',
// 	'devicon-html5-plain-wordmark colored html',
// 	''),

aboutMe(
	'Front-end developer',
	'Roman',
	'Matviy',
	'Lviv, Ukraine',
	'roman@matviy.pp.ua',
	'romas6ka',
	'+380 93 88 00 822',
	'+380 67 77 19 340',
	'github.com/MatviyRoman',
	'linkedin.com/in/MatviyRoman',
	'facebook.com/romas6ka',
	'Vue.js, Angular 2, TypeScript, PHP, MySQL',
	'Vue.js, Node.js, Angular 2 / TypeScript, React, PHP, MySQL, AJAX',
	'without bad habits, persistent and purposeful, responsible and executive, prone to analytical activity, prone to analytical activity, punctual')]
// AboutMe End



// Front-End Start
const frontEnd = (name, num, img, link) => ({name, num, img, link});

const frontEnds = [
frontEnd(
	'HTML 5',
	'85',
	'devicon-html5-plain-wordmark colored html',
	'zip/wwwvuejs2.zip'),

frontEnd(
	'CSS 3',
	'80',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

frontEnd(
	'CSS Flexbox',
	'78',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

frontEnd(
	'JavaScript',
	'40',
	'img/1.jpg',
	'zip/wwwvuejs2.zip')]
// Front-End End



// Back-End Start
const backEnd = (name, num, img, link) => ({name, num, img, link});

const backEnds = [
backEnd(
	'PHP',
	'20',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

backEnd(
	'MySQL',
	'15',
	'img/1.jpg',
	'zip/wwwvuejs2.zip')]
// Back-End End



// Certificates Start
const certificate = (date, name, cert, link) => ({date, name, cert, link});

const certificates = [
certificate(
	'(09/2018)',
	'HTML Fundamentals',
	'License 1014-10299461',
	'https://www.sololearn.com/Certificate/1014-10299461/pdf/'),

certificate(
	'(09/2018)',
	'CSS Sertificate',
	'License 1023-10299461',
	'https://www.sololearn.com/Certificate/1023-10299461/pdf/'),

certificate(
	'(10/2018)',
	'JavaScript Tutorial',
	'License 1024-10299461',
	'https://www.sololearn.com/Certificate/1024-10299461/pdf/'),

certificate(
	'(10/2018)',
	'jQuery Tutorial',
	'License 1082-10299461',
	'https://www.sololearn.com/Certificate/1082-10299461/pdf/')]
// Certificates End



// CMS Start
const cms = (name, num, img, link) => ({name, num, img, link});

const cmss = [
cms(
	'OcClass',
	'75',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

cms(
	'OpenCart',
	'80',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

cms(
	'WordPress',
	'70',
	'img/1.jpg',
	'zip/wwwvuejs2.zip')]
// CMS End



// Framework Start
const framework = (name, num, img, link) => ({name, num, img, link});

const frameworks = [
framework(
	'Bootstrap',
	'75',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

framework(
	'jQuery',
	'40',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

framework(
	'VueJS',
	'30',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

framework(
	'Angular 2',
	'20',
	'devicon-html5-plain-wordmark colored html',
	'zip/wwwvuejs2.zip')]
// Framework End



// Language Start
const language = (name, num, img, link) => ({name, num, img, link});

const languages = [
language(
	'English',
	'40',
	'img/1.jpg',
	''),

language(
	'Polish',
	'28',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

language(
	'Ukrainian',
	'100',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

language(
	'Russian',
	'80',
	'img/1.jpg',
	'zip/wwwvuejs2.zip')]
// Language End



// Links Start
const link = (name, num, img, link) => ({name, num, img, link});

const links = [
link(
	'English',
	'35',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

link(
	'Ukrainian',
	'100',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

link(
	'Russian',
	'80',
	'img/1.jpg',
	'zip/wwwvuejs2.zip')]
// Links End



// Social Start
const social = (name, icon, link) => ({name, icon, link});

const socials = [
social(
	'GitHub',
	'fab fa-github',
	'https://github.com/MatviyRoman'),

social(
	'Facebook',
	'fab fa-facebook',
	'https://www.facebook.com/romas6ka'),

social(
	'Skype',
	'fab fa-skype',
	'skype:live:romas6ka'),

social(
	'Viber',
	'fab fa-viber',
	'viber:chat?number=+380677719340'),

// social(
// 	'YouTube',
// 	'fa fa-youtube',
// 	'https://www.youtube.com/channel/UCZ1W8CdO3fDnvsobEqkbv6w'),

social(
	'E-mail',
	'far fa-envelope',
	'#contact')]
// Social End



// Skills Start
const skill = (name, num, img, link) => ({name, num, img, link});

const skills = [
skill(
	'Browser Developer Tools',
	'70',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

skill(
	'PSD to HTML5',
	'87',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

skill(
	'Landing Page',
	'30',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

skill(
	'Responsive Design',
	'85',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

skill(
	'Plugin Elementor',
	'70',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

skill(
	'UI / UX Design',
	'25',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),]
// Skills End



// Tool Start
const tool = (name, num, img, link) => ({name, num, img, link});

const tools = [
tool(
	'Command Line',
	'45',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

tool(
	'FileZilla (FTP)',
	'90',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

tool(
	'Git',
	'30',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

tool(
	'GitHub',
	'80',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

tool(
	'NPM/Webpack',
	'29',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

tool(
	'Avocode',
	'90',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

tool(
	'Brackets',
	'40',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

tool(
	'Sublime Text',
	'80',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

tool(
	'PhpStorm',
	'36',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

tool(
	'Visual Studio Code',
	'49',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

tool(
	'Chrome Browser',
	'70',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

tool(
	'Firefox Browser',
	'70',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

// tool(
// 	'Slack',
// 	'0',
// 	'img/1.jpg',
// 	'zip/wwwvuejs2.zip'),

tool(
	'Photoshop',
	'50',
	'img/1.jpg',
	'zip/wwwvuejs2.zip')]
// Tool End



// Project Start
const project = (date, url, github, name, desc, skills) => ({date, url, github, name, desc, skills});

const projects = [
project(
	'15 Jan 2019',
	'camel.matviy.pp.ua',
	'https://github.com/MatviyRoman/Camel',
	'Camel Heal',
	`We have received your resume and are interested in speaking with you! Please find the attached inquiry form. Additionally, please complete the following test assignment: convert home page PSD into html (CamelCo PSD/Images - https://drive.google.com/open?id=1i5Jp0cIjb6K3CUJHrYLFFhk2upM4wQPZ; to access PSD, click file named“Camel HealGCoHome-November 7.psd” and then click “Download”). We would appreciate it if you reviewed, completed, and returned these to us along with the estimated time that you spent on the test assignment. We look forward to speaking with you soon.`,
	'HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design'),

project(
	'21 Dec 2018',
	'home.matviy.pp.ua',
	'https://github.com/MatviyRoman/HOME',
	'Home',
	'Зверстати у відповідності до прикріпленого макету. Необхідні технології: Сss framework: bootstrap 3 або 4 Js framework : Jquery Валідний код та адаптація під мобільні пристрої.',
	'HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design'),

project(
	'15 Dec 2018',
	'magazino.ga',
	'http://magazino.ga',
	'magazino.ga',
	'My Home Project. Wordpress. My design with using plugin Elementor',
	'HTML5, CSS3, Wordpress, plugin Elementor, Landing Page'),

project(
	'8 Dec 2018',
	'pantomax.matviy.pp.ua',
	'https://github.com/MatviyRoman/Pantomax',
	'Pantomax',
	'Сделать верстку с макета и адаптировать ее под мобильные устройства. Ссылка прилагается на макет, адаптивную верстку необходимо сделать на свое усмотрение.',
	'HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design',
	'3'),

project(
	'7 Dec 2018',
	'todo-list.matviy.pp.ua',
	'https://github.com/MatviyRoman/todo-list',
	'todo-list',
	`Техническое задание: Реализовать todo list (список дел). Функционал: вывод списка задач из базы данных, создание новой задачи, редактирование задачи, удаление задачи. Клиентская часть. Для всего использовать Angular Material Design. Основной компонент приложения - список задач. При открытии страницы должен показываться лоадер (задачи загружаются…). 1.1 Если задач в базе нет, вывести сообщение об этом и кнопку “создать первую задачу”. 1.2 Если есть задачи, список задач в виде таблицы (столбцы - id задачи, текст задачи, дата создания, действия с задачей). Кнопка добавления новой задачи над таблицей. При нажатии на кнопку добавления задачи открывается боковое окно (drawer) с заголовком (toolbar). 2.1 В боковом окне будет расположено текстовое поле + кнопка “добавить задачу”. 2.2 Кнопка должна быть неактивной, если поле пустое. 2.3 При добавлении задачи сначала должен показываться лоадер (подождите, идёт добавление), а затем окно должно закрываться. В случае ошибки должно появляться сообщение (в виде snackbar). 2.4 Добавить ошибку в случае, если введенный текст содержит символ “!”. Т.е. если пользователь ввёл текст “Выполнить испытательное задание!”, то при попытке создать задачу должен сначала показаться лоадер, а затем снова поле с кнопкой + в snackbar должно появиться сообщение с ошибкой. 2.5 После добавления задачи она также добавляется в таблицу на странице. При наведении на строку задачи в таблице, возле текста задачи появляется иконка редактирования (ручка). 3.1 При нажатии на кнопку редактирования открывается модальное окно (dialog) с текстовым полем и кнопками “Отмена” и “Сохранить”. 3.2 При нажатии на “Сохранить” сначала показывается лоадер (progress bar), затем окно закрывается и текст задачи в таблице меняется. В последней колонке (действия с задачей) должна быть кнопка-иконка корзины. 4.1 При нажатии открывается модальное окно (dialog) с подтверждением удаления. 4.2 При подтверждении удаления сначала показывается лоадер (progress bar), затем окно закрывается и задачи удаляется из списка проекта.`,
	'VueJS, HTML5, CSS3, Bootstrap 4, Responsive Design, Landing Page'),

project(
	'27 Nov 2018',
	'travel.matviy.pp.ua',
	'https://github.com/MatviyRoman/Travel-Agency',
	'Travel Agency',
	'Responsive design with psd layouts',
	'HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design'),

project(
	'15 Nov 2018',
	'Roman.Matviy.pp.ua',
	'https://github.com/MatviyRoman/Roman.Matviy.CV',
	'Roman.Matviy.CV',
	'Responsive design with psd layouts Roman.Matviy.CV',
	'HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design, Landing Page'),

project(
	'14 Nov 2018',
	'learn.matviy.pp.ua/JavaScript/',
	'https://github.com/MatviyRoman/Learn-Theory-of-JS',
	'Learn Theory of JS',
	'Responsive design with psd layouts. Learn Theory of JS',
	'HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design, Landing Page'),

project(
	'10 Nov 2018',
	'short-code-vue.matviy.pp.ua',
	'https://github.com/MatviyRoman/Short-code-vue',
	'Short code vue',
	'Learn Theory of vue.js',
	'VueJS, HTML5, CSS3'),

project(
	'10 Nov 2018',
	'vue.matviy.pp.ua',
	'https://github.com/MatviyRoman/Test-vue.js',
	'Test vue.js',
	'Learn Theory of vue.js',
	'VueJS, HTML5, CSS3'),

project(
	'9 Nov 2018',
	'resume.matviy.pp.ua',
	'https://github.com/MatviyRoman/Old-my-resume',
	'Old my resume',
	'Learn Theory of vue.js',
	'HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design, Landing Page'),

project(
	'6 Nov 2018',
	'startup.matviy.pp.ua',
	'https://github.com/MatviyRoman/Startup.matviy.pp.ua',
	'Startup',
	'Responsive design with psd layouts',
	'HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design'),

project(
	'1 Nov 2018',
	'github.com/MatviyRoman/AngularJS',
	'https://github.com/MatviyRoman/AngularJS/tree/master/angular2-intro',
	'AngularJS',
	'AngularJS',
	'HTML5, CSS3, AngularJS'),

project(
	'26 Oct 2018',
	'example.matviy.pp.ua',
	'https://github.com/MatviyRoman/example.matviy.pp.ua',
	'example',
	'Responsive design with psd layouts',
	'HTML5, CSS3, Bootstrap 3, Responsive Design'),

project(
	'26 Oct 2018',
	'gentab.matviy.pp.ua',
	'https://github.com/MatviyRoman/HTML-Tables-Generation',
	'HTML Tables Generation',
	'HTML Tables Generation. My Home Project. Responsive design with psd layouts HTML Tables Generation',
	'HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design, Landing Page'),

project(
	'25 Oct 2018',
	'mytesting.ga',
	'https://github.com/MatviyRoman/mytesting.ga',
	'mytesting.ga',
	'HTML Tables Generation. My Home Project. Responsive design with psd layouts HTML Tables Generation',
	'HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design'),

project(
	'10 Oct 2018',
	'creatives.matviy.pp.ua',
	'https://github.com/MatviyRoman/Creatives-Project',
	'Creatives',
	'Responsive design with psd layouts',
	'HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design'),

project(
	'25 Jan 2019',
	'arnika.matviy.pp.ua',
	'https://github.com/MatviyRoman/www.arnika.od.ua',
	'МЦ Арника arnika.od.ua',
	'Було завдання з оригінального сайту зробити Responsive Design. Оригінал з того, що я робив можна глянути тут http://arnika.matviy.pp.ua/original/index.html',
	'HTML5, CSS3, Bootstrap 4, Responsive Design'),

project(
	'7 Oct 2018',
	'modal.matviy.pp.ua',
	'https://github.com/MatviyRoman/My-Modal-Window',
	'Window modal test',
	'Responsive design with psd layouts. This is my window modal test.',
	'HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design'),

project(
	'24 Sep 2018',
	'bisines.matviy.pp.ua',
	'https://github.com/MatviyRoman/Bisines-Company-Project',
	'Bisines-Company',
	'My project building with bootstrap &amp; jQuery. Responsive design with psd layouts',
	'HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design')]
// Project End


new Vue ({
	el: '#myPortfolio',
	// template:
 //  `<div :style="{width: '55%'}">t</div>`,
	data: {
		aboutMes,
		backEnds,
		certificates,
		cmss,
		frontEnds,
		frameworks,
		languages,
		links,
		socials,
		skills,
		// skill: skills[0],
		tools,
		projects,
		phoneVisibility: false,
		searchLessons: ''
	},
	methods: {
		selectLesson(lesson,index) {
			this.lesson = lesson;
			this.lesson = this.filteredLessons[index]
			// this.selectLessonIndex = index
			console.log('click', index);
		}
	},
	computed: {
		phoneBtnText() {
			return this.phoneVisibility ? 'Hide phone' : 'Show phone'
		},
		filteredLessons() {
			return this.skills.filter(skill => {
				return skill.title.indexOf(this.search) > -1 || skill.description.indexOf(this.search) > -1
			})
		}
	},
	filters: {
		date(value) {
			return value.toLocalString()
		}
	}
})



// $('.skill:has(img[alt="5 copy_200comp.jpg"])').show();

// var i = 38
// switch (i) {
//     case ((i>=0 && i<=19)?i:-1): $(".progress-bar").attr("class", "bg-danger"); console.log('0-19'); break;
//     case ((i>=20 && i<=39)?i:-1): $(".progress-bar").attr("class", "bg-danger"); console.log('20-39'); break;
//     case ((i>=40 && i<=59)?i:-1): $(".progress-bar").attr("class", "bg-danger"); console.log('40-59'); break;
//     case ((i>=60 && i<=79)?i:-1): $(".progress-bar").attr("class", "bg-success"); console.log('60-79');
//     default: console.log('80-100'); break;
// }



// let i = skill.num;
// while (i < skills.length) {
//   alert( i );
//   switch (i) {
//     case ((i>=20 && i<=19)?i:-1): $(this).css("color", "#ffffff"); console.log('0-19');
//     case ((i>=20 && i<=39)?i:-1): $(".progress-bar").attr("class", "bg-danger"); console.log('20-39');
//     case ((i>=40 && i<=59)?i:-1): $(".progress-bar").attr("class", "bg-success"); console.log('40-59');
//     case ((i>=60 && i<=79)?i:-1): $(".progress-bar").attr("class", "bg-info"); console.log('60-79');
//     default: $(".progress-bar").attr("class", "bg-danger"); console.log('80-100'); break;}
//   i++;
// }

// l i = $(".progress-bar b").text();

// switch (i) {
//     case ((i>=20 && i<=19)?i:-1): $(this).css("color", "#ffffff"); console.log('0-19');
//     case ((i>=20 && i<=39)?i:-1): $(".progress-bar").attr("class", "bg-danger"); console.log('20-39');
//     case ((i>=40 && i<=59)?i:-1): $(".progress-bar").attr("class", "bg-success"); console.log('40-59');
//     case ((i>=60 && i<=79)?i:-1): $(".progress-bar").attr("class", "bg-info"); console.log('60-79');
//     default: $(".progress-bar").attr("class", "bg-danger"); console.log('80-100'); break;}
// } i++;}


   //  if (content == "high") {

   //      $(this).css("color", "#ffffff");
   //  }
   // if (content == "low") {

   //      $(this).css("color", "#ccc");
   //  }
   // if (content == "critical") {

   //      $(this).css("color", "#000");
   //  }



//    var max_temp = 50, // set maximum expected temperature
// min_temp = -10, // set minimum temperature
// temp_range = max_temp - min_temp, // calculate range
// temp_rating = ((temp - min_temp) / temp_range) * 255 // express value in terms of the range multiplied by 255
// red = temp_rating, // more temp = more red
// blue = 255 - temp_rating; // more temp = less blue

// $(document).ready(function(){
    // $('.progress-bar')​.has(function(){
        // if($('.progress-bar').has() < 47)
        //     $(this).removeAttr("class").addClass("cold");
        // else
        //     $(this).removeAttr("class").addClass("hot");
    // })​
// });



$(document).ready(function(){
	var mc = {
	    '0-19'     : 'bg-danger',
	    '20-39'    : 'bg-warning',
	    '40-59'    : 'bg-info',
	    '60-79'    : 'bg-success',
	    '80-100'   : ''
	};

	function between(x, min, max) {
	  	return x >= min && x <= max;
	}

	var dc;
	var first;
	var second;
	var th;

	$('.progress-bar').each(function(index){

    	th = $(this);

    	dc = parseInt($(this).attr('data-color'),10);


      	$.each(mc, function(name, value){

	        first = parseInt(name.split('-')[0],10);
	        second = parseInt(name.split('-')[1],10);

	        // console.log(between(dc, first, second));

	        if( between(dc, first, second) ){
	          	th.addClass(value);
	        }
      	});
  	});
});