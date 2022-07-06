var bold = document.getElementById("bold");
bold.onclick=function(){
	"use strict";
	document.execCommand("bold");
}

var italic = document.getElementById("italic");
italic.onclick=function(){
	"use strict";
	document.execCommand("italic");
}

var underline = document.getElementById("underline");
underline.onclick=function(){
	"use strict";
	document.execCommand("underline");
}

var sup = document.getElementById("sup");
sup.onclick=function(){
	"use strict";
	document.execCommand("superscript");
}

var sub = document.getElementById("sub");
sub.onclick=function(){
	"use strict";
	document.execCommand("subscript");
}

var left = document.getElementById("left");
left.onclick=function(){
	"use strict";
	document.execCommand("justifyLeft");
}

var right = document.getElementById("right");
right.onclick=function(){
	"use strict";
	document.execCommand("justifyRight");
}

var center = document.getElementById("center");
center.onclick=function(){
	"use strict";
	document.execCommand("justifyCenter");
}

var del = document.getElementById("delete");
del.onclick=function(){
	"use strict";
	document.execCommand("delete");
}

var undo = document.getElementById("undo");
undo.onclick=function(){
	"use strict";
	document.execCommand("undo");
}

var redo = document.getElementById("redo");
redo.onclick=function(){
	"use strict";
	document.execCommand("redo");
}