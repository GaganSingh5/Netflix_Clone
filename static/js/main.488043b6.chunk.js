(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),a=n(15),o=n.n(a),r=(n(21),n(22),n(4)),s=n.n(r),l=n(5),d=n(3),u=n(16),f=n.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),h=(n(42),n(0));var b=function(e){var t=e.title,n=e.fetchUrl,i=e.isLargeRow,a=Object(c.useState)([]),o=Object(d.a)(a,2),r=o[0],u=o[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,u(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("h2",{children:t}),Object(h.jsx)("div",{className:"tiles_container",children:r.map((function(e){return Object(h.jsx)("img",{className:"tile_poster ".concat(i&&"tile_poster_large"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(i?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))})]})},v="e79b1ff319751096dfbc114534f6d794",j={fetchTreanding:"/trending/all/week?api_key=".concat(v,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(v,"&with_network=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(v,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(v,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(v,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(v,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(v,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(v,"&with_genres=99")};n(44);var L=function(){var e,t,n=Object(c.useState)([]),i=Object(d.a)(n,2),a=i[0],o=i[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(j.fetchNetflixOriginals);case 2:t=e.sent,o(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(a),Object(h.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'")'),backgroundPosition:"center 5%"},children:["  ",Object(h.jsxs)("div",{className:"banner_contents",children:[Object(h.jsx)("h1",{className:"banner_title",children:(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name)}),Object(h.jsxs)("div",{className:"banner_buttons",children:[Object(h.jsx)("button",{className:"banner_button",children:"Play"}),Object(h.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(h.jsx)("h1",{className:"banner_description",children:(e=null===a||void 0===a?void 0:a.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(h.jsx)("div",{className:"banner--fadeButton"})]})};n(45);var p=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?i(!0):i(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(h.jsx)("div",{className:"nav ".concat(n&&"nav_black"),children:Object(h.jsx)("svg",{className:"nav_logo",viewBox:"0 0 111 30",focusable:"false",children:Object(h.jsx)("g",{id:"netflix-logo",children:Object(h.jsx)("path",{d:"M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z",id:"Fill-14"})})})})};var g=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{}),Object(h.jsx)(L,{}),Object(h.jsx)(b,{title:"Netflix Originals",fetchUrl:j.fetchNetflixOriginals,isLargeRow:!0}),Object(h.jsx)(b,{title:"Trending Now",fetchUrl:j.fetchTreanding}),Object(h.jsx)(b,{title:"Action Movies",fetchUrl:j.fetchActionMovies}),Object(h.jsx)(b,{title:"Comedy Movies",fetchUrl:j.fetchComedyMovies}),Object(h.jsx)(b,{title:"Horror Movies",fetchUrl:j.fetchHorrorMovies}),Object(h.jsx)(b,{title:"Romance Movies",fetchUrl:j.fetchRomanceMovies}),Object(h.jsx)(b,{title:"Documentaries",fetchUrl:j.fetchDocumentaries})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),m()}},[[46,1,2]]]);
//# sourceMappingURL=main.488043b6.chunk.js.map