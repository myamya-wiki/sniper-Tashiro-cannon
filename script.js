var w, ta, tid;
function c() {
    ta = f.url.value;
    w = window.open(ta, 'san', 'width=200, height=100');
    w.location = ta;
    tid = setTimeout("c()", f.ival.value);
}