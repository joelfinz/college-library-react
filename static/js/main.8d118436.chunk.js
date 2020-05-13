(this.webpackJsonpupdate=this.webpackJsonpupdate||[]).push([[0],{163:function(e,t,a){e.exports=a(224)},224:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(63),o=a.n(r),u=a(6),c=a(231),s=a(232),i=function(){return l.a.createElement("div",null,l.a.createElement(c.a,{variant:"dark",bg:"dark",theme:"primary",expand:"sm",fixed:"top"},l.a.createElement(u.b,{to:"/"},l.a.createElement(c.a.Brand,null,"College Library")),l.a.createElement(c.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(c.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(s.a,{className:"mr-auto"},l.a.createElement(s.a.Link,null,l.a.createElement(u.b,{to:"/books",style:{color:"white"}},"Books")),l.a.createElement(s.a.Link,null,l.a.createElement(u.b,{to:"/students",style:{color:"white"}},"Students"))))))},m=a(34),d=(a(173),a(162)),E=a(12),h=a(13),b=a(15),p=a(14),f=a(16),k=a(158),y=a.n(k).a.create({baseURL:"https://salty-island-31096.herokuapp.com"}),v=a(233),g=a(226),_=a(31),x=function(e){return l.a.createElement("div",null,l.a.createElement(v.a,{style:{margin:"5px",maxWidth:"400px",minHeight:"450px",alignSelf:"auto"}},l.a.createElement(v.a.Body,null,l.a.createElement(_.a,{name:e.stdname,size:"100",round:"5px",style:{marginBottom:"20px"}}),l.a.createElement(v.a.Title,null,e.bookname),l.a.createElement(v.a.Subtitle,null,"by ",e.authname),l.a.createElement("br",null),l.a.createElement(v.a.Text,null,e.briefdesc)),l.a.createElement(v.a.Footer,null,l.a.createElement(v.a.Link,null,l.a.createElement(u.b,{style:{textDecoration:"none"},to:{pathname:"/viewBook",state:{id:e.id}}},l.a.createElement(g.a,{variant:"secondary"},"View"))),l.a.createElement(v.a.Link,null,l.a.createElement(u.b,{to:{pathname:"/issueBook",state:{book_id:e.id}}},l.a.createElement(g.a,{variant:"secondary"},"Assign"))))))},S=a(227),j=a(161),B=a(228),O=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={books:[]},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.get("/api/books").then((function(t){e.setState({books:t.data.books})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){if(this.state.books.length>0){var e=this.state.books.map((function(e){return l.a.createElement(x,{key:e.id,id:e.id,bookname:e.book_name,authname:e.author_name,briefdesc:e.brief_description})}));return l.a.createElement("div",null,l.a.createElement(v.a,{style:{maxWidth:"900px",margin:"auto"}},l.a.createElement(v.a.Header,null,l.a.createElement(S.a,null,l.a.createElement(j.a,null,l.a.createElement("h2",null,"Books")),l.a.createElement(j.a,null,l.a.createElement(u.b,{className:"dark",style:{float:"right"},to:"/addBook"},l.a.createElement(g.a,null,"Add Book"))))),l.a.createElement(v.a.Body,null,l.a.createElement(S.a,{style:{display:"flex",justifyContent:"center"}},e))))}return l.a.createElement("center",null,l.a.createElement(B.a,{animation:"border",role:"status"}))}}]),t}(l.a.Component),w=function(){return l.a.createElement("div",null,l.a.createElement(O,null))},D=a(234),C=function(e){return l.a.createElement("div",null,l.a.createElement(u.b,{to:{pathname:"/viewStudent",state:{id:e.id}},style:{textDecoration:"none"}},l.a.createElement(D.a.Item,null,l.a.createElement(_.a,{name:e.stdname,size:"40px",round:!0}),"\xa0",e.stdname)))},A=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={students:[],viewState:"list"},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.get("/api/students").then((function(t){e.setState({students:t.data.students})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){if(this.state.students.length>0){var e=this.state.students.map((function(e){return l.a.createElement(C,{key:e.id,id:e.id,stdname:e.name,stdaddress:e.address})}));return l.a.createElement("div",null,l.a.createElement(v.a,{style:{maxWidth:"500px",margin:"auto"}},l.a.createElement(v.a.Header,null,l.a.createElement(S.a,null,l.a.createElement(j.a,null,l.a.createElement("h2",null,"Students")),l.a.createElement(j.a,null,l.a.createElement(u.b,{to:"/addStudent"},l.a.createElement(g.a,{style:{float:"right"}},"Add Student"))))),l.a.createElement(v.a.Body,null,l.a.createElement(D.a,null,e))))}return l.a.createElement("center",null,l.a.createElement(B.a,{animation:"border",role:"status"}))}}]),t}(l.a.Component),N=a(230),L=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={name:null,address:null,formSuccess:!1},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"submitForm",value:function(e){var t=this;e.preventDefault(),y.post("/api/addstudent",{student_name:this.state.name,student_address:this.state.address}).then((function(e){t.setState({formSuccess:!0})})).catch((function(e){console.log(e),alert(e)}))}},{key:"render",value:function(){var e=this;return!0===this.state.formSuccess?l.a.createElement(m.a,{to:"/students"}):l.a.createElement("div",null,l.a.createElement(v.a,{style:{maxWidth:"500px",margin:"auto"}},l.a.createElement(v.a.Header,null,l.a.createElement("h3",null,"Add Student record")),l.a.createElement(v.a.Body,null,l.a.createElement(N.a,{onSubmit:function(t){return e.submitForm(t)}},l.a.createElement(N.a.Group,null,l.a.createElement(N.a.Label,null,"Student Name"),l.a.createElement(N.a.Control,{type:"text",name:"name",onChange:function(t){return e.setState({name:t.target.value})},required:"required",placeholder:"Enter student name"})),l.a.createElement(N.a.Group,null,l.a.createElement(N.a.Label,null,"Address"),l.a.createElement(N.a.Control,{as:"textarea",name:"address",onChange:function(t){return e.setState({address:t.target.value})},required:"required",placeholder:"Enter address"})),l.a.createElement("center",null,l.a.createElement(g.a,{type:"submit",variant:"secondary"},"Add student"))))))}}]),t}(l.a.Component),T=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={book_name:null,auth_name:null,brief_desc:null,detailed_desc:null,formSuccess:!1},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"submitForm",value:function(e){var t=this;e.preventDefault(),y.post("/api/addbook",{book_name:this.state.book_name,author_name:this.state.auth_name,brief_desc:this.state.brief_desc,detailed_desc:this.state.detailed_desc}).then((function(e){t.setState({formSuccess:!0})})).catch((function(e){console.log(e),alert(e)}))}},{key:"render",value:function(){var e=this;return!0===this.state.formSuccess?l.a.createElement(m.a,{to:"/books"}):l.a.createElement("div",null,l.a.createElement(v.a,{style:{maxWidth:"500px",margin:"auto"}},l.a.createElement(v.a.Header,null,l.a.createElement("h2",null,"Add new book record")),l.a.createElement(N.a,{onSubmit:function(t){return e.submitForm(t)}},l.a.createElement(v.a.Body,null,l.a.createElement(N.a.Group,null,l.a.createElement(N.a.Label,null,"Book name"),l.a.createElement(N.a.Control,{type:"text",required:"required",placeholder:"Enter book name",onChange:function(t){return e.setState({book_name:t.target.value})}})),l.a.createElement(N.a.Group,null,l.a.createElement(N.a.Label,null,"Author name"),l.a.createElement(N.a.Control,{type:"text",required:"required",placeholder:"Enter author name",onChange:function(t){return e.setState({auth_name:t.target.value})}})),l.a.createElement(N.a.Group,null,l.a.createElement(N.a.Label,null,"Brief description"),l.a.createElement(N.a.Control,{type:"text",required:"required",placeholder:"Enter brief description",onChange:function(t){return e.setState({brief_desc:t.target.value})}}),l.a.createElement(N.a.Text,{className:"text-muted"},"Enter a short description in 10-20 words")),l.a.createElement(N.a.Group,null,l.a.createElement(N.a.Label,null,"Detailed description"),l.a.createElement(N.a.Control,{as:"textarea",rows:"3",required:"required",onChange:function(t){return e.setState({detailed_desc:t.target.value})}}),l.a.createElement(N.a.Text,{className:"text-muted"},"Enter a long description in 100-200 words"))),l.a.createElement(v.a.Footer,null,l.a.createElement("center",null,l.a.createElement(g.a,{type:"submit"},"Add Book"))))))}}]),t}(l.a.Component),q=function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(u.b,{style:{textDecoration:"none"},to:{pathname:"/viewBook",state:{id:e.book_id}}},e.book_name)),l.a.createElement("td",null,e.author_name),l.a.createElement("td",null,e.issuedate),l.a.createElement("td",null,e.issueddays),l.a.createElement("td",null,e.returndate),l.a.createElement("td",null,e.days))},F=a(229),W=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={id:null,studName:null,studAddress:null,issueData:[]},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.state.id;this.setState((function(){return{id:t}})),y.get("/api/student/"+t).then((function(t){e.setState({studName:t.data.student_name,studAddress:t.data.student_address})})).catch((function(e){return console.log(e)})),y.get("/api/getissueuser/"+t).then((function(t){e.setState({issueData:t.data.issue_details})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){if(null!=this.state.studName){var e=this.state.issueData.map((function(e){return"0:"===e.book_issuesince&&(e.book_issuesince="Issued today"),l.a.createElement(q,{key:e.book_id,book_id:e.book_id,book_name:e.book_name,author_name:e.book_author,issuedate:e.book_issuedate,issueddays:e.book_issuesince,returndate:e.book_returndate,days:e.book_returndaysremain})}));return l.a.createElement("div",null,l.a.createElement(v.a,{style:{maxWidth:"500px",margin:"auto"}},l.a.createElement(v.a.Header,null,l.a.createElement("h3",null,"Student Details")),l.a.createElement(v.a.Body,null,l.a.createElement("center",null,l.a.createElement(_.a,{name:this.state.studName,round:!0}),l.a.createElement(v.a.Text,null,l.a.createElement("h5",null,l.a.createElement("b",null,this.state.studName))),l.a.createElement(v.a.Text,null,this.state.studAddress)))),l.a.createElement("br",null),l.a.createElement(v.a,{style:{maxWidth:"500px",margin:"auto"}},l.a.createElement(v.a.Header,null,l.a.createElement("h3",null,"Borrowed books")),l.a.createElement(v.a.Body,null,l.a.createElement(F.a,{size:"sm",responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Book"),l.a.createElement("th",null,"Author"),l.a.createElement("th",null,"Issued on"),l.a.createElement("th",null,"Days passed"),l.a.createElement("th",null,"Return date"),l.a.createElement("th",null,"Days left"))),l.a.createElement("tbody",null,e)))))}return l.a.createElement("center",null,l.a.createElement(B.a,{animation:"border",role:"status"}))}}]),t}(l.a.Component),H=function(e){return l.a.createElement("div",null,l.a.createElement(u.b,{to:{pathname:"/viewStudent",state:{id:e.id}}},l.a.createElement(D.a.Item,null,l.a.createElement(_.a,{name:e.studname,size:"40px",round:!0}),"\xa0",e.studname)))},G=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={id:null,bookName:null,authName:null,briefDesc:null,detailedDesc:null,issuedlist:[]},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.state.id;this.setState((function(){return{id:t}})),y.get("/api/book/"+t).then((function(t){e.setState({bookName:t.data.book_name,authName:t.data.author_name,briefDesc:t.data.brief_description,detailedDesc:t.data.detailed_description})})).catch((function(e){return console.log(e)})),y.get("/api/getbookuser/"+t).then((function(t){e.setState({issuedlist:t.data.issue_details})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){if(null!=this.state.bookName){var e=this.state.issuedlist.map((function(e){return l.a.createElement("div",null,l.a.createElement(H,{key:e.student_id,id:e.student_id,studname:e.student_name}))}));return l.a.createElement("div",null,l.a.createElement(v.a,{style:{maxWidth:"500px",margin:"auto"}},l.a.createElement(v.a.Header,null,l.a.createElement("h3",null,"Book Details")),l.a.createElement(v.a.Body,null,l.a.createElement(_.a,{round:"5px"}),l.a.createElement(v.a.Title,null,l.a.createElement("h2",null,this.state.bookName)),l.a.createElement(v.a.Subtitle,null,l.a.createElement("h5",null,l.a.createElement("i",null,this.state.authName))),l.a.createElement(v.a.Text,null,this.state.detailedDesc)),l.a.createElement(v.a.Footer,null,l.a.createElement(v.a.Link,null,l.a.createElement(u.b,{to:{pathname:"/issueBook",state:{book_id:this.state.id}}},l.a.createElement(g.a,null,"Assign"))))),l.a.createElement("br",null),l.a.createElement(v.a,{style:{maxWidth:"500px",margin:"auto"}},l.a.createElement(v.a.Header,null,l.a.createElement("h4",null,"Students who have borrowed this book")),l.a.createElement(v.a.Body,null,l.a.createElement(D.a,null,e))))}return l.a.createElement("center",null,l.a.createElement(B.a,{animation:"border",role:"status"}))}}]),t}(l.a.Component),I=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={book_id:null,bookName:null,authName:null,briefDesc:null,detailedDesc:null,student_id:1,students:[],formSuccess:!1},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.state.book_id;this.setState((function(){return{book_id:t}})),y.get("/api/students").then((function(t){e.setState({students:t.data.students})})).catch((function(e){return console.log(e)})),y.get("/api/book/"+t).then((function(t){e.setState({bookName:t.data.book_name,authName:t.data.author_name,briefDesc:t.data.brief_description,detailedDesc:t.data.detailed_description})})).catch((function(e){return console.log(e)}))}},{key:"submitForm",value:function(e){var t=this;e.preventDefault(),y.post("/api/newissue",{issue_student:this.state.student_id,issue_book:this.state.book_id}).then((function(e){t.setState({formSuccess:!0})})).catch((function(e){console.log(e),alert(e)}))}},{key:"render",value:function(){var e=this;if(this.state.students.length>0){if(!0===this.state.formSuccess)return l.a.createElement(m.a,{to:{pathname:"/viewBook",state:{id:this.state.book_id}}});var t=this.state.students.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)}));return l.a.createElement("div",null,l.a.createElement(v.a,{style:{maxWidth:"500px",margin:"auto"}},l.a.createElement(v.a.Header,null,l.a.createElement("h3",null,"Assign Book to student")),l.a.createElement(v.a.Body,null,l.a.createElement(v.a,{style:{maxWidth:"300px",margin:"auto"}},l.a.createElement(v.a.Body,null,l.a.createElement(v.a.Title,null,this.state.bookName),l.a.createElement(v.a.Subtitle,null,this.state.authName),l.a.createElement(v.a.Text,null,this.state.briefDesc)),l.a.createElement(v.a.Footer,null,l.a.createElement(u.b,{style:{textDecoration:"none"},to:{pathname:"/viewBook",state:{id:this.state.book_id}}},l.a.createElement(g.a,null,"View Book"))))),l.a.createElement(v.a.Footer,null,l.a.createElement(N.a,null,l.a.createElement(N.a.Group,null,l.a.createElement(N.a.Label,null,"Select student"),l.a.createElement(N.a.Control,{as:"select",id:"form",onChange:function(t){return e.setState({student_id:t.target.value})}},t)),l.a.createElement("center",null,l.a.createElement(g.a,{onClick:function(t){return e.submitForm(t)}},"Assign Book"))))))}return l.a.createElement("center",null,l.a.createElement(B.a,{animation:"border",role:"status"}))}}]),t}(l.a.Component);o.a.render(l.a.createElement((function(){return l.a.createElement("div",null,l.a.createElement(u.a,{basename:"/college-library-react"},l.a.createElement(i,{style:{marginTop:"1px"}}),l.a.createElement(d.a,{style:{marginTop:"70px"}},l.a.createElement(m.b,{path:"/",exact:!0,component:w}),l.a.createElement(m.b,{path:"/books",exact:!0,component:O}),l.a.createElement(m.b,{path:"/addBook",exact:!0,component:T}),l.a.createElement(m.b,{path:"/students",exact:!0,component:A}),l.a.createElement(m.b,{path:"/addStudent",exact:!0,component:L}),l.a.createElement(m.b,{path:"/viewStudent",exact:!0,component:W}),l.a.createElement(m.b,{path:"/viewBook",exact:!0,component:G}),l.a.createElement(m.b,{path:"/issueBook",exact:!0,component:I}))))}),null),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.8d118436.chunk.js.map