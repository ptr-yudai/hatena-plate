<script>
var codeBlocks = document.getElementsByClassName('code');
[].forEach.call(codeBlocks, function(e) {
    if (!/lang/.test(e.className)) {
        return;
    }

    var lines = e.innerHTML.split(/\n/);
    var codeBlock = "";
    lines.forEach(function(line){
        if(line != ""){
            codeBlock += '<div class="code-line">' + line + '</div>'      
        }
    })
    e.innerHTML = codeBlock;
    e.classList.add("code-lang");
});
</script>
