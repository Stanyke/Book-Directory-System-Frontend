(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{184:function(e,t,o){e.exports=o(437)},389:function(e,t,o){},390:function(e,t,o){},437:function(e,t,o){"use strict";o.r(t);o(185),o(186),o(187),o(188),o(189),o(190),o(191),o(192),o(193),o(194),o(195),o(196),o(197),o(198),o(199),o(200),o(201),o(202),o(203),o(204),o(205),o(206),o(207),o(208),o(209),o(210),o(211),o(83),o(212),o(213),o(214),o(215),o(216),o(217),o(218),o(219),o(220),o(221),o(222),o(223),o(224),o(225),o(226),o(228),o(229),o(231),o(232),o(233),o(234),o(235),o(236),o(237),o(238),o(239),o(240),o(241),o(242),o(244),o(245),o(246),o(247),o(248),o(249),o(250),o(251),o(252),o(253),o(254),o(255),o(257),o(258),o(259),o(260),o(261),o(262),o(264),o(266),o(268),o(269),o(270),o(271),o(272),o(273),o(274),o(275),o(276),o(277),o(278),o(279),o(280),o(281),o(282),o(283),o(284),o(285),o(286),o(287),o(289),o(290),o(293),o(294),o(295),o(297),o(298),o(299),o(300),o(301),o(302),o(303),o(304),o(305),o(306),o(307),o(159),o(308),o(309),o(310),o(311),o(312),o(313),o(314),o(162),o(315),o(316),o(317),o(318),o(319),o(320),o(321),o(322),o(323),o(324),o(325),o(326),o(327),o(328),o(329),o(330),o(331),o(332),o(333),o(334),o(335),o(336),o(337),o(338),o(339),o(340),o(342),o(343),o(344),o(345),o(346),o(347),o(348),o(349),o(350),o(351),o(352),o(353),o(354),o(355),o(356),o(357),o(358),o(359),o(360),o(361),o(362),o(363),o(364),o(365),o(366),o(367),o(368),o(369),o(370),o(371),o(372),o(373),o(374),o(375),o(376),o(377),o(378),o(379),o(380),o(381),o(384),o(170);var a=o(0),n=o.n(a),l=o(51),r=o.n(l),s=(o(389),o(390),o(19)),i=o(16),c=o(61),m=o(62),d=o(64),u=o(63),b=o(57),p=o(3),g=(o(120),o(52)),k=o.n(g),E=function(e){Object(d.a)(o,e);var t=Object(u.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).switchPagination=function(e){p.a.info("Page ".concat(e),{position:p.a.POSITION.TOP_LEFT,autoClose:1e3}),a.setState({currentPage:e})},a.state={books:[],errorMessage:"",currentPage:"1",booksPerPage:"5"},p.a.configure(),a}return Object(m.a)(o,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://book-directory-system-api.herokuapp.com/api/books").then((function(t){document.getElementById("beatLoaders").style.display="none",e.setState({books:t.data.books})})).catch((function(t){document.getElementById("beatLoaders").style.display="none",e.setState({errorMessage:"There was a problem while getting books, try again."})}))}},{key:"trimCharacter",value:function(e){return e.length>150?e.substring(0,147):e}},{key:"render",value:function(){var e=this,t={width:"100%",height:"300px"},o=this.state,a=o.books,l=o.errorMessage,r=o.currentPage,i=o.booksPerPage,c=r*i,m=c-i,d=a.slice(m,c),u=a.length;return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-sm"},n.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Book Directory"),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"btn btn-outline-info nav-link p-2",to:"/post"},"New Book")))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},d.length?d.map((function(o){return n.a.createElement("div",{key:o._id,className:"col-md-4 mt-4",align:"center"},n.a.createElement("div",{className:"card col-md-12"},n.a.createElement("img",{className:"card-img-top",src:o.cover_image_url,alt:"Book cover",style:t}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},o.title),n.a.createElement("p",{className:"card-text"},e.trimCharacter(o.description)," ",n.a.createElement(s.b,{to:"book/"+o._id,class:"readMoreLink"},"Read More")),n.a.createElement("p",{className:"authorName",align:"left"},"Author: ",n.a.createElement("b",null,o.author)),n.a.createElement(s.b,{className:"previewLink btn btn-primary nav-link p-2",to:"book/"+o._id},"Preview"))))})):null,l?n.a.createElement("div",{align:"center",className:"col-12"}):null,n.a.createElement("div",{id:"beatLoaders",align:"center"},n.a.createElement(b.BeatLoader,{size:50,color:"#c31432",loading:!0}),n.a.createElement("b",null,"Books Loading...")))),n.a.createElement("div",{class:"container"},d.length?function(t,o){for(var a=[],l=1;l<=Math.ceil(o/t);l++)a.push(l);return n.a.createElement("ul",{className:"pagination"},a.map((function(t){return n.a.createElement("li",{key:t,className:"page-item"},n.a.createElement(s.b,{to:"",className:"page-link",onClick:function(){return e.switchPagination(t)}},t))})))}(i,u):null))}}]),o}(a.Component),v=function(e){Object(d.a)(o,e);var t=Object(u.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).previewDeleteProcess=function(){document.getElementById("deleteBookNotice").style.display="block"},a.cancelBookDelete=function(){document.getElementById("deleteBookNotice").style.display="none"},a.continueBookDelete=function(){document.getElementById("deleteBookNotice").style.display="none",document.getElementById("tryingBookDelete").style.display="block",k.a.delete("https://book-directory-system-api.herokuapp.com/api/books/".concat(a.state.book_id)).then((function(e){document.getElementById("tryingBookDelete").style.display="none",a.setState({returnToHomePage:!0}),p.a.info(e.data.message,{position:p.a.POSITION.TOP_LEFT,autoClose:5e3})})).catch((function(e){p.a.error(e.response.data,{position:p.a.POSITION.TOP_LEFT,autoClose:8e3})}))},a.state={book_id:a.props.match.params.id,author:"",book_title:"",book_summary:"",book_cover:"",errorMessage:"",bookDelted:!1,returnToHomePage:!1},p.a.configure(),a}return Object(m.a)(o,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://book-directory-system-api.herokuapp.com/api/books/".concat(this.state.book_id)).then((function(t){document.getElementById("beatLoaders").style.display="none",console.log(t.data.message),t.data.message.hasOwnProperty("title")?(document.getElementById("bookContainer").style.display="block",e.setState({author:t.data.message.author,book_title:t.data.message.title,book_summary:t.data.message.description,book_cover:t.data.message.cover_image_url})):e.setState({errorMessage:t.data.message,bookDelted:!0})})).catch((function(t){document.getElementById("beatLoaders").style.display="none",console.log(t),e.setState({errorMessage:"There was a problem while getting this book, try again."})}))}},{key:"render",value:function(){var e=this,t=this.state,o=t.author,a=t.book_title,l=t.book_summary,r=t.book_cover,c=t.errorMessage,m=t.bookDelted;return t.returnToHomePage?n.a.createElement(i.a,{to:"/"}):n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-sm"},n.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Book Directory"),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"btn btn-outline-info nav-link p-2 mr-3",to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(s.b,{className:"btn btn-outline-info nav-link p-2",to:"/post"},"New Book")))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{id:"bookContainer"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:r,style:{width:"100%",height:"350px"},alt:"Book Cover"})),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"bookTitle"},n.a.createElement("b",null,a)),n.a.createElement("div",{className:"bookAuthor"},"By: ",n.a.createElement("span",{className:"bookWriter"},o)),n.a.createElement("br",null),n.a.createElement("div",{className:"bookSummary"},l),n.a.createElement("button",{class:"btn btn-danger mt-3",onClick:function(){return e.previewDeleteProcess()}},"Delete Book")))),c?n.a.createElement("div",{align:"center",className:"col-12"},n.a.createElement("b",null,c),m?"":n.a.createElement("p",null,"Possibly caused by an invalid link.")):null,n.a.createElement("div",{id:"beatLoaders",align:"center"},n.a.createElement(b.BeatLoader,{size:50,color:"#c31432",loading:!0}),n.a.createElement("b",null,"Book Loading...")),n.a.createElement("div",{id:"deleteBookNotice",align:"center"},n.a.createElement("b",null,"Are you sure you want to delete this book?"),n.a.createElement("div",null,n.a.createElement("button",{type:"button",className:"btn btn-danger pt-2 pd-2 pl-4 pr-4 mr-3",onClick:function(){return e.continueBookDelete()}},"Yes ",n.a.createElement("span",{role:"img","aria-label":"Yes"},"\u2714\ufe0f")),n.a.createElement("button",{type:"button",className:"btn btn-info pt-2 pd-2 pl-4 pr-4",onClick:function(){return e.cancelBookDelete()}},"No ",n.a.createElement("span",{role:"img","aria-label":"No"},"\u2716\ufe0f")))),n.a.createElement("div",{id:"tryingBookDelete",align:"center"},n.a.createElement(b.BeatLoader,{size:50,color:"#c31432",loading:!0}),n.a.createElement("b",null,"Processing Book Delete..."))))}}]),o}(a.Component),y=function(e){Object(d.a)(o,e);var t=Object(u.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).closeAfterBookPublishNotice=function(){document.getElementById("redirectionPreviewAfterPublishingBook").style.display="none",document.getElementById("book_title").value="",document.getElementById("book_highlight").value="",document.getElementById("author").value="",document.getElementById("preferredBookUploadType").value="",document.getElementById("book_cover_from_device").setAttribute("type","text"),document.getElementById("book_cover_from_device").setAttribute("type","file"),document.getElementById("book_cover_from_url").value=""},a.preferredBookUploadType=function(e){a.setState({book_upload_type:e}),"upload from device"===e?(document.getElementById("book_cover_from_device").style.display="block",document.getElementById("book_cover_from_url").style.display="none",document.getElementById("book_cover_from_url").required=!1,document.getElementById("book_cover_from_device").required=!0,document.getElementById("book_cover_from_device").disabled=!1):"upload from url"===e?(document.getElementById("book_cover_from_device").style.display="none",document.getElementById("book_cover_from_url").style.display="block",document.getElementById("book_cover_from_device").required=!1,document.getElementById("book_cover_from_url").required=!0,document.getElementById("book_cover_from_url").disabled=!1):(document.getElementById("book_cover_from_device").style.display="block",document.getElementById("book_cover_from_url").style.display="block",document.getElementById("book_cover_from_device").required=!0,document.getElementById("book_cover_from_url").required=!0,document.getElementById("book_cover_from_url").disabled=!0,document.getElementById("book_cover_from_device").disabled=!0)},a.submitBook=function(e){e.preventDefault();var t=a.state,o=t.book_title,n=t.book_highlight,l=t.book_cover_from_device,r=t.book_cover_from_url,s=t.book_upload_type,i=t.author;if(""!==a.state.book_upload_type){if("upload from url"===a.state.book_upload_type?""===r||""===o||""===n||""===i||""===o?p.a.info("One or more input field is empty",{position:p.a.POSITION.TOP_LEFT,autoClose:2e3}):a.setState({processData:!0}):""===l||""===o||""===n||""===i||""===o?p.a.info("One or more input field is empty",{position:p.a.POSITION.TOP_LEFT,autoClose:2e3}):a.setState({processData:!0}),a.state.processData)if(document.getElementById("beatLoadersForPostingBook").style.display="block",document.getElementById("publishBookButton").disabled=!0,"upload from url"===s){var c={title:o,description:n,cover_image:r,author:i};k.a.post("https://book-directory-system-api.herokuapp.com/api/books",c).then((function(e){document.getElementById("beatLoadersForPostingBook").style.display="none",document.getElementById("publishBookButton").disabled=!1,p.a.info(e.data.message,{position:p.a.POSITION.TOP_LEFT,autoClose:2e3}),console.log(e.data),a.setState({newBookID:e.data.book._id}),document.getElementById("redirectionPreviewAfterPublishingBook").style.display="block"})).catch((function(e){document.getElementById("beatLoadersForPostingBook").style.display="none",document.getElementById("publishBookButton").disabled=!1;var t=e.response.status;417===t&&p.a.error(e.response.data.message,{position:p.a.POSITION.TOP_LEFT,autoClose:8e3}),500===t&&e.response.data.hasOwnProperty("message")?p.a.error(e.response.data.message,{position:p.a.POSITION.TOP_LEFT,autoClose:8e3}):p.a.error(e.response.data,{position:p.a.POSITION.TOP_LEFT,autoClose:8e3})}))}else{var m=document.getElementById("book_cover_from_device"),d=m.value;if(/(\.jpg|\.jpeg|\.png|\.gif)$/i.exec(d)){var u=new FileReader;u.readAsDataURL(l),u.onerror=function(){p.a.error("There was an error processing your file, try again.",{position:p.a.POSITION.TOP_LEFT,autoClose:5e3}),document.getElementById("beatLoadersForPostingBook").style.display="none",document.getElementById("publishBookButton").disabled=!1},u.onloadend=function(){var e=u.result,t={title:o,description:n,cover_image:e,author:i};k.a.post("https://book-directory-system-api.herokuapp.com/api/books_with_file",t).then((function(e){document.getElementById("beatLoadersForPostingBook").style.display="none",document.getElementById("publishBookButton").disabled=!1,p.a.info(e.data.message,{position:p.a.POSITION.TOP_LEFT,autoClose:2e3}),console.log(e.data),a.setState({newBookID:e.data.book._id}),document.getElementById("redirectionPreviewAfterPublishingBook").style.display="block"})).catch((function(e){document.getElementById("beatLoadersForPostingBook").style.display="none",document.getElementById("publishBookButton").disabled=!1;var t=e.response.status;417===t&&p.a.error(e.response.data.message,{position:p.a.POSITION.TOP_LEFT,autoClose:8e3}),500===t&&e.response.data.hasOwnProperty("message")?p.a.error(e.response.data.message,{position:p.a.POSITION.TOP_LEFT,autoClose:8e3}):p.a.error(e.response.data,{position:p.a.POSITION.TOP_LEFT,autoClose:8e3})}))}}else m.value="",p.a.error("File selected is not an image file, allowed file types are jpg, jpeg, png & gif.",{position:p.a.POSITION.TOP_LEFT,autoClose:5e3}),document.getElementById("beatLoadersForPostingBook").style.display="none",document.getElementById("publishBookButton").disabled=!1}}else p.a.info("Choose a book cover upload type",{position:p.a.POSITION.TOP_LEFT,autoClose:2e3})},a.state={book_title:"",book_highlight:"",book_upload_type:"",book_cover_from_device:"",book_cover_from_url:"",author:"",processData:!1,newBookID:""},p.a.configure(),a}return Object(m.a)(o,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-sm"},n.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Book Directory"),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"btn btn-outline-info nav-link p-2",to:"/"},"Home")))),n.a.createElement("div",{className:"container"},n.a.createElement("form",{onSubmit:this.submitBook},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,n.a.createElement("b",null,"Book Title:")),n.a.createElement("input",{type:"text",className:"form-control",id:"book_title",placeholder:"Book Title",value:this.state.book_title,onChange:function(t){return e.setState({book_title:t.target.value})}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,n.a.createElement("b",null,"Book Highlight:")),n.a.createElement("textarea",{className:"form-control",id:"book_highlight",placeholder:"Book Highlight",style:{width:"100%",height:"150px",overflow:"auto",resize:"none"},value:this.state.book_highlight,onChange:function(t){return e.setState({book_highlight:t.target.value})}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,n.a.createElement("b",null,"Author:")),n.a.createElement("input",{type:"text",className:"form-control",id:"author",placeholder:"Author's Name",value:this.state.author,onChange:function(t){return e.setState({author:t.target.value})}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,n.a.createElement("b",null,"Book Cover Upload Type:")),n.a.createElement("select",{className:"form-control",id:"preferredBookUploadType",value:this.state.book_upload_type,onChange:function(t){return e.preferredBookUploadType(t.target.value)}},n.a.createElement("option",{value:""},"Choose Your Preferred Option"),n.a.createElement("option",{value:"upload from device"},"Upload From Device"),n.a.createElement("option",{value:"upload from url"},"Upload From A Link"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,n.a.createElement("b",null,"Book Cover:")),n.a.createElement("input",{type:"file",className:"form-control",id:"book_cover_from_device",onChange:function(t){return e.setState({book_cover_from_device:t.target.files[0]})},accept:"image/*",required:!0,disabled:!0}),n.a.createElement("input",{type:"text",className:"form-control",id:"book_cover_from_url",placeholder:"Book Cover URL (Link)",value:this.state.book_cover_from_url,onChange:function(t){return e.setState({book_cover_from_url:t.target.value})},required:!0,disabled:!0})),n.a.createElement("button",{type:"submit",className:"form-control btn btn-info mt-1",id:"publishBookButton"},"Publish Book")),n.a.createElement("div",{id:"beatLoadersForPostingBook",align:"center"},n.a.createElement(b.BeatLoader,{size:50,color:"#c31432",loading:!0}),n.a.createElement("b",null,"Please Wait...")),n.a.createElement("div",{id:"redirectionPreviewAfterPublishingBook",align:"center"},n.a.createElement("b",null,"Preview your newly published book?"),n.a.createElement("div",null,n.a.createElement(s.b,{className:"btn btn-primary p-2 mr-4",to:"book/"+this.state.newBookID},"Cool ",n.a.createElement("span",{role:"img","aria-label":"Cool"},"\ud83d\ude06")),n.a.createElement("button",{className:"btn btn-danger p-2",onClick:function(){return e.closeAfterBookPublishNotice()}},"Nope ",n.a.createElement("span",{role:"img","aria-label":"Nope"},"\ud83d\ude2e")))),n.a.createElement("br",null)))}}]),o}(a.Component);var _=function(){return n.a.createElement(s.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(i.b,{path:"/",exact:!0,component:E}),n.a.createElement(i.b,{path:"/book/:id",component:v}),n.a.createElement(i.b,{path:"/post",component:y})))};r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(_,null)),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.7f97b512.chunk.js.map